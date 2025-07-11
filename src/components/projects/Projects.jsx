import React from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import revive from '../../assets/revive.png'
import fitness from '../../assets/fitness.png'
import pizza from '../../assets/pizza.png'
import dice from '../../assets/dice.png'
import chat from '../../assets/chat.png'
import weather from '../../assets/weather.png'
import todo from '../../assets/todo.png'
import nation from '../../assets/nation.png'
import calc from '../../assets/calc.png'
const Projects = () => {
  const projects = [
    {
      title: "ReviveRoots",
      description: "Developed a seamless shopping website with product catalog, secure payment gateway, and order tracking to boost online sales and customer experience.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "https://reviveroots-dev.netlify.app/",
      image: revive
    },
    {
      title: "Real Fitness Studio",
      description: "Revamped a fitness center's site with workout tracking, live session booking, and progress dashboards to enhance user experience and retention.",
      tags: ["React", "MongoDB"],
      github: "#",
      live: "https://realfitness-studio-testing.netlify.app/",
      image: fitness
    },
    {
      title: "Shey-Pizza",
      description: "This is Fullstack MERN website made it as Pizza-App. A web application designed to facilitate the seamless selection, customization, and ordering of pizzas.",
      tags: ["React", "Javascript", "Node", "CSS3", "Responsive","Stripe"],
      github: "#",
      live: "https://strong-flan-ab534f.netlify.app/",
      image: pizza
    },
    {
      title: "Dice-Roll App",
      description: "This is Frontend website made it as a Dice-Rolling App. This site allows users to simulate rolling a standard six-sided dice, generating random values between 1 and 6 and displaying the outcome on the screen for entertainment or gaming purposes.",
      tags: ["React", "Javascript", "CSS3"],
      github: "#",
      live: "https://strong-squirrel-2a698d.netlify.app/",
      image:dice
    },
    {
      title: "Chat App",
      description: "This is Fullstack MERN website made it as a Chatting App. A real-time communication platform enabling interactive text-based conversations between users.",
      tags: ["React","Node", "Javascript", "CSS3", "Socket.io", ],
      github: "#",
      live: "https://extraordinary-hummingbird-8e401b.netlify.app/",
      image: chat
    },
    {
      title: "Weather Tracker",
      description: "This website is a Weather Tracker. This site is used to know your Current Location Weather.",
      tags: ["HTML", "JavaScript", "CSS"],
      github: "#",
      live: "https://hilarious-capybara-1d29c8.netlify.app/",
      image: weather
    },
    {
      title: "To-Do App",
      description: "This is Frontend website made it as a To-Do App. It is a task management tool that helps users organize and prioritize their tasks, increasing productivity and ensuring efficient completion of daily activities.",
      tags: ["React", "JavaScript"],
      github: "#",
      live: "https://frabjous-gumption-737093.netlify.app/",
      image: todo
    },
    {
      title: "Nationalize API",
      description: "This is Frontend website made it as a Nationalize-API. It is a web service that provides insights into the likely nationality of a given name.",
      tags: ["HTML","CSS", "JavaScript"],
      github: "#",
      live: "https://strong-ganache-7babb7.netlify.app/",
      image: nation
    },
    {
      title: "Calculator",
      description: "This is Frontend website made it as a Calculator. This application is used for Mathematical Calculation.",
           tags: ["HTML","CSS", "JavaScript"],
      github: "#",
      live: "https://strong-moxie-d94bee.netlify.app/",
      image: calc
    },
  ];

  return (
    <section id="projects" className="proj-section">
      <div className="proj-container">
        <h2 className="proj-section-title">
          Featured <span className="proj-highlight">Projects</span>
        </h2>
        <p className="proj-section-subtitle">
          Some of my recent work
        </p>
        
        <div className="proj-grid">
          {projects.map((project, index) => (
            <div key={index} className="proj-card">
              <div className="proj-image">
                <img src={project.image} alt={project.title} />
                <div className="proj-links">
                  {/* <a href={project.github} aria-label="GitHub">
                    <FiGithub />
                  </a> */}
                  <a href={project.live} target='_blank' aria-label="Live Demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="proj-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="proj-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;