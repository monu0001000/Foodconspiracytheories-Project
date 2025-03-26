import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Food Conspiracy Central</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
