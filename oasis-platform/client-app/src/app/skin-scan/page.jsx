'use client';
import React from 'react';
import { Navbar } from '../../components/layout/Navbar';

export default function SkinScanPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 min-h-screen flex flex-col items-center">
        <h1 className="text-white text-5xl font-light mb-12 tracking-wider">AI Skin Scan</h1>
        <p className="text-spa-seafoam text-xl text-center">TensorFlow pipeline connecting...</p>
      </div>
    </>
  );
}
