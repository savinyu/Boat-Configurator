import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useCustomisation } from "../contexts/Customisation"
import { useRef } from "react"

const CameraPostions=[
    {
        position: new THREE.Vector3(0,8,4),
        target: new THREE.Vector3(0,0.5,0)
    },
    {
        position: new THREE.Vector3(0,0,5),
        target: new THREE.Vector3(0,-0.5,0)
    }
]


export default function CameraControls(){
    const {headbandPosition,setHeadbandPosition, earcupPosition, setEarcupPosition} = useCustomisation();
    const orbitControls = useRef();

    useFrame((state,delta)=>{
        if(headbandPosition){
            setEarcupPosition(false);
            state.camera.position.lerp(CameraPostions[0].position,3*delta );
            orbitControls.current.target.lerp(CameraPostions[0].target,3*delta );
        }
        if(earcupPosition){
            setHeadbandPosition(false);
            state.camera.position.lerp(CameraPostions[1].position,3 * delta);
            orbitControls.current.target.lerp(CameraPostions[1].target,3 * delta )
        }
    })
    return(
        <>
            <OrbitControls 
                ref={orbitControls}
                onStart={()=>{
                    setHeadbandPosition(false);
                    setEarcupPosition(false);
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