import {Canvas} from '@react-three/fiber'
import { Environment, OrbitControls, PresentationControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Leva } from 'leva'
import {Perf} from 'r3f-perf'
import Experience from './componenets/Experience'
import './App.css'

function App() {
  return (
    <div className="App">
      <Canvas camera={{fov:60,position:[0,0,10]}} > 
        <color attach="background" args={['#15151a']} />
        <Perf position="top-left" />
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
