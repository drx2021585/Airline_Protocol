import React from 'react';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 32, lineHeight: 1.4 }}>
      <h1 style={{ marginBottom: 8 }}>Airline Protocol</h1>
      <p style={{ color: '#475569', marginBottom: 24 }}>
        Airline Operations Control + Commercial Pilot Operations
      </p>

      <section style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 20, maxWidth: 900 }}>
        <h2 style={{ marginTop: 0 }}>Next Duty</h2>
        <p><strong>DWI501</strong> · SJU → SDQ · HI1099 · B737 MAX 8</p>
        <p>STD 18:30Z · Gate B4 · Status: SCHEDULED</p>
      </section>

      <section style={{ marginTop: 24, display: 'grid', gap: 12, maxWidth: 900 }}>
        <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>Simulator: DISCONNECTED</div>
        <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>Flight Workspace: pending setup</div>
        <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>Events stream: pending setup</div>
      </section>
    </main>
  );
}
