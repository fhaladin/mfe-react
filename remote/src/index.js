import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<HelloWorld />);
}