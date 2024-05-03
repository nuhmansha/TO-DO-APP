import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 w-screen flex items-center justify-evenly">
      <Link to="/" >Home</Link>
      <Link to="/about">About</Link>
    </header>
  );
}
