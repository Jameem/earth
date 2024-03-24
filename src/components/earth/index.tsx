import DayMap from '../../assets/8k_earth_daymap.jpg';
import NormalMap from '../../assets/8k_earth_normal_map.jpg';
import SpecularMap from '../../assets/8k_earth_specular_map.jpg';
import CloudsMap from '../../assets/8k_earth_clouds.jpg';
import MoonMap from '../../assets/moon texture.jpg';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { MutableRefObject, useEffect, useRef } from 'react';

export function Earth() {
  const [dayMap, normalMap, specularMap, cloudsMap, moonMap] = useLoader(
    TextureLoader,
    [DayMap, NormalMap, SpecularMap, CloudsMap, MoonMap]
  );
  const earthRef: MutableRefObject<THREE.Mesh | null> = useRef(null);
  const cloudsRef: MutableRefObject<THREE.Mesh | null> = useRef(null);
  const moonRef: MutableRefObject<THREE.Mesh | null> = useRef(null);

  useEffect(() => {
    const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const moonMaterial = new THREE.MeshBasicMaterial({
      map: moonMap,
      specularMap,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    earthRef.current?.add(moon);
    moon.position.x = 28;
    moon.rotation.y = 0.004;
    moonRef.current = moon;
  }, [moonMap, specularMap]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef?.current) {
      earthRef.current.rotation.y = elapsedTime / 6;
    }

    if (cloudsRef?.current) {
      cloudsRef.current.rotation.y = elapsedTime / 6;
    }

    if (moonRef?.current) {
      moonRef.current.rotation.y = elapsedTime / 4;
    }
  });

  return (
    <>
      <pointLight color='#f6f3ea' position={[2, 0, 5]} intensity={20.2} />
      <Stars
        radius={250}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
}
