import React from 'react';

export const Hero = () => (
  <section className="hero-section bg-primary text-white py-5">
    <div className="container text-center">
      <h1 className="fw-bold">Build a website in 30 seconds</h1>
      <p>using artificial intelligence.</p>
      <div className="d-flex justify-content-center gap-2 mt-3">
        <input type="text" className="form-control w-50" placeholder="Describe your site..." />
        <button className="btn btn-light">Generate</button>
      </div>
    </div>
  </section>
);
