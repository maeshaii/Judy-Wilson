import React from "react";
import {
  FaBook,
  FaStar,
  FaQuoteLeft,
  FaSmile,
  FaHeart,
  FaComments,
} from "react-icons/fa";
import { authorData } from "../data/authorData";
import coverImage from "../assets/triumph.png";

const BookDetails = () => {
  const book = authorData.book;

  return (
    <section
      id="book"
      className="py-24 relative overflow-hidden bg-[#F5E6D3]"
    >
      {/* subtle paper texture */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#b8860b_1px,transparent_1px)] [background-size:18px_18px]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">


          <h2 className="text-4xl font-bold text-[#5c3d00]">
            {book.fullTitle}
          </h2>

          <p className="text-[#8a6a2f] mt-2">
            A memoir of survival, hardship, and memory
          </p>
    
          <div className="w-28 h-1 bg-[#b8860b] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT: BOOK CARD */}
          <div className="flex justify-center">
            <div className="bg-[#fffaf2] rounded-2xl shadow-xl border border-[#d4b26a] p-6 w-full max-w-md">

              <img
                src={coverImage}
                alt="Book Cover"
                className="w-full h-auto max-h-[420px] object-contain rounded-xl  "
              />

              <div className="text-center mt-6 space-y-2">
                <p className="font-semibold text-[#5c3d00]">
                  Triumph (Kindle Edition)
                </p>

                <p className="text-[#8a6a2f] text-sm">
                  by Judy Wilson
                </p>

                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#b8860b]" size={14} />
                  ))}
                </div>

                <p className="text-xs text-[#5c3d00] font-medium mt-2">
                  A story written in memory and resilience
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-6">

            {/* DESCRIPTION */}
            <div className="bg-[#fffaf2] border border-[#d4b26a] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#5c3d00] mb-3 flex items-center gap-2">
                <FaComments className="text-[#b8860b]" />
                Book Overview
              </h3>

              <p className="text-[#5c3d00] leading-relaxed">
                <span className="font-semibold">Triumph</span> is a deeply
                personal memoir written by Judy Wilson. It captures a lifetime
                of survival through hardship, emotional struggle, and family
                conflict.
                <br /><br />
                It reflects poverty, mental health challenges, and the pursuit
                of stability in housing, health, and life. The narrative also
                reaches back through generations, preserving stories from the
                1800s passed down by the author’s mother.
                <br /><br />
                Despite its pain, the memoir carries themes of healing,
                resilience, and inner peace — a reminder that suffering can
                transform into strength.
              </p>
            </div>

            {/* QUOTE */}
            <div className="bg-[#022658] border border-[#d4b26a] rounded-2xl p-6">
              <FaQuoteLeft className="text-[#b8860b] mb-3" />

              <p className="text-[#fffaf2] italic leading-relaxed">
                “There is light at the end of the rainbow. Even through abuse,
                mental illness, and hardship, I have found peace and renewal.
                I am living proof that pain does not last forever.”
              </p>

              <div className="flex items-center gap-2 mt-4 text-sm text-[#8a6a2f]">
                <FaHeart className="text-[#b8860b]" />
                <span>Judy Wilson</span>
                <FaHeart className="text-[#b8860b]" />
              </div>
            </div>

            {/* THEMES */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-[#fffaf2] border border-[#d4b26a] rounded-xl p-4">
                <p className="font-semibold text-[#5c3d00]">Family History</p>
                <p className="text-sm text-[#8a6a2f]">
                  Generational memory & conflict
                </p>
              </div>

              <div className="bg-[#fffaf2] border border-[#d4b26a] rounded-xl p-4">
                <p className="font-semibold text-[#5c3d00]">Mental Health</p>
                <p className="text-sm text-[#8a6a2f]">
                  Depression & emotional pain
                </p>
              </div>

              <div className="bg-[#fffaf2] border border-[#d4b26a] rounded-xl p-4">
                <p className="font-semibold text-[#5c3d00]">Survival</p>
                <p className="text-sm text-[#8a6a2f]">
                  Poverty & hardship
                </p>
              </div>

              <div className="bg-[#fffaf2] border border-[#d4b26a] rounded-xl p-4">
                <p className="font-semibold text-[#5c3d00]">Healing</p>
                <p className="text-sm text-[#8a6a2f]">
                  Peace, faith & renewal
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;