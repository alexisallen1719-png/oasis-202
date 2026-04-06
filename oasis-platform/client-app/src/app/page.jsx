'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function FloatingHibiscus() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <mesh>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshPhysicalMaterial color="#ffa2cc" roughness={0.2} metalness={0.1} transmission={0.5} thickness={2} />
      </mesh>
    </Float>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);

  const [bleStatus, setBleStatus] = useState("Scanner Not Connected");

  const connectBluetoothScanner = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'] // Generic example, replace with actual POS scanner service UUID
      });
      setBleStatus(`Connected: ${device.name}`);
    } catch (error) {
      console.error(error);
      setBleStatus("Connection Failed or Canceled");
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* Immersive 3D Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#a8d9db" />
            <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffa2cc" />
            <group position={[-3, 0, -5]}>
              <FloatingHibiscus />
            </group>
            <group position={[3, 2, -8]}>
              <FloatingHibiscus />
            </group>
            <group position={[0, -3, -10]}>
              <FloatingHibiscus />
            </group>
          </Canvas>
        </div>

        {/* Foreground Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="z-10 flex flex-col items-center text-center space-y-6"
        >
          <h1 className="text-7xl font-light tracking-[0.2em] text-spa-deepGreen drop-shadow-lg">
            OASIS
          </h1>
          <p className="text-xl text-spa-ocean font-medium tracking-wide">
            Luxury skincare & wellness sanctuary
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 162, 204, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-spa-hibiscus text-white px-8 py-3 rounded-full font-semibold tracking-wide shadow-lg"
            >
              Book Appointment
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 217, 219, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="glass text-spa-deepGreen px-8 py-3 rounded-full font-semibold tracking-wide"
            >
              Explore Treatments
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Experimental Bluetooth Check In Component */}
      <section className="py-20 flex justify-center">
        <div className="glass p-8 rounded-3xl max-w-lg w-full text-center space-y-4">
          <h2 className="text-2xl text-spa-deepGreen font-semibold">Staff & Check-in</h2>
          <p className="text-spa-ocean">Hardware Bluetooth Link</p>
          <button 
            onClick={connectBluetoothScanner}
            className="w-full bg-spa-ocean text-white py-3 rounded-xl font-medium mt-4 hover:bg-spa-sky transition-colors"
          >
            Pair Bluetooth Scanner
          </button>
          <p className="text-sm font-mono text-spa-lavender">{bleStatus}</p>
        </div>
      </section>
      
    </div>
  );
}
