import React from 'react'
import Stats from "./sections/Stats";
import Features from "./sections/Features";
import Analytics from "./sections/Analytics";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";


function App() {
  return (
    <div className="roboto text-green">
      <Stats />
      <Features />
      <Analytics />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App
