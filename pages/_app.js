// Import React if you haven't already
import React from 'react';
import '@/styles/globals.css';
import { NavBar } from '@/components/NavBar';

// App component
export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
