import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { 
  SiTypescript, SiRedux, SiMongodb, SiSass, SiTailwindcss,
  SiHtml5, SiCss3, SiJavascript, SiSocketdotio, SiGit, SiGithub
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <SiHtml5 />, category: 'frontend' },
    { name: 'CSS3', icon: <SiCss3 />, category: 'frontend' },
    { name: 'JavaScript', icon: <SiJavascript />, category: 'language' },
    { name: 'TypeScript', icon: <SiTypescript />, category: 'language' },
    { name: 'React', icon: <FaReact />, category: 'frontend' },
    { name: 'React Native', icon: <RiReactjsLine />, category: 'mobile' },
    { name: 'Redux', icon: <SiRedux />, category: 'state' },
    { name: 'Node.js', icon: <IoLogoNodejs />, category: 'backend' },
    { name: 'Express', icon: <FaNodeJs />, category: 'backend' },
    { name: 'MongoDB', icon: <SiMongodb />, category: 'database' },
    { name: 'SASS', icon: <SiSass />, category: 'styling' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'styling' },
    { name: 'Git', icon: <SiGit />, category: 'tool' },
    { name: 'GitHub', icon: <SiGithub />, category: 'tool' },
    { name: 'WebSocket', icon: <SiSocketdotio />, category: 'networking' },
    { name: 'Context API', icon: <FaReact />, category: 'state' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'language', name: 'Languages' },
    { id: 'styling', name: 'Styling' },
    { id: 'database', name: 'Database' },
    { id: 'tool', name: 'Tools' },
    { id: 'state', name: 'State Mgmt' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'networking', name: 'Networking' }
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="skills-section-title">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper">
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;