import React from 'react';

const Contact = ({ contact }) => (
  <section className="text-white py-20 px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
    <div className="relative max-w-2xl mx-auto p-8 md:p-12">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-500 opacity-30 blur-2xl z-0" />
      <div className="relative z-10 bg-[#0f172a] rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 md:p-12">
        <div className="flex items-center space-x-4">
          <span className="text-2xl" aria-label="Email" title="Email">📧</span>
          <div>
            <div className="font-semibold text-gray-300">Email</div>
            <a href={`mailto:${contact.email}`} className="text-indigo-400 break-all">{contact.email}</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-2xl" aria-label="Phone" title="Phone">📞</span>
          <div>
            <div className="font-semibold text-gray-300">Phone</div>
            <a href={`tel:${contact.phone}`} className="text-indigo-400">{contact.phone}</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-2xl" aria-label="Location" title="Location">📍</span>
          <div>
            <div className="font-semibold text-gray-300">Location</div>
            <span>{contact.location}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-2xl" aria-label="Languages" title="Languages">🌐</span>
          <div>
            <div className="font-semibold text-gray-300">Languages</div>
            <span>{contact.languages.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;