import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <Code2 className="w-8 h-8 text-blue-600 transform group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute -inset-1 bg-blue-100 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Cipher
      </span>
    </Link>
  );
}