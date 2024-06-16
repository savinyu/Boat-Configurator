import { Suspense } from "react";
import {Headphone} from "./Headphone";
import {Float} from "@react-three/drei";

export default function Experience(){
    
    return<>
        <Suspense fallback={null}>
            <Float 
                floatIntensity={2}
                rotationIntensity={0.8}
                speed={1.5}
            >
                <mesh scale={0.01} >
                    <Headphone />
                </mesh>
            </Float>
        </Suspense>
    </>
}