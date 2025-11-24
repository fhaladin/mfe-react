import React, { lazy, Suspense } from 'react';

export default function Home() {
  const HelloWorld = lazy(() => import('reactRemote/HelloWorld'));

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>

      <Suspense fallback={<div>Loading...</div>}>
        <HelloWorld name="Fhaladin" />
      </Suspense>
    </div>
  );
}