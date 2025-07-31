import React from 'react';

export const Header = () => (
  <header className="header-fp p-0 w-100 bg-light shadow-sm">
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid d-flex justify-content-between">
        <a href="/" className="text-nowrap logo-img">
          <img src="/assets/images/logos/logo.png" alt="Logo" />
        </a>
        <div className="d-flex gap-2">
          <a href="#" className="btn btn-primary btn-sm">Log In</a>
          <a href="#" className="btn btn-outline-primary btn-sm">Get Started</a>
        </div>
      </div>
    </nav>
  </header>
);
