'use client';

import Navbar from '../../components/navbar/default';
import { useState } from 'react';

export default function ContactPage() {
  const [mode, setMode] = useState<'center' | 'left' | 'right'>('center');

  const isLeftMode = mode === 'left';
  const isRightMode = mode === 'right';

  return (
    <Navbar onModeChange={setMode}>
      <div>
      </div>
    </Navbar>
  );
}
