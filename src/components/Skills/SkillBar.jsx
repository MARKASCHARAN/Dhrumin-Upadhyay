import React from 'react';

const SkillBar = ({ skill, delay, animate }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;