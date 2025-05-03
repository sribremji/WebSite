import React, { useState, useEffect } from "react";

const Intro = ({ resume }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ✅ Close modal with ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [showModal]);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 rounded shadow-md transition-colors duration-300">
      {/* Header */}
      <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
        👋 Hello, I'm {resume.name}
      </h1>

      {/* Summary */}
      <div className="leading-relaxed mb-6 space-y-4">
        {resume.summary.split("\\n").map((para, i) => (
          <p key={i} className="text-gray-800 dark:text-white">{para}</p>
        ))}
      </div>

      {/* Core Skills */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-3">Core Skills</h3>
        <div className="flex flex-wrap gap-3">
          {resume.skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedSkill(skill);
                setShowModal(true);
              }}
              className="px-4 py-1 rounded-full text-sm font-medium shadow-sm bg-pink-100 text-pink-700 
                         hover:bg-pink-200 hover:scale-105 transition-all duration-200 ease-in-out 
                         cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedSkill && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto animate-fade-slide-up"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-gray-500 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 text-2xl"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">{selectedSkill}</h3>

            <ul className="list-disc pl-6 space-y-2">
              {resume.skillDetails[selectedSkill]
                ?.split("- ")
                .filter((point) => point.trim() !== "")
                .map((point, i) => (
                  <li key={i}>{point.trim()}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;