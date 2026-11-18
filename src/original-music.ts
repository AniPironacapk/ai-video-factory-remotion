/**
 * Original instrumental underscore for the Cinematic composition.
 * Synthesized deterministically, no external API, licensed tracks, or downloads.
 * Produces a 24-second mono PCM WAV as a data URI.
 */
const SAMPLE_RATE = 11025;
const DURATION_SECONDS = 24;
const CHORDS = [
  [220, 261.63, 329.63],
  [174.61, 220, 261.63],
  [196, 246.94, 293.66],
];
const write16 = (view: DataView, offset: number, value: number) => view.setUint16(offset, value, true);
const write32 = (view: DataView, offset: number, value: number) => view.setUint32(offset, value, true);

export const makeOriginalMusic = (): string => {
  const samples = SAMPLE_RATE * DURATION_SECONDS;
  const wav = new Uint8Array(44 + samples * 2);
  const view = new DataView(wav.buffer);
  const tag = (offset: number, value: string) => {
    for (let i = 0; i < value.length; i++) wav[offset + i] = value.charCodeAt(i);
  };
  tag(0, 'RIFF'); write32(view, 4, wav.length - 8); tag(8, 'WAVE');
  tag(12, 'fmt '); write32(view, 16, 16); write16(view, 20, 1);
  write16(view, 22, 1); write32(view, 24, SAMPLE_RATE);
  write32(view, 28, SAMPLE_RATE * 2); write16(view, 32, 2); write16(view, 34, 16);
  tag(36, 'data'); write32(view, 40, samples * 2);
  for (let n = 0; n < samples; n++) {
    const t = n / SAMPLE_RATE;
    const chordIndex = Math.min(CHORDS.length - 1, Math.floor(t / 8));
    const local = t % 8;
    const fade = Math.min(1, t / 1.5, (DURATION_SECONDS - t) / 1.5);
    const chord = CHORDS[chordIndex];
    let signal = 0;
    for (const freq of chord) {
      signal += Math.sin(2 * Math.PI * freq * t) * 0.065;
      signal += Math.sin(2 * Math.PI * freq * 2 * t) * 0.013;
    }
    const beat = t % 0.67;
    const beatNumber = Math.floor(t / 0.67);
    const pluckFreq = chord[beatNumber % 3] * (beatNumber % 4 === 0 ? 2 : 1);
    signal += 0.065 * Math.exp(-9 * beat) * Math.sin(2 * Math.PI * pluckFreq * beat);
    const output = Math.max(-1, Math.min(1, signal * Math.max(0, fade)));
    view.setInt16(44 + n * 2, Math.round(output * 32767), true);
  }
  // Chunk to avoid argument-size limits in the browser.
  let binary = '';
  for (let i = 0; i < wav.length; i += 8192) {
    binary += String.fromCharCode(...wav.subarray(i, i + 8192));
  }
  return 'data:audio/wav;base64,' + btoa(binary);
};
