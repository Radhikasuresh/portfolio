import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCertificate, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "B.E. Electronics and Communication Engineering",
      institution: "Saveetha Engineering College, Chennai",
      year: "2016 - 2020",
      score: "74%",
      icon: <FaGraduationCap className="edu-icon" />,
      highlight: false
    },
    {
      id: 2,
      title: "Higher Secondary (HSC)",
      institution: "JRK Matric Hr. Sec. School, Chennai",
      year: "2015 - 2016",
      score: "89%",
      icon: <FaSchool className="edu-icon" />,
      highlight: false
    },
    {
      id: 3,
      title: "Secondary School (SSLC)",
      institution: "JRK Matric Hr. Sec. School, Chennai",
      year: "2013 - 2014",
      score: "97%",
      icon: <FaSchool className="edu-icon" />,
      highlight: false
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="edu-container">
        <h2 className="edu-section-title">
          Academic <span className="edu-highlight">Credentials</span>
        </h2>
        <p className="edu-section-subtitle">
          My educational journey and achievements
        </p>

        <div className="education-timeline">
          {educationData.map((edu) => (
            <div key={edu.id} className={`education-card ${edu.highlight ? 'edu-highlight-card' : ''}`}>
              <div className="edu-timeline-marker">
                {edu.icon}
              </div>
              
              <div className="education-content">
                <h3 className="education-title">{edu.title}</h3>
                <div className="education-meta">
                  <span className="institution">{edu.institution}</span>
                  <span className="year">{edu.year}</span>
                  {edu.score && <span className="score">{edu.score}</span>}
                </div>
                {edu.highlight && (
                  <div className="certification-badge">
                    <span>Certified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;