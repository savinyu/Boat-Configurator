import { Suspense } from "react";
import {Headphone} from "../assets/Headphone";
import { Float, useGLTF } from "@react-three/drei";
import { useControls} from 'leva'

export default function Experience(){
    const model = useGLTF('./microsoft_headphones_surface_2.glb');
    const headphone = useControls("position",{
        x: {value:-0.1,min:-1,max:1,step:0.01}, 
        y: {value:-4,min:-1,max:1,step:0.01},
        z: {value:-4,min:-1,max:4,step:0.01} 
    })
    return<>
        <Suspense fallback={null}>
            <Float 
                floatIntensity={0.5}
                rotationIntensity={0.1}
                speed={0.5}
            >
                {/* <primitive object={model.scene}  scale={0.001} position={[headphone.x,headphone.y,headphone.z]}/> */}
                <mesh position={[0,-5,-10]} scale={0.1} >
                    <Headphone position={[0,-5,-4]}/>
                </mesh>
            </Float>
            
        </Suspense>
    </>
}