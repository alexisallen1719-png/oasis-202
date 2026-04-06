import React, { useState } from 'react';
import { StepperProgress } from './StepperProgress';
import { StepService } from './StepService';
import { StepProvider } from './StepProvider';
import { StepTime } from './StepTime';
import { StepConfirm } from './StepConfirm';
import { Button } from '../../../../shared-ui/components/Button';
import { GlassCard } from '../../../../shared-ui/components/GlassCard';

export const BookingStepper = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: null,
    provider: null,
    time: null
  });

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isNextDisabled = () => {
    if (step === 1 && !bookingData.service) return true;
    if (step === 2 && !bookingData.provider) return true;
    if (step === 3 && !bookingData.time) return true;
    return false;
  };

  return (
    <GlassCard style={{ maxWidth: '600px', margin: '0 auto', width: '100%', padding: '2rem' }}>
      <StepperProgress currentStep={step} totalSteps={4} />

      <div style={{ minHeight: '300px', padding: '1rem 0' }}>
        {step === 1 && (
          <StepService 
            selectedServiceId={bookingData.service} 
            onSelectService={(id) => setBookingData({ ...bookingData, service: id })} 
          />
        )}
        {step === 2 && (
          <StepProvider 
            selectedProviderId={bookingData.provider} 
            onSelectProvider={(id) => setBookingData({ ...bookingData, provider: id })} 
          />
        )}
        {step === 3 && (
          <StepTime 
            selectedTime={bookingData.time} 
            onSelectTime={(time) => setBookingData({ ...bookingData, time })} 
          />
        )}
        {step === 4 && (
          <StepConfirm bookingData={bookingData} />
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
        {step > 1 ? (
          <Button 
            onClick={prevStep} 
            style={{ backgroundColor: 'transparent', border: '1px solid var(--border-color)', color: 'var(--color-charcoal)' }}
          >
            Back
          </Button>
        ) : <div />}

        {step < 4 ? (
          <Button onClick={nextStep} disabled={isNextDisabled()} style={{ opacity: isNextDisabled() ? 0.5 : 1 }}>
            Continue
          </Button>
        ) : (
          <Button style={{ backgroundColor: 'var(--color-terracotta)' }}>Confirm & Pay Deposit</Button>
        )}
      </div>
    </GlassCard>
  );
};
