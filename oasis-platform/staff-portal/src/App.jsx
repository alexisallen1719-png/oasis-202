import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { DailyTimeline } from './components/dashboard/DailyTimeline';
import { RoomsMap } from './components/rooms/RoomsMap';
import { Checkout } from './components/pos/Checkout';
import { AdminCMS } from './components/admin/AdminCMS';
import { GlassCard } from '../../shared-ui/components/GlassCard';
import '../../shared-ui/styles/animations.css';

function App() {
  const [activeTab, setActiveTab] = useState('admin');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
      case 'schedule':
        return <DailyTimeline />;
      case 'rooms':
        return <RoomsMap />;
      case 'pos':
        return <Checkout />;
      case 'admin':
        return <AdminCMS />;
      default:
        return (
          <GlassCard style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 style={{ color: 'var(--color-sage-light)', marginBottom: '1rem' }}>Module in Development</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>This module is scheduled for the next phase of development.</p>
          </GlassCard>
        );
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', padding: '1.5rem', maxWidth: '1440px', margin: '0 auto', gap: '2rem' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main style={{ flex: 1, padding: '1rem 0' }}>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
