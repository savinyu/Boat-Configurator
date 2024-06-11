import {Canvas} from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, PresentationControls } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Leva } from 'leva'
import {Perf} from 'r3f-perf'
import Experience from './componenets/Experience'
import Configurator from './componenets/Configurator'
import './App.css'
import { CustomisationProvider } from './contexts/Customisation'

function App() {

  const [rotate360,setRotate360] = useState(true);
  
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
          <color attach="background" args={['#15151a']} />

          {/* Performance Usage  */}
          <Perf position="bottom-left" />

          {/* Lighting */}
          <ambientLight intensity={1}/>
          <Environment preset='studio' environmentIntensity={2}/>

          {/* Rotation Controls  */}
          <OrbitControls 
            makeDefault
            enabled={rotate360}
            enableDamping={true}
            enablePan={false}
            enableZoom={true}
            maxPolarAngle={Math.PI/1.6} 
            minPolarAngle={Math.PI/8}
            maxDistance={15}
            minDistance={5}
          />
          <PresentationControls
            enabled={!rotate360}
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
