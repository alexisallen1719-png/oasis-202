import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { allServices, serviceCategories } from '../../data/servicesData';

export const StepService = ({ selectedServiceId, onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  const filteredServices = allServices.filter(s => s.category === activeCategory);

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2 style={{ marginBottom: '1rem', textAlign: 'center', color: 'var(--color-sage-dark)' }}>Choose Your Service</h2>
      
      {/* Scrollable Category Tabs */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '0.5rem',
        paddingBottom: '1rem',
        marginBottom: '1rem',
        borderBottom: '1px solid var(--border-color)',
        scrollbarWidth: 'none', // For Firefox
      }}>
        {serviceCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              whiteSpace: 'nowrap',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-pill)',
              border: activeCategory === cat ? 'none' : '1px solid var(--border-color)',
              backgroundColor: activeCategory === cat ? 'var(--color-terracotta)' : 'transparent',
              color: activeCategory === cat ? 'var(--color-sand)' : 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontWeight: 500
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Service Grid for Active Category */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1rem',
        maxHeight: '50vh',
        overflowY: 'auto',
        paddingRight: '0.5rem'
      }}>
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            name={service.name}
            duration={service.duration}
            price={service.price}
            selected={selectedServiceId === service.id}
            onSelect={onSelectService}
          />
        ))}
      </div>
    </div>
  );
};

