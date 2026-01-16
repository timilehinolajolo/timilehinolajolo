import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Timilehin Olajolo";

  useEffect(() => {
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
    <section className="py-16 px-8 text-center animate-fadeIn">
      <img 
        src="../assets/my-logo.jpg" 
        alt="Logo" 
        className="w-[200px] mx-auto mb-8 rounded-full animate-spinIn shadow-lg shadow-black-500/20" 
/>
      
      <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-relaxed">
        <span className="inline-block animate-wave origin-[70%_70%]">👋</span> Hi, I am{" "}
        <span className="text-[#ab0eab] after:content-['|'] after:animate-blink">
          {displayName}
        </span>
      </h2>
      
      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        A Frontend Developer focused on building clean, responsive, and user-friendly interfaces.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link to="/projects" className="px-6 py-3 border-2 border-[#ab0eab] bg-[#ab0eab] text-white font-bold rounded hover:scale-105 transition-transform">
          My Projects
        </Link>
        <a href="/resume.pdf" className="px-6 py-3 border-2 border-[#ab0eab] text-[#ab0eab] font-bold rounded hover:scale-105 transition-transform">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
