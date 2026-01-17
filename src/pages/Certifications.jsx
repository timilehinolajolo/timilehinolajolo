import React from 'react';

const Certifications = () => {
  const certs = [
    {
      title: "Programming with JavaScript",
      issuer: "Meta (Coursera)",
      link: "https://coursera.org/share/a5d44308ed00e594c3726ed1a80b55f6"
    },
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Johns Hopkins University (Coursera)",
      link: "https://coursera.org/share/ac6b96b440b62e84a2a3a328d29b62d9"
    },
    {
      title: "Getting Started with Github and GitHub",
      issuer: "Microsoft Learn Student Ambassadors (MLSA)",
      link: "https://learn.microsoft.com/en-us/users/timilehin-7449/achievements/a4knkzq7"
    },
    {
      title: "Learn Tailwind CSS",
      issuer: "Scrimba (Coursera)",
      link: "https://coursera.org/api/certificate.v1/pdf/7CGK260JD8Y9"
    }
  ];

  return (
    <section className="py-20 px-6 text-center bg-black min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-[#b64fc8]">Certifications</h2>
      
      <ul className="max-w-3xl mx-auto space-y-6">
        {certs.map((cert, index) => (
          <li key={index} className="flex flex-col md:flex-row items-center justify-between p-4 border border-purple-900/30 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <span className="text-lg text-white mb-4 md:mb-0">
              {cert.title} – <span className="text-gray-400">{cert.issuer}</span>
            </span>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-2 bg-[#b64fc8] text-white rounded font-medium hover:bg-[#9d3aad] transition-colors"
            >
              View
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
