import { useEffect, useState } from 'react';
import './Header.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

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

  const handleResize = () => {
    const mobile = window.innerWidth < 992;
    setIsMobile(mobile);
    if (!mobile) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <a href="#about" className="logo-link" onClick={() => setIsMenuOpen(false)}>
              <div className="logo-text-group">
                <span className="logo-name">Radhika Suresh</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
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
          )}

          {/* Social Icons - Desktop */}
          {!isMobile && (
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/radhika-suresh-b66aba351" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/Radhikasuresh" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="mailto:radhikas.fullstack@gmail.com" aria-label="Email">
                <HiOutlineMail className="social-icon" />
              </a>
              <a href="tel:+919940669842" aria-label="Phone">
                <FaPhone className="social-icon" />
              </a>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
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
            
            {/* Social Icons - Mobile */}
            <div className="mobile-social-icons">
              <a href="https://www.linkedin.com/in/radhika-suresh-b66aba351" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/Radhikasuresh" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="mailto:radhikas.fullstack@gmail.com" aria-label="Email">
                <HiOutlineMail className="social-icon" />
              </a>
              <a href="tel:+919940669842" aria-label="Phone">
                <FaPhone className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;