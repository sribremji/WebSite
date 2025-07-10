import React from 'react';

const Layout = ({ children }) => (
  <div className="relative min-h-screen w-full bg-gradient-to-b from-black to-[#0f172a] text-white font-sans overflow-hidden">
    {/* Optional radial glow */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="w-[700px] h-[700px] bg-gradient-radial from-purple-800 via-pink-600 to-transparent rounded-full blur-3xl opacity-40 mx-auto mt-32" />
    </div>

    {/* Page content */}
    <div className="relative z-10">
      {children}

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-400 border-t border-gray-700 py-6">
        © {new Date().getFullYear()} Sri Bremji. All rights reserved.
      </footer>
    </div>
  </div>
);

export default Layout;