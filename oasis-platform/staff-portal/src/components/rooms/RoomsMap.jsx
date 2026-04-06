import React from 'react';
import { GlassCard } from '../../../../shared-ui/components/GlassCard';

export const RoomsMap = () => {
  const rooms = [
    { id: 1, name: 'Room 1', status: 'occupied', client: 'Sarah M.', end: '5:00 PM' },
    { id: 2, name: 'Room 2', status: 'ready', client: null, end: null },
    { id: 3, name: 'Room 3', status: 'cleaning', client: null, end: null },
    { id: 4, name: 'Room 4', status: 'occupied', client: 'Ryan B.', end: '3:30 PM' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'ready': return 'var(--color-sage-light)';
      case 'occupied': return 'var(--color-terracotta)';
      case 'cleaning': return 'var(--color-gold)';
      default: return 'var(--border-color)';
    }
  };

  return (
    <div className="fade-in">
      <h2 style={{ color: 'var(--color-sand)', marginBottom: '1.5rem' }}>Live Rooms Map</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {rooms.map(room => (
          <GlassCard 
            key={room.id} 
            hoverReveal
            style={{ 
              borderTop: `4px solid ${getStatusColor(room.status)}`,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              height: '160px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'auto' }}>
              <h3 style={{ color: 'var(--color-sand)', fontSize: '1.2rem' }}>{room.name}</h3>
              <div 
                className={room.status === 'ready' ? 'animate-pop-in' : ''}
                style={{
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: getStatusColor(room.status),
                  boxShadow: `0 0 8px ${getStatusColor(room.status)}`
                }} 
              />
            </div>
            
            <div>
              <p style={{ color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                {room.status}
              </p>
              {room.status === 'occupied' && (
                <div style={{ marginTop: '0.5rem', color: 'var(--color-sage-light)', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-sand)' }}>{room.client}</span> • Ends: {room.end}
                </div>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
