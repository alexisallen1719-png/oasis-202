import React from 'react';
import { GlassCard } from '../../../../shared-ui/components/GlassCard';

export const ServiceCard = ({ id, name, duration, price, onSelect, selected }) => {
  return (
    <GlassCard 
      hoverReveal 
      onClick={() => onSelect(id)}
      style={{
        cursor: 'pointer',
        padding: '1rem',
        border: selected ? '2px solid var(--color-sage)' : '1px solid var(--glass-border)',
        backgroundColor: selected ? 'rgba(138, 154, 134, 0.1)' : 'var(--glass-bg)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
      className={selected ? 'animate-pop-in' : ''}
    >
      <h3 style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
        {name}
      </h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-sage-dark)' }}>
        <span>{duration} min</span>
        <span style={{ fontWeight: 600 }}>${price}</span>
      </div>
    </GlassCard>
  );
};
