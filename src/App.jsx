
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaExternalLinkAlt
} from "react-icons/fa";

import "./App.css";

function App() {

  // TECHNICAL SKILLS
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode />,
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "React.js", icon: <FaReact /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaServer /> }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", icon: <FaDatabase /> }
      ]
    }
  ];

  // PROJECTS
  const projects = [
    {
      title: "Employee Management System",
      description:
        "A web-based application to manage employee information, including adding, viewing, editing and deleting employee records.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
      icon: "👨‍💼",
      category: "Full Stack Development",
      link: "https://github.com/sanjanadr93800-cyber/"
    },
    {
  title: "Type Rush",
  description:
    "An interactive typing speed test application that helps users improve their typing speed and accuracy through engaging typing challenges.",
  technologies: ["HTML", "CSS", "JavaScript"],
  icon: "⌨️",
  category: "Frontend Development",
  link: "https://github.com/sanjanadr93800-cyber/"
}
  ];

  return (
    <div className="App">

      {/* NAVIGATION SECTION */}
      <header className="header">
        <nav className="navbar">

          <a href="#home" className="logo">
            Sanjana<span>.</span>
          </a>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </nav>
      </header>


      {/* HOME SECTION */}
      <section className="home-section" id="home">

        <div className="home-content">

          <p className="welcome-text">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Sanjana</span>
          </h1>

          <h2>Aspiring Full Stack Developer</h2>

          <p className="home-description">
            I am pursuing BCA and passionate about web development.
            I enjoy learning new technologies and creating
            responsive and user-friendly websites.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="primary-btn">
              View My Work <FaArrowRight />
            </a>

            {/* DOWNLOAD RESUME */}
            <a
              href="/Sanjana DR Resume.pdf"
              className="secondary-btn"
              download
            >
              Download Resume <FaDownload />
            </a>

            {/* VIEW RESUME */}
            <a
              href="/Sanjana DR Resume.pdf"
              className="secondary-btn"
              target="_blank"
              rel="noreferrer"
            >
              View Resume <FaExternalLinkAlt />
            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/sanjanadr93800-cyber/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sanjana-d-r-6b3183425?utm_source=share_via&utm_content=profile&utm_medium=member_android/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:sanjanadr93800@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* PROFILE PHOTO */}
        <div className="home-image">
          <div className="profile-circle">
            <img src="/photo.jpeg" alt="Sanjana Profile" />
          </div>
        </div>

      </section>


      {/* ABOUT SECTION */}
      <section className="about-section" id="about">

        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">

          <div className="about-icon">
            <FaLaptopCode />
          </div>

          <div className="about-text">

            <h3>I'm Sanjana D R</h3>

            <p>
              I am currently pursuing Bachelor of Computer Applications
              (BCA) at Aditya Institute of Management Studies.
              I am interested in web development and software development.
            </p>

            <p>
              I have basic knowledge of HTML, CSS, JavaScript,
              Bootstrap, React.js, Node.js, Express.js and MySQL.
              I enjoy building practical projects and improving
              my technical skills.
            </p>

            <p>
              My goal is to begin my career in the IT industry,
              gain practical experience and continue learning
              new technologies.
            </p>

          </div>

        </div>

        <div className="about-details">

          <div>
            <h4>Name</h4>
            <p>Sanjana D R</p>
          </div>

          <div>
            <h4>Degree</h4>
            <p>BCA</p>
          </div>

          <div>
            <h4>Location</h4>
            <p>Bangalore</p>
          </div>

          <div>
            <h4>Interest</h4>
            <p>Web Development</p>
          </div>

        </div>

      </section>


      {/* EDUCATION SECTION */}
      <section className="education-section" id="education">

        <div className="section-heading">
          <p>MY ACADEMIC BACKGROUND</p>
          <h2>My <span>Education</span></h2>
        </div>

        <div className="education-container">

          <div className="education-card">

            <div className="about-icon">
              <FaGraduationCap />
            </div>

            <h3>Bachelor of Computer Applications</h3>

            <h4>Aditya Institute of Management Studies</h4>

            <p>
              Currently pursuing BCA with an interest in
              programming, web development and computer applications.
            </p>

          </div>

        </div>

      </section>


      {/* TECHNICAL SKILLS SECTION */}
      <section className="skills-section" id="skills">

        <div className="section-heading">
          <p>MY TECHNICAL KNOWLEDGE</p>
          <h2>Technical <span>Skills</span></h2>

          <p className="skills-subtitle">
            Currently learning and developing my technical skills.
          </p>
        </div>

        <div className="skills-container">

          {skillCategories.map((category, index) => (

            <div className="skill-category-card" key={index}>

              <div className="skill-category-heading">

                <div className="category-icon">
                  {category.icon}
                </div>

                <h3>{category.title}</h3>

              </div>

              <div className="skill-items">

                {category.skills.map((skill, skillIndex) => (

                  <div className="skill-item" key={skillIndex}>

                    <span className="individual-skill-icon">
                      {skill.icon}
                    </span>

                    <span className="skill-name">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* PROJECTS SECTION */}
      <section className="projects-section" id="projects">

        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h2>My <span>Projects</span></h2>
        </div>

        <div className="projects-container">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              <div className="project-image">
                <span>{project.icon}</span>
              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technology-list">

                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}

                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project <FaExternalLinkAlt />
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CERTIFICATIONS SECTION */}
      <section className="certifications-section" id="certifications">

        <div className="section-heading">
          <p>MY LEARNING JOURNEY</p>
          <h2>My <span>Certifications</span></h2>
        </div>

        <div className="certifications-container">

          {/* IBM CERTIFICATE 1 */}
          <div className="certificate-card">

            <div className="certificate-top">

              <div className="certificate-icon">
                <FaGraduationCap />
              </div>

              <span className="certificate-status">
                Completed
              </span>

            </div>

            <span className="certificate-label">
              IBM CERTIFICATE
            </span>

            <h3>
              Getting Started with Artificial Intelligence
            </h3>

            <p>
              An introduction to Artificial Intelligence,
              its basic concepts and applications.
            </p>

            <div className="certificate-footer">
              <span>IBM</span>
              <FaLaptopCode />
            </div>

          </div>


          {/* IBM CERTIFICATE 2 */}
          <div className="certificate-card">

            <div className="certificate-top">

              <div className="certificate-icon">
                <FaGraduationCap />
              </div>

              <span className="certificate-status">
                Completed
              </span>

            </div>

            <span className="certificate-label">
              IBM CERTIFICATE
            </span>

            <h3>
              Job Application Essentials
            </h3>

            <p>
              Learning essential skills and preparation
              for professional job applications.
            </p>

            <div className="certificate-footer">
              <span>IBM</span>
              <FaLaptopCode />
            </div>

          </div>


          {/* IBM CERTIFICATE 3 */}
          <div className="certificate-card">

            <div className="certificate-top">

              <div className="certificate-icon">
                <FaGraduationCap />
              </div>

              <span className="certificate-status">
                Completed
              </span>

            </div>

            <span className="certificate-label">
              IBM CERTIFICATE
            </span>

            <h3>
              Artificial Intelligence Fundamentals
            </h3>

            <p>
              Foundational knowledge of Artificial Intelligence
              concepts and their applications.
            </p>

            <div className="certificate-footer">
              <span>IBM</span>
              <FaLaptopCode />
            </div>

          </div>

        </div>

      </section>


      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">

        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Contact <span>Me</span></h2>
        </div>

        <div className="contact-container">

          {/* CONTACT INFORMATION */}
          <div className="contact-left">

            <h3>Let's Work Together!</h3>

            <p>
              I am excited to learn, collaborate and explore
              opportunities in the IT industry. If you have
              an opportunity or would like to connect,
              feel free to reach out.
            </p>

            <div className="contact-highlight">

              <FaEnvelope />

              <div>
                <h4>Email Me</h4>

                <a href="mailto:sanjanadr93800@gmail.com">
                  your-email@example.com
                </a>
              </div>

            </div>

            <div className="contact-highlight">

              <FaLinkedin />

              <div>
                <h4>LinkedIn</h4>

                <a
                  href="https://www.linkedin.com/in/sanjana-d-r-6b3183425/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgoGcn6SkQvKWBVXNGC9zqQ%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect with me
                </a>
              </div>

            </div>

            <div className="contact-highlight">

              <FaGithub />

              <div>
                <h4>GitHub</h4>

                <a
                  href="https://github.com/sanjanadr93800-cyber/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my projects
                </a>
              </div>

            </div>

          </div>


          {/* CONTACT MESSAGE */}
          <div className="contact-right">

            <div className="contact-decoration">
              <FaEnvelope />
            </div>

            <h3>Have an opportunity?</h3>

            <p>
              I'd love to hear from you. Send me an email
              and let's start a conversation!
            </p>

            <a
              href="mailto:sanjanadr93800@gmail.com"
              className="contact-button"
            >
              Send Me an Email <FaArrowRight />
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <p>
          © {new Date().getFullYear()} Sanjana. All Rights Reserved.
        </p>

        <a href="#home">
          Back to Top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;
