import React from 'react';
import './About.css';
import profileImage from '../../assets/profileImage.jpg';
import { FaExternalLinkAlt, FaCrown } from 'react-icons/fa';

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">
            About <span className="text-highlight">Me</span>
          </h1>
          <div className="about-description">
            <p>
              Hi, I'm <span className="name-highlight">Radhika Suresh</span>,
              a Frontend Developer based in Chennai with 2+ years building sleek, responsive web apps. 
              I specialize in <span className="skill-highlight">React.js, Redux, JavaScript (ES6+), TypeScript and Tailwind CSS</span>.
            </p>
            <p>
              I love creating pixel-perfect UIs and making sure everything is optimized for speed & 
              accessibility. I also have backend experience with <span className="skill-highlight">Node.js, Express.js, 
              and MongoDB</span>, which helps me understand the full stack better.
            </p>
            <p>
              When I'm not coding, you'll find me experimenting with new UI designs, cooking, 
              or blogging about tech. Let's build something amazing together!
            </p>
            
           <a 
  href="https://drive.google.com/file/d/15BQJ8my41p2_U-NTHDhu-1zgXeRtDWFl/preview" 
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  View My Resume
  <FaExternalLinkAlt className="external-icon" />
</a>
          </div>
        </div>

        <div className="about-image">
          <img 
            src={profileImage} 
            alt="Radhika Suresh" 
            className="profile-photo"
          />
          <img 
            src={'https://media.istockphoto.com/id/1219473620/vector/young-female-character-writing-code-on-a-desktop-computer-working-from-home-millennials-at.jpg?s=612x612&w=0&k=20&c=zOE7SRWT0gSIVxrioPGTFWpWwXE0_aYsF3ub6q9U3Ho='} 
            alt="Coding illustration" 
            className="coding-illustration"
          />
        </div>
      </div>
    </div>
  );
}