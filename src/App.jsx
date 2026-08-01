import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MyPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for the glowing purple orb effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // High-End Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  // Experience Data
const experiences = [
    {
      role: "Frontend Developer",
      company: "Henri Class Company",
      date: "Jul 2026 - Present",
      desc: "Currently developing the first enterprise website and digital storefront for Henri Class Integrated Farms, an integrated multi-sector farm located in Isefun Ipaja, Alimosho, Lagos State. Architecting the platform using TypeScript alongside managing domain configuration."
    },
    {
      role: "Frontend Developer",
      company: "NIAESB FUNAAB",
      date: "May 2026 - Present",
      desc: "Developed the first-ever website for the Nigerian Institution of Agricultural Engineering student body using React.js and Tailwind CSS. Handled domain management and built a comprehensive platform to serve all essential information needed by the students."
    },
    {
      role: "Frontend Intern Trainee",
      company: "Tech4Dev • Woman Techsters Fellowship 2026",
      date: "Sep 2025 - Present",
      desc: "Undergoing intensive frontend engineering training, building scalable web applications, and mastering modern JavaScript frameworks within a highly competitive fellowship program."
    },
    {
      role: "Frontend Developer",
      company: "Center for Low-Resource Languages and Cultures (CLRLC)",
      date: "Jan 2026 - Jun 2026",
      desc: "Engineered responsive and accessible user interfaces, contributing to digital platforms designed to preserve, promote, and document low-resource languages through optimized web experiences."
    },
    {
      role: "Frontend Developer",
      company: "Hack4Freedom Lagos Hackathon",
      date: "May 2026",
      desc: "Collaborated with a core engineering team (Rita Okam and Busayo Olowookere) to architect the interface for KoboSat, a financial application. Led UI prototyping and frontend execution, successfully securing a 4th-place ranking in a high-pressure, competitive environment."
    }
  ];

  // Upgraded Premium Projects Data with Images & Links
  const projects = [
    {
      title: "NIAESB FUNAAB",
      category: "Student Body Platform",
      image: "/projects/niaesbfunaab.jpg",
      desc: "Developed the official web platform for the student body chapter of the Nigerian Association of Agricultural and Bioresources Engineering Students (NIAESB). A comprehensive hub serving all essential information and resources needed by the students.",
      tech: ["React.js", "Tailwind CSS", "Domain Management"],
      liveUrl: "https://niaesbfunaab.dev/", 
      githubUrl: "https://github.com/NIAESB-FUNAAB/niaesb-funaab" 
    },
    {
      title: "TrustBridge",
      category: "Full-Stack FinTech",
      image: "/projects/TrustBridge.jpg",
      desc: "A comprehensive dashboard designed for SMEs to securely track institutional flow of funds and calculate AI-driven trust scores in real-time.",
      tech: ["React", "Tailwind CSS", "AI Integration", "Data Visualization"],
      liveUrl: "https://trustbridgee.netlify.app/", 
      githubUrl: "https://github.com/invicta-team-67/trustbridge" 
    },
        {
      title: "Henri Clas Integrated Farms",
      category: "Enterprise Web Application",
      image: "/projects/HenriClas.jpg",
      desc: "Currently developing the first digital storefront and enterprise website for Henri Clas Integrated Farms, a multi-sector farm based in Lagos State. Architecting the platform to optimize online presence and user engagement.",
      tech: ["TypeScript", "Frontend Architecture", "Domain Management"],
      liveUrl: "https://henriclas-farm.onrender.com", 
      githubUrl: "https://github.com/timilehinolajolo/henriclas-farm" 
    },
    {
      title: "KoboSats",
      category: "Hack4Freedom FinTech App",
      image: "/projects/KoboSats.jpg",
      desc: "The flagship financial application built during the Hack4Freedom event, featuring a seamless user interface for financial tracking.",
      tech: ["React", "UI/UX Engineering", "TailwindCSS", "Version Control"],
      liveUrl: "https://kobosat.netlify.app/", 
      githubUrl: "https://github.com/Team-Lumina/KoboSat-frontend" 
    },
  
    {
      title: "ScripturePro Quiz",
      category: "Interactive Web App",
      image: "/projects/ScriptureProQuiz.jpg",
      desc: "An immersive, web-based quiz application deployed to test knowledge, manage complex application state, and track user progression through dynamic scoring systems.",
      tech: ["JavaScript", "State Management", "DOM Manipulation"],
      liveUrl: "https://scriptureproquiz.netlify.app/", 
      githubUrl: "https://github.com/timilehinolajolo/ScripturePRO" 
    },
    {
      title: "Task Master",
      category: "Tech4Dev • Woman Techsters Fellowship 2026",
      image: "/projects/TaskMaster.jpg",
      desc: "Developed a robust client-side authentication and secure session management system relying entirely on high-performance Vanilla JavaScript.",
      tech: ["Vanilla JS", "Local Storage API", "Security logic"],
      liveUrl: "https://taskmasterbytimilehinolajolo.netlify.app/", 
      githubUrl: "https://github.com/timilehinolajolo/Task-Master" 
    },
    {
      title: "UniGrand",
      category: "Independent Learning",
      image: "/projects/UniGrand.jpg",
      desc: "An imaginary, highly-detailed university dashboard interface designed for seamless student data visualization, schedule tracking, and portal management.",
      tech: ["HTML5", "Advanced CSS", "JavaScript"],
      liveUrl: "https://unigrand.netlify.app/", 
      githubUrl: "https://github.com/timilehinolajolo/UNIGRAND" 
    },
    {
      title: "Team Apex - Landing Page",
      category: "Community Web App",
      image: "/projects/TeamApex.jpg",
      desc: "Developed a simple landing page for team apex, using Vanilla JS and CSS3",
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://teamapexx.netlify.app/", 
      githubUrl: "https://github.com/timilehinolajolo/Team-Apex" 
    }
  ];
  // Minimalist Social Links
  const socialLinks = [
    { 
      name: 'Github', 
      url: 'https://github.com/timilehinolajolo',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/timilehinolajolo',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://x.com/_timilehintaiwo',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: 'mailto:timilehinolajolo@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-purple-600 selection:text-white overflow-hidden flex flex-col">
      
      {/* Dynamic Purple Neon Glow Tracking Mouse */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-screen"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.12), transparent 40%)`
        }}
      />
      
      {/* Static Background Grid for Tech Feel */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* TOP NAVIGATION */}
      <nav className="relative z-20 w-full px-6 py-8 flex flex-col sm:flex-row justify-between items-center border-b border-white/5 max-w-6xl mx-auto gap-4 backdrop-blur-md bg-black/20">
        <span className="font-serif text-xl tracking-tight font-medium text-white">TIMILEHIN <span className="text-purple-500">.</span> OLAJOLO</span>
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-gray-400">
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
          <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-24 relative z-10 w-full">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-32">
          
          {/* HERO SECTION */}
          <motion.section variants={fadeUp} className="flex flex-col items-start max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white leading-[1.1]">
              React <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Frontend Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed max-w-2xl">
              I specialize in building highly interactive, scalable, and beautifully designed user interfaces. Blending technical precision with modern architecture.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <motion.a 
                href="https://docs.google.com/document/d/1wKIBraeCHSW1QraUxYWsBXUoITmB6TAr/edit?usp=drive_link&ouid=108583792234478317509&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black font-medium text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] cursor-pointer inline-block"
              >
                Resume
              </motion.a>
              
              <div className="flex gap-5">
                {socialLinks.map((platform) => (
                  <motion.a 
                    key={platform.name} 
                    href={platform.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "#a855f7" }}
                    className="text-gray-500 transition-colors duration-300"
                    aria-label={platform.name}
                  >
                    {platform.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>

          {/* REVISED ABOUT SECTION */}
          <motion.section id="about" variants={fadeUp} className="space-y-10 max-w-4xl">
            <h2 className="text-sm font-mono uppercase tracking-widest text-purple-400 border-b border-white/10 pb-6">/ About Me /</h2>
            
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-400">
              <p>
                I am pursuing a B.Eng in Agricultural and Bioresources Engineering. 
                </p>
              
              <div className="pt-4">
                <a 
                  href="https://timilehinolajolo.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-mono text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] rounded-sm"
                >
                  View My Academic Website
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Core Skills & Future Build Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-white/5 mt-8">
              {/* Core Skills */}
              <div className="space-y-5">
                <h3 className="text-sm font-mono uppercase tracking-widest text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript (ES6+)", "React.js", "Tailwind CSS", "HTML5 & CSS3", "Git/GitHub", "DOM Manipulation"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-xs font-mono tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Future Build */}
              <div className="space-y-5">
                <h3 className="text-sm font-mono uppercase tracking-widest text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Future Build
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  I am actively expanding my expertise into Artificial Intelligence. My roadmap is focused on <strong className="text-gray-200">Machine Learning (ML) Research</strong>, Natural Language Processing (NLP), and discovering innovative ways to embed Large Language Models within modern frontend architectures.
                </p>
              </div>
            </div>
          </motion.section>

          {/* EXPERIENCE SECTION */}
          <motion.section id="experience" variants={fadeUp} className="space-y-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-purple-400 border-b border-white/10 pb-6">/ Experience /</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="group relative pl-8 border-l border-white/10 hover:border-purple-500 transition-colors duration-300">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white/20 group-hover:bg-purple-500 transition-colors duration-300" />
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-purple-500 tracking-wider uppercase">{exp.date}</span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <h4 className="text-sm font-medium text-gray-300">{exp.company}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-3xl pt-2">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* PREMIUM PROJECTS GRID WITH IMAGES */}
          <motion.section id="work" variants={fadeUp} className="space-y-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-purple-400 border-b border-white/10 pb-6">/ Selected Work /</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex flex-col h-full bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/30 transition-colors shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Project Image Container */}
                  <div className="w-full h-56 bg-[#111] overflow-hidden relative border-b border-white/5">
                    <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="space-y-3 flex-grow">
                      <span className="font-mono text-xs text-purple-500 tracking-wider uppercase">{project.category}</span>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div className="pt-8">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((techItem, techIdx) => (
                          <span key={techIdx} className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-gray-300 bg-white/5 border border-white/10 rounded-full">
                            {techItem}
                          </span>
                        ))}
                      </div>

                      {/* LIVE VIEW & GITHUB LINKS */}
                      <div className="flex gap-6 border-t border-white/10 pt-5">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono tracking-wider text-gray-400 hover:text-purple-400 transition-colors">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Live View
                          </a>
                        )}
                        
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono tracking-wider text-gray-400 hover:text-purple-400 transition-colors">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CONTACT CTA SECTION */}
          <motion.section id="contact" variants={fadeUp} className="space-y-6 pt-10 pb-16 text-center max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-sm font-mono uppercase tracking-widest text-purple-400 mb-2">/ Get In Touch /</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Let's build something.</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
I am very accomodating and open, feel free to send me a message. Let's connect            </p>
            <a 
              href="mailto:timilehinolajolo@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600 hover:text-white transition-all duration-300 font-mono text-sm tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              timilehinolajolo@gmail.com
            </a>
          </motion.section>

        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full border-t border-white/5 mt-10 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
          <span>© 2026 Timilehin Olajolo. All rights reserved.</span>
          <a href="#" className="hover:text-purple-400 transition-colors">System Back to Top ↑</a>
        </div>
      </footer>

    </div>
  );
};

export default MyPortfolio;
