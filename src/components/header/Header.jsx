import { useEffect, useState } from 'react';
import './Header.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaCrown, FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
        setActiveSection(item.id);
      }
    });

    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo with Crown Icon */}
          <div className="logo">
            <a href="#about" className="logo-link">
              <div className="logo-text-group">
                <span className="logo-name">Radhika Suresh</span>
                {/* <span className="logo-title">Frontend Developer</span> */}
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul>
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                    {activeSection === item.id && <div className="active-indicator" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/radhika-suresh-b66aba351" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/Radhikasuresh" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:radhikas.fullstack@gmail.com" aria-label="Email">
              <HiOutlineMail className="social-icon" size={24}/>
            </a>
              <a href="tel:+919940669842" aria-label="Phone" >
                <FaPhone className="social-icon" size={17} />
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-content">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;