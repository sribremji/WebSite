import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 rounded shadow-md transition-colors duration-300">
      <h2 className="text-4xl font-bold text-slate-700 dark:text-indigo-300 mb-4">Contact</h2>

      <div className="space-y-4 text-md">
        <div>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-pink-500 hover:underline"
          >
            {contact.email}
          </a>
        </div>

        <div>
          <span className="font-semibold">Phone:</span>{" "}
          <a href={`tel:${contact.phone}`} className="text-pink-500 hover:underline">
            {contact.phone}
          </a>
        </div>

        <div>
          <span className="font-semibold">Location:</span> {contact.location}
        </div>

        <div>
          <span className="font-semibold">Languages:</span>
          <ul className="list-disc pl-5 mt-1">
            {contact.languages.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;