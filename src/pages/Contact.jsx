import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState("");

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "2349012737241";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-20 px-6 text-center bg-black min-h-screen">
      <h2 className="text-5xl font-bold text-[#732d91] mb-6">Contact Me</h2>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-300 text-lg mb-2">
          Got a project in mind? I'm always open to exciting collaborations, 
          creative ideas, or just good conversations!
        </p>
        <p className="text-gray-400 mb-10">
          I'm very approachable and flexible, feel free to send me a message...
        </p>

        {/* WhatsApp Form */}
        <form onSubmit={sendToWhatsApp} className="flex flex-col gap-4 mb-16">
          <textarea
            rows="5"
            className="w-full p-4 rounded-lg bg-white/5 border-2 border-[#ab0eab] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            placeholder="Type your message here..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button 
            type="submit" 
            className="w-fit mx-auto px-8 py-3 bg-[#8e44ad] text-white font-bold rounded-lg hover:bg-[#732d91] transition-all flex items-center gap-2"
          >
            <i className="fab fa-whatsapp text-xl"></i> Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <a href="https://linkedin.com/in/timilehin-olajolo-6248b9279" target="_blank" className="text-white text-3xl hover:text-[#8e44ad] transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/_timilehintaiwo" target="_blank" className="text-white text-3xl hover:text-[#8e44ad] transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/timilehinolajolo" target="_blank" className="text-white text-3xl hover:text-[#8e44ad] transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/timilehinolajolo" target="_blank" className="text-white text-3xl hover:text-[#8e44ad] transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:timilehinolajolo@gmail.com" className="text-white text-3xl hover:text-[#8e44ad] transition-colors">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;