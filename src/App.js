import { useState } from 'react'
import './App.css'

function ToolbarButton({ href, text }) {
  return (
    <div className='col-auto' style={{ fontSize: 17 }}>
      <a 
        href={href} 
        className='nav-link mt-2 text-white hover-effect'
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {text}
      </a>
    </div>
  )
}

function BodyText({ parentHeading = '', head, body, id }) {
  // Helper function to format text with bold subheadings
  const formatText = (text) => {
    if (text.includes(':')) {
      const [title, content] = text.split(':');
      return (
        <p key={text} className="text-start" style={{ fontSize: 18, lineHeight: 1.6 }}>
          <span className="bold-subtext">{title}:</span>{content}
        </p>
      );
    }
    
    // Check if text is a job title or institution (ends with parentheses)
    if (text.includes('(')) {
      const [title, meta] = text.split('(');
      return (
        <>
          <p className="bold-subtext mb-0">{title.trim()}</p>
          <p className="meta-text">({meta}</p>
        </>
      );
    }
    
    return (
      <p className="text-start" style={{ fontSize: 18, lineHeight: 1.6 }}>
        {text}
      </p>
    );
  };

  return (
    <div id={id} className='container-fluid section-padding fade-in'>
      {parentHeading && <h1 className="section-heading text-start">{parentHeading}</h1>}
      <h2 className="section-subheading text-start ps-5">{head}</h2>
      <div className='mt-4 px-5 body-text'>
        {body.split('\n')
          .filter(Boolean)
          .map((paragraph, index) => (
            <div key={`${id}-p-${index}`}>
              {formatText(paragraph)}
            </div>
          ))}
      </div>
    </div>
  );
}

function App() {
  const [toolbarButtonProps] = useState([
    {
      href: '#Intro',
      text: 'Introduction'
    },
    {
      href: '#AM',
      text: 'About Me'
    },
    {
      href: '#ED',
      text: 'Education'
    },
    {
      href: '#Exp',
      text: 'Experience'
    },
    {
      href: '#S',
      text: 'Skills'
    },
    {
      href: '#C',
      text: 'Certificates'
    },
    {
      href: '#P',
      text: 'Projects'
    },
    {
      href: '#L',
      text: 'Languages'
    }
  ])

  const [BodyTextProps] = useState([
    {
      id: 'Intro',
      head: 'Introduction',
      body: 'Hi, I\'m Rehan Rasheed, a passionate Software Engineering student with hands-on experience in web development and graphic design.\n\nMy journey has led me through internships in WordPress and full-stack development, equipping me with diverse technical skills and a keen eye for design.\n\nMy goal is to make an impact as a Full-Stack JavaScript Engineer, contributing to innovative projects in a forward-thinking organization.'
    },
    {
      id: 'AM',
      head: 'About Me',
      body: 'As a final-year Software Engineering student at the Virtual University of Pakistan, I\'ve built a solid foundation in programming, software development, and project management.\n\nAlongside my academic pursuits, I\'ve gained practical experience through internships in graphic design, WordPress development, and full-stack JavaScript engineering. My technical skills span front-end and back-end development, leveraging tools like React.js, Next.js, and Vue with Vuetify, while also having expertise in the Adobe Suite for graphic design.\n\nMy vision is to join a team where I can contribute innovative solutions, collaborate effectively, and continue developing my skills in a professional setting.'
    },
    {
      id: 'ED',
      head: 'Education',
      body: 'Bachelor of Science in Software Engineering\nVirtual University of Pakistan, Lahore (2020 - 2024)\nCGPA: 3.13\n\nDiploma in Web & Graphic Designing\nGovernment Vocational Training Institute, Lahore (2019 - 2020)'
    },
    {
      id: 'Exp',
      head: 'Experience',
      body: 'Full Stack Developer (Internship)\nQodeQuest, Lahore (3 months)\n\n• Developed full-stack applications, building the front end with React.js and managing the back end with Next.js.\n• Worked collaboratively with the team to deliver responsive, user-friendly websites for client projects.\n\nWordPress Developer (Internship)\nWebFoxes, Lahore (3 months)\n\n• Created and managed blog sites and web stores on WordPress, ensuring a seamless user experience.\n• Managed admin panels, published articles, and performed regular maintenance on various client sites.\n\nGraphic Designer (Internship)\nBenchmark Studio, Lahore (6 months)\n\n• Enhanced visual elements using Photoshop, focusing on error correction, white-balance, and image regeneration.\n• Assisted the team with photo enhancements and layout design for various marketing materials.'
    },
    {
      id: 'S',
      head: 'Skills',
      body: 'Front-End Development: HTML, CSS, JavaScript, React (Material UI), Vue (Vuetify)\nBack-End Development: JavaScript, Next.js\nWeb Design & Content Management: WordPress, content publishing, blog and e-commerce site creation\nGraphic Design & Photo Editing: Adobe Suite (Photoshop, Illustrator), Corel Suite, Figma, Canva'
    },
    {
      id: 'C',
      head: 'Certificates',
      body: 'Certified Graphic Designer – Benchmark Studio'
    },
    {
      id: 'P',
      head: 'Projects',
      body: '1. NFT Marketplace Aggregator\n\nOverview:\nThis project is an NFT marketplace aggregator designed to meet the growing demand for NFT trading across multiple platforms. The primary objective of this web application is to provide users with a streamlined experience for exploring, comparing, and purchasing NFTs from major marketplaces like OpenSea and Rarible.\n\nFeatures:\n• Aggregates NFTs from various platforms, providing users with a broad selection in one place.\n• Allows users to compare NFT prices across different marketplaces, enabling informed purchasing decisions.\n• Displays detailed NFT information from multiple sources, including metadata, seller info, and transaction history.\n• Includes a "best price" feature to help users find and purchase NFTs at the most favorable rates.\n\nTechnology Stack:\nBuilt with a full-stack JavaScript framework, this application uses Vue for a responsive, user-friendly front end and Node.js/Express for seamless back-end integration with third-party APIs.\n\n2. Internship Vision Website for Qode Quest\n\nOverview:\nCreated as a personal project, this website represents my goals and expectations for my internship experience at Qode Quest. It demonstrates my enthusiasm and vision for the role, as well as my desire to contribute to innovative projects as part of the Qode Quest team.\n\nFeatures:\n• A personal portfolio showcasing my skills in front-end and back-end development.\n• Highlights the specific goals I aimed to achieve, such as gaining deeper experience with JavaScript frameworks and working collaboratively on real-world projects.\n• Serves as a testament to my commitment to professional growth and my aspiration to bring value to the organization.\n\nTechnology Stack:\nThis project was developed using HTML, CSS, Bootstrap and JavaScript, with additional libraries to enhance interactivity and layout design.\n\n3. Interactive Quiz Application\n\nOverview:\nThis quiz application was developed to provide a fully interactive quiz experience with real-time progress tracking. It allows users to take quizzes and receive immediate feedback on their scores and progress.\n\nFeatures:\n• Users can answer multiple-choice questions with instant feedback and progress indicators.\n• At the end of each quiz, users can view a summary of their performance, including scores and correct answers.\n• Progress-saving functionality that allows users to continue from where they left off, even after refreshing or exiting the site.\n• A responsive and user-friendly design to ensure an optimal experience on both desktop and mobile devices.\n\nTechnology Stack:\nThis application was built using React for front-end interactivity, with Firebase for progress tracking and result storage.\n\n4. Creative Transitions Showcase Website\n\nOverview:\nThis project is a showcase of modern web transitions and animations, providing a visually engaging user experience. The website serves as a demonstration of various transition effects, animations, and layouts.\n\nFeatures:\n• Features multiple pages with unique transition effects, including fade-ins, slide transitions, and scroll-triggered animations.\n• Built with a focus on smooth, eye-catching transitions to enhance user engagement.\n• Custom CSS animations and JavaScript libraries for dynamic effects.\n\nTechnology Stack:\nHTML, CSS, JavaScript, React, material.ui and animation libraries were used to build this project, with a focus on user interface design and smooth interaction patterns.'
    },
    {
      id: 'L',
      head: 'Languages',
      body: 'Urdu – Native Proficiency\nEnglish – Full Professional Proficiency'
    }
  ])
  return (
    <div className='App'>
      <nav className='container-fluid p-3 text-white bg-black sticky-top'>
        <div className='row align-items-center'>
          <div className='col-md-3 mt-2'>
            <h4 className="logo">Portfolio</h4>
          </div>
          <div className='col-md-9'>
            <div className='container-fluid'>
              <div className='row justify-content-end'>
                {toolbarButtonProps.map((obj, index) => (
                  <ToolbarButton key={index} href={obj.href} text={obj.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <img 
          src='/baner.png' 
          alt='banner' 
          className="img-fluid hero-image"
          width='100%' 
          height='auto'
        />
      </header>

      <main>
        {BodyTextProps.map((obj, index) => (
          <BodyText 
            key={index}
            head={obj.head} 
            body={obj.body} 
            id={obj.id} 
            parentHeading={obj.parentHeading} 
          />
        ))}
      </main>

      <footer className='container-fluid p-5 text-white mt-5 bg-black'>
        <div className="container text-center">
          <h2 className='contact-heading'>Contact</h2>
          <p className='mt-4 contact-text' style={{ fontSize: 18, lineHeight: 1.6, margin: '0 auto' }}>
            Feel free to reach out for potential collaborations, freelance projects, or networking opportunities. 
            I look forward to connecting with like-minded professionals and exploring new career possibilities.
          </p>
          <div className="social-links mt-4">
            <a 
              href="https://linkedin.com/in/muhammad-rehan-rasheed" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a 
              href="mailto:chrehan101@gmail.com" 
              className="social-link"
            >
              <i className="fas fa-envelope fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
