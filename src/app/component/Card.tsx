import moment from "moment";
import React from "react";

const Card = ({ data }: any) => {
  const {
    image,
    title,
    description,
    startDate,
    dueDate,
    github,
    url,
    techStack,
  } = data;
  return (
    <div className="bg-dark-card rounded-xl overflow-hidden border border-gray-800 card-hover animate-slide-scale">
      <div className="h-48 bg-gradient-to-br from-orange-accent to-orange-hover flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">🖥️</div>
            <span className="text-sm">Project Screenshot</span>
          </div>
        </div>
        {image && (
          <img
            src={image}
            alt="E-Commerce Dashboard"
            className="w-full h-full object-cover"
          />
        )}
        <svg
          className="w-16 h-16 text-white opacity-20 absolute"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
        </svg>
      </div>
      <div className="p-6">
        <div className="flex justify-end">
            <span className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-orange-accent transition-colors">
                {moment(startDate).format("MMM YYYY")} - {moment(dueDate).format("MMM YYYY")}
            </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-orange-accent">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech: any) => (
            <span className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-orange-accent transition-colors">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {url && (
            <button className="text-orange-accent hover:text-orange-hover transition-all duration-300 hover:scale-105">
              Live Demo
            </button>
          )}
          {github && (
            <button className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
              GitHub
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
