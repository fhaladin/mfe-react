import React from 'react';

export default function Home({ name = 'World' }) {
  return (
    <div>
      <h2 style={{ color: 'red' }}>Hello {name}</h2>
    </div>
  );
}