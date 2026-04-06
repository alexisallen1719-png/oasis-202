import React from 'react';
import { GlassCard } from '../../../../shared-ui/components/GlassCard';

export const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'clients', label: 'Clients' },
    { id: 'rooms', label: 'Rooms Map' },
    { id: 'pos', label: 'POS Checkout' },
    { id: 'admin', label: 'Admin CMS' }
  ];

  return (
    <aside style={{ width: '250px', height: '100%', paddingRight: '2rem' }}>
      <GlassCard style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ color: 'var(--color-sage-light)', marginBottom: '2.5rem', fontWeight: 500 }}>Oasis OS</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
          {navItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{ 
                color: activeTab === item.id ? 'var(--color-sand)' : 'var(--color-text-secondary)',
                fontWeight: activeTab === item.id ? 'bold' : 'normal',
                cursor: 'pointer',
                padding: '0.5rem 0',
                transition: 'color 0.2s',
                borderLeft: activeTab === item.id ? '3px solid var(--color-terracotta)' : '3px solid transparent',
                paddingLeft: '1rem',
                marginLeft: '-1.5rem'
              }}
            >
              {item.label}
            </div>
          ))}
        </nav>
        
        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <button style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--color-terracotta)', 
            cursor: 'pointer',
            textAlign: 'left',
            width: '100%' 
          }}>
            Clock Out  ⏱
          </button>
        </div>
      </GlassCard>
    </aside>
  );
};
