import React from "react";

const PopupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if isOpen is false

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-[2rem] font-bold mb-4 text-gray-900">
          Welcome to My AI Chef App
        </h2>
        <p className="text-gray-600 mb-6">
          Pocket Chef is a React-based web application that uses AI to generate
          personalized recipes from user-provided ingredients. It demonstrates
          my ability to combine modern web development with AI to create
          innovative, user-friendly solutions.
        </p>

        {/* Key Skills Section */}
        <div className="mb-6">
          <h3 className="text-[1.5rem] font-semibold mb-2 text-gray-900">
            Key Skills Demonstrated
          </h3>
          <ul className="flex flex-wrap gap-2">
            {[
              "React",
              "State Management",
              "AI Integration",
              "API Calls",
              "Prompt Engineering",
              "UI/UX Design",
              "Asynchronous Programming",
              "Functional Programming",
              "Error Handling",
              "Project Organization",
            ].map((skill, index) => (
              <li
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-[1.5rem] font-semibold mb-2 text-gray-900">
            Features
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Add, remove, and clear ingredients dynamically.</li>
            <li>
              AI-generated recipes formatted in markdown for easy readability.
            </li>
            <li>
              Smooth scrolling and modal interactions for enhanced user
              experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
