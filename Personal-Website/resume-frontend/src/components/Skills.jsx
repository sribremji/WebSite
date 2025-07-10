import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Skills = ({ skills, skillDetails }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    if (showModal && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
      );
    }
  }, [showModal]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') setShowModal(false);
    };
    if (showModal) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [showModal]);

  return (
    <section className="text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedSkill(skill);
              setShowModal(true);
            }}
            className="px-4 py-2 rounded-full text-sm font-medium shadow-sm bg-pink-100 text-pink-700 hover:bg-pink-200 hover:scale-105 transition-all"
          >
            {skill}
          </button>
        ))}
      </div>

      {showModal && selectedSkill && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-gray-500 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 text-2xl"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">{selectedSkill}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {skillDetails[selectedSkill]
                ?.split('- ')
                .filter((point) => point.trim() !== '')
                .map((point, i) => (
                  <li key={i}>{point.trim()}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;