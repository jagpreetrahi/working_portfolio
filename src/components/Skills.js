"use client";

import { useState } from "react";
import { skills } from "./content";

export default function Skills() {
  const [activeId, setActiveId] = useState(null);

  function handleClick(id) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  const activeSkill = skills.find((s) => s.id === activeId);

  return (
    <section className="section" id="skills">
      <div className="section-tag">03 / the toolbox</div>
      <h2>
        Tap a skill, <span className="accent">get the real story</span>
      </h2>
      <div className="skills-wrap">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`skill-chip${activeId === skill.id ? " active" : ""}`}
            onClick={() => handleClick(skill.id)}
          >
            {skill.label}
          </div>
        ))}
      </div>
      <div className={`skill-detail${activeSkill ? " show" : ""}`}>
        {activeSkill && (
          <>
            <b>{activeSkill.label}</b>
            {activeSkill.detail}
          </>
        )}
      </div>
    </section>
  );
}
