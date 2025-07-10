import React from "react";

const SidebarProfile = () => {
  return (
    <aside className="bg-gradient-to-b from-slate-800 to-slate-900 text-white w-1/3 p-8 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4 border-4 border-white shadow-md"
        />
        <h1 className="text-2xl font-bold">Sri Bremji</h1>
        <p className="text-sm text-gray-300 mb-4">Software Engineer</p>

        {/* Social Icons */}
        <div className="flex gap-3 text-xl mb-4">
          <a href="#" className="hover:text-blue-400">🌐</a>
          <a href="#" className="hover:text-blue-400">💼</a>
          <a href="#" className="hover:text-blue-400">📘</a>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-center space-y-1">
          <p>📞 +91 9500456828</p>
          <p>📧 sribremji1994@gmail.com</p>
        </div>
      </div>

      <a
        href="#"
        className="mt-8 bg-white text-gray-800 font-semibold px-6 py-2 rounded shadow hover:shadow-lg"
      >
        Download CV
      </a>
    </aside>
  );
};

export default SidebarProfile;