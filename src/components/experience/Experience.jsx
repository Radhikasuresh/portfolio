import React, { useState } from 'react';
import './Experience.css';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const experiences = [
   
    {
      title: "Frontend Developer – Junior Engineer",
      company: "ThetaZero Private Limited",
      location: "Chennai",
      duration: "Oct 2023 – Jun 2025",
      description: [
        "Developed responsive web/mobile interfaces using React.js",
        "Handled CRM applications end-to-end: architecture, UI/UX, API integration, deployment",
        "Implemented reusable components and optimized performance",
        "Participated in agile sprints and code reviews"
      ],
        awards: [
        {
          name: "Twinkling Thezian",
          url: "https://platform.example.com/awards/123",
          issuer: "Employee of the month"
        }
      ]
    },
     {
      title: "Frontend Developer (Freelance)",
      company: "Self-employed / Freelance",
      location: "Chennai",
      duration: "Jun 2025 – Present",
      description: [
        "Designed and developed modern web applications using React.js, Tailwind CSS, and TypeScript",
        "Built pixel-perfect, responsive UI components aligned with brand identities",
        "Integrated REST APIs and managed complex component state",
        "Deployed projects on Netlify with focus on performance and scalability"
      ],
      projects: [
        {
          name: "RealFitness Studio",
          url: "https://realfitness.example.com",
          description: "A fitness studio booking platform with class scheduling"
        },
        {
          name: "ReviveRoots E-commerce",
          url: "https://reviveroots.example.com",
          description: "Sustainable products online store"
        }
      ],
    
    },
    {
      title: "Junior Executive – IT Process Exposure",
      company: "Miramed Ajuba Solutions",
      location: "Chennai",
      duration: "Feb 2021 – Dec 2022",
      description: [
        "Managed AR operations ensuring claim accuracy and cash flow tracking",
        "Collaborated with IT to streamline reporting and dashboards",
        "Developed automation scripts to improve operational efficiency",
        "Transitioned from operations to development through self-learning"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="exp-container">
        <h1 className="section-title">
          Professional <span className="highlight">Journey</span>
        </h1>
        <p className="section-subtitle">
          My career path and accomplishments
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="timeline-marker"></div>
              
              <div className="experience-content">
                <div className="experience-header" onClick={() => toggleAccordion(index)}>
                  <h3 className="experience-title">{exp.title}</h3>
                </div>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <FaBriefcase className="meta-icon" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>
                      <span className="bullet"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div >
                  {/* Projects Section */}
                  {(exp.projects && exp.projects.length > 0) && (
                    <div className="projects-section">
                      <h4 className="subsection-title">Key Projects</h4>
                      <div className="links-container">
                        {exp.projects.map((project, pIndex) => (
                          <a 
                            key={pIndex} 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="exp-project-link"
                          >
                            <span className="link-text">
                              {project.name} <FaExternalLinkAlt className="link-icon" />
                            </span>
                            <span className="link-description">{project.description}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Awards Section */}
                  {(exp.awards && exp.awards.length > 0) && (
                    <div className="awards-section">
                      <h4 className="subsection-title">Awards</h4>
                      <div className="links-container">
                        {exp.awards.map((award, aIndex) => (
                          <a 
                            key={aIndex} 
                            href={award.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="award-link"
                          >
                            <span className="link-text">
                              {award.name} <FaExternalLinkAlt className="link-icon" />
                            </span>
                            <span className="link-description">{award.issuer}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;