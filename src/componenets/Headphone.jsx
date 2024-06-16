import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomisation } from '../contexts/Customisation';

export function Headphone(props) {
  const {earcupColor, headbandColor} = useCustomisation();

  const { nodes, materials } = useGLTF('/microsoft_headphones_surface_2.glb')
  return (
    <group {...props} dispose={null} position={[0, 0,0]}>
      <group
        name="Sketchfab_model"
        position={[0, 0, 0]}
        rotation={[-265.45,0,-12.55]}
        userData={{ name: 'Sketchfab_model' }}>
        <group
          name="Collada_visual_scene_group"
          rotation={[Math.PI / 1.7, 0, 0]}
          userData={{ name: 'Collada visual scene group' }}>
          <group
            name="Microsoft_Surface_Headphones"
            position={[0, 0,0]}
            userData={{ name: 'Microsoft_Surface_Headphones' }}>
            <group
              name="arco_superior"
              position={[0, 296.346, -70.041]}
              userData={{ name: 'arco_superior' }}>
              <mesh
                name="defaultMaterial"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial.geometry}
                // material={materials['1001']}
                position={[0, -0.607, 0.422]}
                userData={{ name: 'defaultMaterial' }}
              ><meshStandardMaterial {...materials['1001']} metalness={0} roughness={1} color={headbandColor}/></mesh>
            </group>
            <group
              name="direita"
              position={[233.428, -218.649, -70.454]}
              userData={{ name: 'direita' }}>
              <group
                name="1005_haste"
                position={[74.473, 161.897, 1.497]}
                rotation={[Math.PI / 2, -0.483, Math.PI / 2]}
                userData={{ name: '1005_haste' }}>
                <mesh
                  name="defaultMaterial_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial_3.geometry}
                  material={materials['1005']}
                  userData={{ name: 'defaultMaterial' }}
                />
                <group
                  name="1006_hardware"
                  position={[-3.129, 25.07, 276.109]}
                  rotation={[-1.088, Math.PI / 2, 0]}
                  userData={{ name: '1006_hardware' }}>
                  <mesh
                    name="defaultMaterial_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_5.geometry}
                    material={materials['1006']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                  <mesh
                    name="defaultMaterial_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_6.geometry}
                    material={materials['1006']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                  <mesh
                    name="defaultMaterial_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_7.geometry}
                    material={materials['1006']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                  <mesh
                    name="defaultMaterial_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_8.geometry}
                    material={materials['1006']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                  <mesh
                    name="defaultMaterial_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_9.geometry}
                    material={materials['1006']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                </group>
                <group
                  name="bot��es"
                  position={[-1.497, -23.496, 181.664]}
                  rotation={[-1.588, 0, -0.123]}
                  userData={{ name: 'bot��es' }}>
                  <mesh
                    name="defaultMaterial_10"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_10.geometry}
                    material={materials['1006']}
                    position={[114.551, -77.944, 20.538]}
                    rotation={[-1.045, -0.904, -1.54]}
                    userData={{ name: 'defaultMaterial' }}
                  />
                  <mesh
                    name="defaultMaterial_11"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_11.geometry}
                    material={materials['1006']}
                    position={[136.719, -22.378, 21.283]}
                    rotation={[-0.472, -1.217, -0.922]}
                    userData={{ name: 'defaultMaterial' }}
                  />
                </group>
                <group
                  name="1008_volume"
                  position={[-1.497, -43.364, 182.013]}
                  rotation={[-1.588, 0, 2.064]}
                  userData={{ name: '1008_volume' }}>
                  <mesh
                    name="defaultMaterial_12"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_12.geometry}
                    material={materials['1008']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                  <mesh
                    name="defaultMaterial_13"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_13.geometry}
                    material={materials['1008']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                </group>
                <group
                  name="pad"
                  position={[-1.497, 91.984, 181.205]}
                  rotation={[-2.182, Math.PI / 2, 0]}
                  userData={{ name: 'pad' }}>
                  <mesh
                    name="defaultMaterial_14"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_14.geometry}
                    // material={materials['1009']}
                    position={[37.548, 27.226, 0]}
                    rotation={[Math.PI / 2, -0.952, Math.PI / 2]}
                    userData={{ name: 'defaultMaterial' }}
                  ><meshStandardMaterial {...materials['1009']} metalness={0} roughness={1} color={earcupColor}/></mesh>
                  <mesh
                    name="defaultMaterial_15"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_15.geometry}
                    material={materials['1010']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                </group>
                <mesh
                  name="defaultMaterial_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial_4.geometry}
                  material={materials['1005']}
                  position={[139.411, -0.437, 172.695]}
                  rotation={[-1.088, Math.PI / 2, 0]}
                  userData={{ name: 'defaultMaterial' }}
                />
              </group>
              <mesh
                name="defaultMaterial_1"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_1.geometry}
                // material={materials['1002']}
                position={[1.728, 437.225, 0.86]}
                rotation={[1.571, 0.539, -1.571]}
                userData={{ name: 'defaultMaterial' }}
              ><meshStandardMaterial {...materials['1002']} metalness={0} roughness={1} color={headbandColor}/></mesh>
              <mesh
                name="defaultMaterial_2"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_2.geometry}
                material={materials['1004']}
                position={[-13.507, 437.96, 0.893]}
                userData={{ name: 'defaultMaterial' }}
              />
            </group>
            <group
              name="esquerda"
              position={[-238.762, -203.258, -34.573]}
              userData={{ name: 'esquerda' }}>
              <group
                name="1005_haste_2"
                position={[-69.139, 146.507, -34.384]}
                rotation={[Math.PI / 2, -1.094, Math.PI / 2]}
                userData={{ name: '1005_haste_2' }}>
                <mesh
                  name="defaultMaterial_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial_18.geometry}
                  material={materials['1005']}
                  userData={{ name: 'defaultMaterial' }}
                />
                <group
                  name="1008_volume_2"
                  position={[-1.497, -182.286, 42.198]}
                  rotation={[-3.118, 0, -Math.PI]}
                  userData={{ name: '1008_volume_2' }}>
                  <mesh
                    name="defaultMaterial_22"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_22.geometry}
                    material={materials['1008']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                  <mesh
                    name="defaultMaterial_23"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_23.geometry}
                    material={materials['1008']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                  <mesh
                    name="defaultMaterial_24"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_24.geometry}
                    material={materials['1008']}
                    userData={{ name: 'defaultMaterial' }}
                  />
                </group>
                <group
                  name="pad_2"
                  position={[-1.48, -180.204, -87.071]}
                  rotation={[-1.571, Math.PI / 2, 0]}
                  userData={{ name: 'pad_2' }}>
                  <mesh
                    name="defaultMaterial_25"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_25.geometry}
                    // material={materials['1009']}
                    position={[0, -40.307, -0.017]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    userData={{ name: 'defaultMaterial' }}
                  ><meshStandardMaterial {...materials['1009']} metalness={0} roughness={1} color={earcupColor}/></mesh>
                  <mesh
                    name="defaultMaterial_26"
                    castShadow
                    receiveShadowstandar
                    geometry={nodes.defaultMaterial_26.geometry}
                    material={materials['1010']}
                    position={[0, -2.971, 0.017]}
                    userData={{ name: 'defaultMaterial' }}
                  />
                </group>
                <mesh
                  name="defaultMaterial_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial_19.geometry}
                  material={materials['1005']}
                  position={[139.411, -172.695, -0.668]}
                  rotation={[-0.477, Math.PI / 2, 0]}
                  userData={{ name: 'defaultMaterial' }}
                />
                <mesh
                  name="defaultMaterial_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial_20.geometry}
                  material={materials['1007']}
                  position={[-1.497, -181.811, 22.333]}
                  rotation={[-3.118, 0, -Math.PI]}
                  userData={{ name: 'defaultMaterial' }}
                />
                <mesh
                  name="defaultMaterial_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial_21.geometry}
                  material={materials['1007']}
                  position={[-25.724, -152.69, 22.638]}
                  rotation={[-3.118, 0, -2.711]}
                  userData={{ name: 'defaultMaterial' }}
                />
              </group>
              <mesh
                name="defaultMaterial_16"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_16.geometry}
                // material={materials['1003']}
                position={[3.606, 421.834, -35.021]}
                rotation={[1.571, -0.539, 1.572]}
                userData={{ name: 'defaultMaterial' }}
              ><meshStandardMaterial {...materials['1003']} metalness={0} roughness={1} color={headbandColor}/></mesh>
              <mesh
                name="defaultMaterial_17"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_17.geometry}
                material={materials['1004']}
                position={[18.588, 422.569, -34.988]}
                userData={{ name: 'defaultMaterial' }}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/microsoft_headphones_surface_2.glb')
