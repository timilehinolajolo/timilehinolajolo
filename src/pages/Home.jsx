import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/my-logo.jpg'; 

const Home = () => {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Timilehin Olajolo";

  useEffect(() => {
    setDisplayName("");
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setDisplayName((prev) => prev + fullName.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-8 text-center animate-fadeIn min-h-[70vh] flex flex-col justify-center">
      <div className="relative inline-block mx-auto mb-8">
        <img 
          src={myLogo} 
          alt="Timilehin Olajolo Logo" 
          className="w-[180px] md:w-[220px] mx-auto rounded-full animate-spinIn shadow-xl shadow-[#ab0eab]/10 border-4 border-[#ab0eab]/20" 
        />
      </div>
      
      <h2 className="text-3xl md:text-5xl font-black max-w-3xl mx-auto leading-tight">
        <span className="inline-block animate-wave origin-[70%_70%] mr-2">👋</span> 
        Hi, I am{" "}
        <span className="text-[#ab0eab] relative after:content-['|'] after:animate-blink after:ml-1 after:text-white">
          {displayName}
        </span>
      </h2>
      
      <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
        A Frontend Developer focused on building clean, responsive, and user-friendly interfaces with a growing passion for <strong>Full-stack integration</strong>.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link 
          to="/projects" 
          className="px-8 py-3 bg-[#ab0eab] text-white font-bold rounded-xl shadow-lg shadow-[#ab0eab]/30 hover:bg-[#8e0c8e] hover:-translate-y-1 transition-all"
        >
          My Projects
        </Link>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-8 py-3 border-2 border-[#ab0eab] text-[#ab0eab] font-bold rounded-xl hover:bg-[#ab0eab]/5 hover:-translate-y-1 transition-all"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
