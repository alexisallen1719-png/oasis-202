'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Memberships', path: '/membership' },
    { name: 'Skin Scan AI', path: '/skin-scan' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1.5rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      backdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(91, 128, 88, 0.4)', // Deep Green Translucent
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '300',
          color: 'var(--color-white)',
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}>
          Oasis <span className="text-spa-hibiscus font-medium">Med Spa</span>
        </div>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map(link => (
          <Link 
            key={link.path} 
            href={link.path} 
            className={`font-medium tracking-wide transition-colors ${pathname === link.path ? 'text-spa-hibiscus' : 'text-spa-seafoam hover:text-white'}`}
          >
            {link.name}
          </Link>
        ))}
        
        <Link href="/booking" style={{ textDecoration: 'none' }}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border-2 border-spa-hibiscus text-spa-hibiscus rounded-full font-medium tracking-wide"
          >
            Book Escape
          </motion.button>
        </Link>
      </div>
    </nav>
  );
};
