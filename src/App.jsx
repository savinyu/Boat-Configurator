import {Canvas} from '@react-three/fiber'
import { ContactShadows,
  Environment, 
  PresentationControls
 } from '@react-three/drei'
import { Suspense } from 'react'
import {Perf} from 'r3f-perf'
import Experience from './componenets/Experience'
import Configurator from './componenets/Configurator'
import { CustomisationProvider } from './contexts/Customisation'
import CameraControls from './componenets/CameraControls'
import './App.css'

function App() {

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

        {/* Configurator  */}
        <Configurator/>
        
      </div>
    </CustomisationProvider>
  )
}

export default App
