import React from "react";

const Experience = ({ experiences }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 rounded shadow-md transition-colors duration-300">
      <h2 className="text-4xl font-bold text-slate-700 dark:text-indigo-300 mb-4">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
            <div className="text-sm mb-2 text-gray-600 dark:text-gray-400">
              {exp.company} | {exp.duration}
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;