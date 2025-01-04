import React, { useState } from 'react';
import { Section } from '../../types';
import { Plus, X } from 'lucide-react';

interface Props {
  section: Section;
  onUpdate: (id: string, content: string, skills: Section['skills']) => void;
}

const SKILL_ICONS = [
  'react', 'vue', 'angular', 'nodejs', 'python', 'java', 'golang',
  'kubernetes', 'docker', 'aws', 'gcp', 'azure',
  'javascript', 'typescript', 'html5', 'css3', 'sass',
  'mongodb', 'postgresql', 'mysql', 'redis',
  'git', 'github', 'gitlab', 'bitbucket'
];

export function SkillsSection({ section, onUpdate }: Props) {
  const [newSkill, setNewSkill] = useState({ name: '', icon: '', level: 5 });
  const skills = section.skills || [];

  const addSkill = () => {
    if (newSkill.name && newSkill.icon) {
      const updatedSkills = [...skills, newSkill];
      onUpdate(section.id, section.content, updatedSkills);
      setNewSkill({ name: '', icon: '', level: 5 });
    }
  };

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    onUpdate(section.id, section.content, updatedSkills);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          placeholder="Skill name..."
          className="flex-1 rounded-lg border border-gray-200 p-2 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
        />
        <select
          value={newSkill.icon}
          onChange={(e) => setNewSkill({ ...newSkill, icon: e.target.value })}
          className="rounded-lg border border-gray-200 p-2 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
        >
          <option value="">Select icon</option>
          {SKILL_ICONS.map(icon => (
            <option key={icon} value={icon}>{icon}</option>
          ))}
        </select>
        <input
          type="range"
          min="1"
          max="5"
          value={newSkill.level}
          onChange={(e) => setNewSkill({ ...newSkill, level: Number(e.target.value) })}
          className="w-24"
        />
        <button
          onClick={addSkill}
          className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          <Plus size={20} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex items-center gap-2 rounded-lg border border-gray-200 p-3 dark:border-gray-700"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
              alt={skill.name}
              className="h-6 w-6"
            />
            <span>{skill.name}</span>
            <div className="ml-auto flex items-center gap-1">
              {Array.from({ length: skill.level || 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-blue-500"
                />
              ))}
            </div>
            <button
              onClick={() => removeSkill(index)}
              className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}