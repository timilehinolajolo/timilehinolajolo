import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [typedAbout, setTypedAbout] = useState("");
  const aboutText = "I'm a frontend developer who enjoys building clean, responsive websites with HTML, CSS, and JavaScript. I’m getting comfortable with TailwindCSS and ReactJS to take my skills further, and getting to dive into Typescript soon. I believe in learning by doing—whether it’s tweaking layouts, fixing tricky bugs, or exploring new ways to make websites smoother and more interactive. Right now, I’m focused on sharpening my fundamentals while slowly stepping into more advanced tools. Not an expert, but definitely on my way.";

  useEffect(() => {
    let a = 0;
    const interval = setInterval(() => {
      setTypedAbout(aboutText.substring(0, a + 1));
      a++;
      if (a === aboutText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center bg-black text-[#ab0eab]">
      <h2 className="text-5xl font-black mb-8 font-cursive">About Me</h2>

      <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed min-h-[200px] after:content-['|'] after:animate-blink">
        {typedAbout}
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-12">
        <Link to="/projects" className="px-8 py-3 bg-[#8e44ad] text-white rounded-lg font-bold hover:bg-[#732d91] transition-all">
          My Projects
        </Link>
        <Link to="/contact" className="px-8 py-3 bg-white text-[#8e44ad] rounded-lg font-bold hover:bg-purple-100 transition-all">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default About;