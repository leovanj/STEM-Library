// File: components/Sidebar.jsx

// 1. 🛑 FIX: Add the 'use client' directive to make this an interactive Client Component.
'use client'; 

import Link from 'next/link';
import { useState } from 'react'; // 💡 OPTIONAL: You can use state for more complex interactivity

// Simple navigation links based on your planned structure
const navItems = [
  { name: 'Library Home', href: '/' },
  { 
    name: 'Mathematics', 
    href: '/math', 
    sub: [
      { name: 'Algebra Basics', href: '/math/algebra' },
      { name: 'Counting & Probability', href: '/math/counting' },
    ]
  },
  {
  name: 'Biology',
  href: '/bio',
  sub: [
    { name: 'Marine Biology', href: '/bio/marine' },
    { name: 'Parts of a Cell', href: '/bio/ptc' },
  ]
  },
  
  { 
    name: 'Physics', 
    href: '/physics', 
    sub: [
      { name: 'Mechanics: Energy', href: '/physics/energy' },
      { name: 'Electromagnetism', href: '/physics/em' },
    ]
  },
  { name: 'Contest Hub', href: '/contests' },















  { name: 'Past Experiments', href: '/experiments' },
  { name: 'About & Vetting', href: '/about' },
];

export default function Sidebar() {
  return (
    // 'sidebar' is the class defined in app/globals.css
    <nav className="sidebar"> 
      <div style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {navItems.map((item) => (
          <div key={item.name}>
            {/* 'nav-link' is the class defined in app/globals.css */}
            <Link 
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </Link>
            {item.sub && (
              <div className="sub-links">
                {item.sub.map((subItem) => (
                  <Link 
                    key={subItem.name}
                    href={subItem.href}
                    style={{ 
                      display: 'block', 
                      color: '#6b7280', 
                      textDecoration: 'none', 
                      transition: 'color 0.15s ease' 
                    }}
                    // These event handlers are now valid because the component is a Client Component.
                    onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
                    onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}