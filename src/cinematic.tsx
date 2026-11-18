import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import * as THREE from 'three';
import request from '../video-request.json';

type ActorProps = {x: number; shirt: string; skin: string; hair: string; frame: number; active: boolean};
const Actor: React.FC<ActorProps> = ({x, shirt, skin, hair, frame, active}) => {
  const sway = Math.sin(frame / 13 + x) * 0.035;
  const talk = active ? Math.abs(Math.sin(frame * 0.62)) * 0.11 : 0.02;
  return (
    <group position={[x, -0.95 + Math.sin(frame / 17 + x) * 0.025, 1]} rotation={[0, x < 0 ? 0.14 : -0.14, sway]}>
      <mesh position={[0, -0.63, 0]} castShadow><capsuleGeometry args={[0.19, 0.7, 8, 16]}/><meshStandardMaterial color={shirt} roughness={0.9}/></mesh>
      <mesh position={[-0.14, -1.28, 0]} castShadow><capsuleGeometry args={[0.07, 0.48, 6, 12]}/><meshStandardMaterial color="#243047"/></mesh>
      <mesh position={[0.14, -1.28, 0]} castShadow><capsuleGeometry args={[0.07, 0.48, 6, 12]}/><meshStandardMaterial color="#243047"/></mesh>
      <mesh position={[-0.34, -0.57, 0]} rotation={[0,0,-0.3+Math.sin(frame/12)*0.06]} castShadow><capsuleGeometry args={[0.075, 0.55, 6, 12]}/><meshStandardMaterial color={skin}/></mesh>
      <mesh position={[0.34, -0.57, 0]} rotation={[0,0,0.3-Math.sin(frame/12)*0.06]} castShadow><capsuleGeometry args={[0.075, 0.55, 6, 12]}/><meshStandardMaterial color={skin}/></mesh>
      <mesh position={[0, 0.3, 0]} castShadow><sphereGeometry args={[0.43, 32, 24]}/><meshStandardMaterial color={skin} roughness={0.95}/></mesh>
      <mesh position={[0, 0.57, -0.04]} scale={[1.06,0.48,1.03]} castShadow><sphereGeometry args={[0.43, 24, 16]}/><meshStandardMaterial color={hair}/></mesh>
      {[-0.15,0.15].map((dx)=><mesh key={dx} position={[dx,0.36,0.398]}><sphereGeometry args={[0.035,12,12]}/><meshBasicMaterial color="#202132"/></mesh>)}
      <mesh position={[0,0.13,0.42]} scale={[0.11,talk+0.035,0.02]}><sphereGeometry args={[1,12,12]}/><meshBasicMaterial color="#733e4c"/></mesh>
    </group>
  );
};

const Stage: React.FC<{frame:number; index:number}> = ({frame,index}) => {
  const warm = index === 2;
  return (
    <ThreeCanvas width={1080} height={1920} camera={{position: [0, 0.4, 9.6], fov: 38}} shadows>
      <color attach="background" args={[warm ? '#9b5e63' : '#182847']}/>
      <ambientLight intensity={1.3} color={warm ? '#ffdfbb' : '#afcaff'}/>
      <directionalLight position={[-4, 7, 6]} intensity={2.8} color={warm ? '#ffbc79' : '#b4c7ff'} castShadow shadow-mapSize={[1024,1024]}/>
      <pointLight position={[3,3,-1]} intensity={warm ? 35 : 14} color={warm ? '#ffca7d' : '#7eaaff'}/>
      <mesh position={[0,-2.6,-1]} receiveShadow><boxGeometry args={[30,0.3,12]}/><meshStandardMaterial color={warm ? '#554350' : '#23364c'}/></mesh>
      {Array.from({length:7},(_,i)=>(
        <mesh key={i} position={[(i-3)*1.6,-0.3,-6-Math.abs(i-3)*0.5]} rotation={[0,0,(i-3)*0.06]}>
          <coneGeometry args={[1.2,3.6+Math.abs(i-3)*0.3,4]}/>
          <meshStandardMaterial color={warm ? '#765e73' : '#2c4160'} flatShading/>
        </mesh>
      ))}
      <mesh position={[2.6,2.6,-8]}><sphereGeometry args={[1.3,32,24]}/><meshBasicMaterial color={warm ? '#ffd18a' : '#94b7e4'}/></mesh>
      <group position={[Math.sin(frame/80)*0.06,0,0]}>
        <Actor x={-0.85} shirt="#a575b4" skin="#dbab87" hair="#342d44" frame={frame} active={index!==1}/>
        <Actor x={0.85} shirt="#497f9e" skin="#bd8869" hair="#302b35" frame={frame} active={index===1}/>
      </group>
    </ThreeCanvas>
  );
};

export const Cinematic: React.FC = () => {
  const frame=useCurrentFrame();
  const {fps,durationInFrames}=useVideoConfig();
  const scenes=request.scenes.length ? request.scenes : [{title:request.title,subtitle:request.subtitle}];
  const per=durationInFrames/scenes.length;
  const index=Math.min(scenes.length-1,Math.floor(frame/per));
  const local=frame-index*per;
  const fade=interpolate(local,[0,12,per-12,per],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const entrance=spring({frame:local,fps,config:{damping:20,stiffness:90}});
  return (
    <AbsoluteFill style={{background:'#15243c',fontFamily:'Arial, sans-serif',color:'white'}}>
      <Stage frame={frame} index={index}/>
      <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(5,10,25,.4) 0%,transparent 35%,rgba(5,10,25,.87) 85%)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',top:165,left:85,fontSize:32,fontWeight:800,letterSpacing:5,color:'#ffe1ad'}}>REFLEXIONES DE VIDA</div>
      <div style={{position:'absolute',left:75,right:75,bottom:240,opacity:fade,transform:`translateY(${(1-entrance)*60}px)`}}>
        <div style={{fontSize:72,fontWeight:900,lineHeight:1.12,textShadow:'0 4px 15px #101522',overflowWrap:'anywhere'}}>{scenes[index].title}</div>
        <div style={{fontSize:43,marginTop:36,lineHeight:1.3,color:'#f4e6d7'}}>{scenes[index].subtitle}</div>
      </div>
      <div style={{position:'absolute',left:85,right:85,bottom:115,height:7,borderRadius:8,background:'#ffffff50'}}>
        <div style={{width:`${(frame+1)/durationInFrames*100}%`,height:'100%',background:'#ffca7d',borderRadius:8}}/>
      </div>
    </AbsoluteFill>
  );
};
