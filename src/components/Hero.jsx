import React from 'react';
import {
  FaArrowRight,
  FaChevronRight,
  FaStar,
  FaBook,
} from 'react-icons/fa';
import wowVideo from '../assets/wow.mp4';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-[#F5E6D3]"
    >

      {/* subtle texture */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#b8860b_1px,transparent_1px)] [background-size:18px_18px]"></div>      {/* Paint splash decorations */}


      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left relative">

            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8860b]/10 border border-[#b8860b]/30 rounded-full text-[#5c3d00] font-semibold text-sm mb-6 relative backdrop-blur-sm">
              <FaStar size={14} className="text-[#b8860b]" />
              <span>American Author & Oral Historian</span>
              <FaStar size={14} className="text-[#b8860b]" />
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight relative">

              <span className="text-[#022658]">Judy</span>{" "}
              <span className="text-[#b8860b]">Wilson</span>

              <span className="block text-[#b8860b] text-2xl md:text-3xl mt-2">
                Author & Storyteller
              </span>


            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg text-[#5c3d00]/80 mb-8 leading-relaxed relative">
              She is an American author who grew up experiencing generational
              poverty, family mental health struggles, and socioeconomic
              hardships in the United States.
              <br /><br />
              As an oral historian for her family, she documented ancestral
              hardships and preserved stories passed down through generations,
              including accounts dating back to the 1800s.
              <br /><br />
              Her work reflects resilience, memory, healing, and the importance
              of preserving family history through storytelling.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative">

              <a
                href="#book"
                className="px-6 py-3 rounded-xl bg-[#b8860b] text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore the Book
                <FaArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="px-6 py-3 rounded-xl border border-[#b8860b] text-[#5c3d00] font-semibold flex items-center justify-center gap-2 hover:bg-[#b8860b]/10 transition-all duration-300"
              >
                Learn More
                <FaChevronRight size={18} />
              </a>

            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto bg-gradient-to-br from-[#05070d] via-[#061a2b] to-[#0b2a4a] p-6 border-2 border-[#b8860b]">

              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-2xl shadow-xl"
                  style={{ maxHeight: "550px" }}
                >
                  <source src={wowVideo} type="video/mp4" />
                </video>

                <div className="absolute -bottom-4 -right-4 bg-[#b8860b] text-white rounded-full p-3 shadow-lg">
                  <FaBook size={24} />
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes paint-splash {
          0% {
            transform: scale(0.8) translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: scale(1.3) translateY(-15px);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }

        .animate-paint-splash {
          animation: paint-splash 3s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;