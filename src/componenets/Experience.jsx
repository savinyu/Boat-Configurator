import { Suspense } from "react";
import {Headphone} from "../assets/Headphone";
import { ContactShadows, Float, useGLTF } from "@react-three/drei";
import { useControls} from 'leva'

export default function Experience(){
    const model = useGLTF('./microsoft_headphones_surface_2.glb');
    const headphone = useControls("position",{
        x: {value:-0.1,min:-1,max:1,step:0.01}, 
        y: {value:-4,min:-1,max:1,step:0.01},
        z: {value:-4,min:-1,max:4,step:0.01} 
    })
    const shadows = useControls("shadows",{ 
        y: {value:-4,min:-5,max:0,step:0.01}
    })
    return<>
        <Suspense fallback={null}>
            <Float 
                floatIntensity={2}
                rotationIntensity={1}
                speed={2}
            >
                <mesh scale={0.01} >
                    <Headphone />
                </mesh>
            </Float>
            
            
        </Suspense>
    </>
}