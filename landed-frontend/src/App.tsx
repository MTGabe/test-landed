import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
function App() {
  return (
    <div className="main-wrapper overflow-hidden">
      <Header />
      <Hero />
    </div>
  );
}
export default App;