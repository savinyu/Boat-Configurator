import {Canvas} from '@react-three/fiber'
import { Environment, OrbitControls, PresentationControls } from '@react-three/drei'
import { Suspense } from 'react'
import Experience from './componenets/Experience'
import './App.css'
import { Leva } from 'leva'

function App() {
  return (
    <div className="App">
      <Canvas camera={{fov:60,position:[-15,100,-150]}} > 
        <color attach="background" args={['#15151a']} />
        <ambientLight intensity={1}/>
        <Environment preset='studio' />
        <OrbitControls 
          makeDefault
          enableZoom={true}
          enablePan={true}
        />
          <Suspense fallback={null}>
            <Experience/>
          </Suspense>
      </Canvas>
      <Leva collapsed={true}/>
    </div>
  )
}

export default App
