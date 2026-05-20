"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SPHERE_COUNT = 7;

const generatePositions = () => {
  const positions = [];
  for (let i = 0; i < SPHERE_COUNT; i++) {
    positions.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      )
    );
  }
  return positions;
};

function SystemGraph() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef(new THREE.Vector2());
  
  const initialPositions = useMemo(() => generatePositions(), []);
  const targetPositions = useMemo(() => initialPositions.map((p) => p.clone()), [initialPositions]);

  // Create geometry for lines
  const linesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(SPHERE_COUNT * SPHERE_COUNT * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const onPointerMove = (e: any) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  useFrame((state) => {
    if (!groupRef.current || !linesRef.current) return;

    const vector = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0.5);
    vector.unproject(state.camera);
    const dir = vector.sub(state.camera.position).normalize();
    const distance = -state.camera.position.z / dir.z;
    const pos = state.camera.position.clone().add(dir.multiplyScalar(distance));

    const time = state.clock.getElapsedTime();
    const currentPositions: THREE.Vector3[] = [];

    // 1. Update Nodes
    let childIndex = 0;
    groupRef.current.children.forEach((child, i) => {
      if (child.type !== "Mesh") return;

      const originalPos = initialPositions[childIndex];
      const targetPos = targetPositions[childIndex];

      const floatX = Math.sin(time * 0.5 + childIndex) * 0.5;
      const floatY = Math.cos(time * 0.3 + childIndex) * 0.5;
      
      const basePos = new THREE.Vector3(
        originalPos.x + floatX,
        originalPos.y + floatY,
        originalPos.z
      );

      const distToMouse = basePos.distanceTo(pos);
      if (distToMouse < 3) {
        const force = (3 - distToMouse) * 0.5;
        const pushDir = basePos.clone().sub(pos).normalize();
        targetPos.copy(basePos).add(pushDir.multiplyScalar(force));
      } else {
        targetPos.copy(basePos);
      }

      child.position.lerp(targetPos, 0.05);
      currentPositions.push(child.position.clone());
      childIndex++;
    });

    // 2. Update Lines
    const positionsAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
    let index = 0;

    for (let i = 0; i < SPHERE_COUNT; i++) {
      for (let j = i + 1; j < SPHERE_COUNT; j++) {
        const dist = currentPositions[i].distanceTo(currentPositions[j]);
        if (dist < 5) {
          positionsAttr.setXYZ(index++, currentPositions[i].x, currentPositions[i].y, currentPositions[i].z);
          positionsAttr.setXYZ(index++, currentPositions[j].x, currentPositions[j].y, currentPositions[j].z);
        } else {
          // Hide line by collapsing to origin if too far
          positionsAttr.setXYZ(index++, 0, 0, 0);
          positionsAttr.setXYZ(index++, 0, 0, 0);
        }
      }
    }
    
    // Fill the rest with zeros to clear unused segments
    while (index < SPHERE_COUNT * SPHERE_COUNT) {
      positionsAttr.setXYZ(index++, 0, 0, 0);
    }
    
    positionsAttr.needsUpdate = true;
  });

  return (
    <group onPointerMove={onPointerMove}>
      {/* Nodes */}
      <group ref={groupRef}>
        {initialPositions.map((pos, i) => (
          <mesh key={`sphere-${i}`} position={pos}>
            <sphereGeometry args={[0.4 + Math.random() * 0.3, 64, 64]} />
            <meshPhysicalMaterial
              transmission={0.8}
              opacity={1}
              roughness={0.25}
              ior={1.5}
              thickness={2}
              color="#043927"
              emissive="#043927"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Connections */}
      <lineSegments ref={linesRef} geometry={linesGeometry}>
        <lineBasicMaterial color={0x775a19} transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

export default function Constellation() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none md:pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#fed488" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        <SystemGraph />
      </Canvas>
    </div>
  );
}

