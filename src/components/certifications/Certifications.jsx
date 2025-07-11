import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import zenClassImage from '../../assets/zenClass.png'
import { FiExternalLink } from 'react-icons/fi';
const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development Certification",
      issuer: "GUVI Geek Networks, IITM Research Park, Chennai",
      date: "Feb 2023 - Jun 2023",
      project: {
        title: "Zen Class Query Resolving-Clone",
        description: "This is Fullstack MERN website made it as a Zen Class Query Resolve-Clone. This application is used to get the queries resolved.",
        skills: ["React", "Node.js", "MongoDB", "Express.js"],
        link: "https://peaceful-cranachan-00a32d.netlify.app/"
      },
      certificateImage: zenClassImage,
      verifyLink: "https://drive.google.com/file/d/1VwXy6qdYwQWRLIGFoXW8sGwNB1NnUKM9/view"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certificate-container">
        <h1 className="certificate-section-title">
          My <span className="certificate-highlight">Certifications</span>
        </h1>
        <p className="certificate-section-subtitle">
          Recognized achievements and related projects
        </p>
        
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
                                      <div className="certification-details">
                <div className="certification-info">
                  <h3>{cert.title}</h3>
                  <div className="issuer-date">
                    <span className="issuer">{cert.issuer}</span>
                  </div>
                    <span className="date">{cert.date}</span>
                </div>
                 <div className="certificate-display">
                 <a 
                    href={cert.verifyLink} 
                  className="resume-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
               >
                 View Certificate
               <FaExternalLinkAlt className="external-icon" />
               </a>
              
              </div>
                <div className="related-project">
                  <h2>Capstone Project</h2>
                  <div className="project-card">
                    <div>
                    <h5>{cert.project.title}</h5>
                    <p>{cert.project.description}</p>
                    <div className="project-skills">
                      {cert.project.skills.map((skill, i) => (
                        <span key={i}>{skill}</span>
                      ))}
                    </div>
                    <a 
                      href={cert.project.link} 
                      className="certi-project-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project <FiExternalLink />
                    </a>
                  </div>
                  <img src={cert.certificateImage} className='certificate-image'/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;