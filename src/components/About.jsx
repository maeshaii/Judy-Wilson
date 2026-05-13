import React from "react";
import {
  FaBookOpen,
  FaHandsHelping,
  FaPeace,
  FaHome,
  FaBrain,
  FaHistory,
  FaFeatherAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="py-24 bg-[#F5E6D3] relative overflow-hidden"
    id="about">
      

      {/* PREMIUM PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#b8860b_1px,transparent_1px)] [background-size:18px_18px]"></div>



      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8860b] rounded-full text-sm text-[#F5E6D3] mb-4 border border-[#8c6508] shadow-md">
            <FaBookOpen />
            About the Author
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[##022658]">
            Judy <span className="text-[#b8860b]">Wilson</span>
          </h2>

          <p className="text-[#8a6a2f] mt-3 max-w-2xl mx-auto leading-relaxed">
            An American author preserving family history, hardship, survival,
            and resilience through storytelling.
          </p>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#05070d] via-[#061a2b] to-[#0b2a4a] rounded-3xl border border-[#b8860b] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-3">
            {/* LEFT SIDE */}
            <div className="lg:col-span-1 bg-[#022658]/10 p-8 border-b lg:border-b-0 lg:border-r border-[#b8860b]/50">
              <div className="w-16 h-16 rounded-full bg-[#022658] flex items-center justify-center text-[#F5E6D3] shadow-lg mb-6">
                <FaFeatherAlt size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Her Background
              </h3>

              <p className="text-[#F5E6D3]/80 leading-relaxed text-sm">
                Judy Wilson’s story is rooted in the realities of generational
                poverty, family mental health struggles, and socioeconomic
                hardship in the United States.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-2 p-8 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-[#b8860b] mb-3">
                  American Author & Family Storykeeper
                </h4>

                <p className="text-[#F5E6D3]/85 leading-relaxed">
                  Judy Wilson is an American author whose life and writing were
                  shaped by the hardships she experienced and witnessed within
                  her family. Growing up around poverty, emotional struggles,
                  and difficult family circumstances gave her a deep
                  understanding of survival, pain, and resilience.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#b8860b] mb-3">
                  Role as an Oral Historian
                </h4>

                <p className="text-[#F5E6D3]/85 leading-relaxed">
                  Beyond writing about her own life, she took on the role of an
                  oral historian for her family. She documented ancestral
                  accounts, remembered hardships, and preserved stories passed
                  down through generations — including family history dating
                  back to the 1800s.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 rounded-xl p-4 border border-[#b8860b]/40">
                  <FaHome className="text-[#b8860b] mb-2" />
                  <p className="text-white font-medium">Family Hardship</p>
                  <p className="text-sm text-[#F5E6D3]/70">
                    Poverty, struggle, and generational challenges.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-[#b8860b]/40">
                  <FaBrain className="text-[#b8860b] mb-2" />
                  <p className="text-white font-medium">Mental Health</p>
                  <p className="text-sm text-[#F5E6D3]/70">
                    Family emotional pain and mental health struggles.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-[#b8860b]/40">
                  <FaHistory className="text-[#b8860b] mb-2" />
                  <p className="text-white font-medium">Oral History</p>
                  <p className="text-sm text-[#F5E6D3]/70">
                    Preserving ancestral accounts from the 1800s.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-[#b8860b]/40">
                  <FaPeace className="text-[#b8860b] mb-2" />
                  <p className="text-white font-medium">Resilience</p>
                  <p className="text-sm text-[#F5E6D3]/70">
                    Turning hardship into memory, healing, and strength.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5E6D3]/10 border-l-4 border-[#b8860b] p-5 rounded-xl">
                <p className="text-[#F5E6D3]/85 italic leading-relaxed">
                  Her work honors the past while giving voice to the struggles,
                  memories, and strength of her family’s history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;