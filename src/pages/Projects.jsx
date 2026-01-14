import React from 'react';

const projects = [
    {
        title: "My portofolio",
        desc: "Built a responsive and interactive personal portofolio using ReactJS and TailwindCSS",
        link: "https://taskmasterbytimilehinolajolo.netlify.app/",
        code: "https://github.com/timilehinolajolo/WTF26-November-Project",
        image: "src/assets/timilehin-portofolio.png"
      },
  {
    title: "Task Master",
    desc: "Engineered a client-side authentication system with Vanilla JS.",
    link: "https://taskmasterbytimilehinolajolo.netlify.app/",
    code: "https://github.com/timilehinolajolo/WTF26-November-Project",
    image: "src/assets/task-master.png"
  },
  {
    title: "Team Apex - Landing Page",
    desc: "Developed a simpe landing page for team apex, using Vanilla JS and CSS3",
    link: "https://teamapexx.netlify.app/",
    code: "https://github.com/timilehinolajolo/Team-Apex",
    image: "src/assets/tem-apex.png"
  },
  {
    title: "UniGrand",
    desc: "An imaginary university dashboard for students using js, html and css.",
    link: "https://unigrand.vercel.app/",
    code: "https://github.com/Olajolo-Taiwo/UNIGRAND",
    image: "src/assets/unigrand.jpeg"
  },
  {
    title: "BuyCoin - Crypto",
    desc: "A collaborative project focusing oon the UI design.",
    link: "https:/buycoin.netlify.app",
    code: "https://github.com/timilehinolajolo/BuyCoin-Crypto",
    image: "src/assets/buycoin.jpg"
  }
];

const Projects = () => (
  <section className="py-20 px-8">
    <h2 className="text-5xl font-bold text-center mb-12 text-[#ab0eab]">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <div key={i} className="border-2 border-[#ab0eab] p-6 rounded-2xl bg-white/5 backdrop-blur-md">
          <img src={p.image} alt={p.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
          <h3 className="bg-[#732d91] p-2 text-center font-bold mb-4">{p.title}</h3>
          <p className="text-sm text-gray-300 mb-6">{p.desc}</p>
          <div className="flex gap-4">
            <a href={p.link} className="bg-[#ab0eab] px-4 py-2 rounded text-xs font-bold">Live</a>
            <a href={p.code} className="border border-white/30 px-4 py-2 rounded text-xs">Code</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;