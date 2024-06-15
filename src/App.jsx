import {Canvas, useThree} from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, PresentationControls } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Leva } from 'leva'
import {Perf} from 'r3f-perf'
import Experience from './componenets/Experience'
import Configurator from './componenets/Configurator'
import './App.css'
import { CustomisationProvider, useCustomisation } from './contexts/Customisation'
import gsap from 'gsap'
import CameraControls from './componenets/CameraControls'

function App() {
  // const cameraRef = useRef();
  // const animateCamera = ()=>{
  //   if(!cameraRef.current) return;
  //   gsap.to(cameraRef.current.position,{
  //     duration:2,
  //     z:1,
  //     y:8,
  //     onUpdate:()=>{
  //       cameraRef.current.lookAt(0,0,0);
  //     },
  //     ease: 'power3.inOut'
  //   });
  // };
  return (
    <CustomisationProvider>
      <div className="App">
        <Canvas 
          camera={{
            fov:60,
            position:[0,0,10],
            near:0.1,
            far:100
          }} 
        > 
          {/* Background  */}
          <color attach="background" args={['#171716']} />

          {/* Performance Usage  */}
          <Perf position="bottom-left" />

          {/* Lighting */}
          <ambientLight intensity={20}/>
          <directionalLight position={[4,0,0]} intensity={5}/>
          <Environment preset='studio' environmentIntensity={2}/>

          <CameraControls/>

          <PresentationControls
            enabled={false}
            global={true}
            cursor={true}
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 3, tension: 400 } }
          >
            {/* Main Model  */}
            <Suspense fallback={null}>
              <Experience/>
            </Suspense>

          </PresentationControls>

          {/* Shadows  */}
          <ContactShadows 
                  position-y={-4}
                  scale={8}
                  opacity={1}
                  blur={2.4}   
              />

        </Canvas>

        {/* UI Editor  */}
        <Leva collapsed={true}/>

        {/* Configurator  */}
        <Configurator/>
        
      </div>
    </CustomisationProvider>
  )
}

export default App
