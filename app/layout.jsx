import './global.css';
import Link from 'next/link';
// 2. Sidebar Import: Add the .jsx extension
import Sidebar from './components/Sidebar.jsx';
export const metadata = {
  title: 'STEM Digital Library | Open-Access Resources',
  description: 'Free open-access STEM resources, concept notes, contest guides, and vetted materials for students and teachers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Link href="/" className="logo">
            STEM Digital Library
          </Link>
        </header>

        <Sidebar />

        {/* 'main-content-wrapper' and 'main-content' are the classes defined in app/globals.css */}
        <div className="main-content-wrapper"> 
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}