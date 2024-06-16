import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { CameraModes, useCustomisation } from "../contexts/Customisation"
import { useRef } from "react"

const cameraPositions = {
    [CameraModes.Headband]:{
        position: new THREE.Vector3(0,8,4),
        target: new THREE.Vector3(0,0.5,0)
    },
    [CameraModes.Earcup]:{
        position: new THREE.Vector3(0,0,5),
        target: new THREE.Vector3(0,-0.5,0)
    }
}


export default function CameraControls(){
    const { cameraMode, setCameraMode} = useCustomisation();
    const orbitControls = useRef();

    useFrame((state,delta)=>{
        if(cameraMode == CameraModes.FREE){
            return;
        }
        state.camera.position.lerp(cameraPositions[cameraMode].position, 3 * delta );
        orbitControls.current.target.lerp(cameraPositions[cameraMode].target, 3 * delta );
    })
    return(
        <>
            <OrbitControls 
                ref={orbitControls}
                onStart={()=>{
                    setCameraMode(CameraModes.FREE)
                }}
                makeDefault
                enabled={true}
                enableDamping={true}
                enablePan={false}
                enableZoom={true}
                maxPolarAngle={Math.PI/1.6} 
                minPolarAngle={Math.PI/8}
                maxDistance={15}
                minDistance={5}
            />
        </>
    )
}