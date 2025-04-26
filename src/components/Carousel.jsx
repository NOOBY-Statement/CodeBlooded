import { useState } from "react";
import { Link } from "react-router-dom";

const members = [
  { src: "images/lacambra.png", name: "Lacambra", link: "/member1" },
  { src: "images/legaspi.png", name: "Legaspi", link: "/member2" },
  { src: "images/sonaliza.png", name: "Sonaliza", link: "/member3" },
  { src: "images/datu.png", name: "Datu", link: "/member4" },
  { src: "images/defensor.png", name: "Defensor", link: "/member5" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updatePos = (i) => {
    const offset = ((i - currentIndex + members.length) % members.length + members.length) % members.length;
    if (offset === 0) return "translate-x-0 scale-120 z-[3] opacity-100";
    if (offset === 1 || offset === -4) return "translate-x-[220px] scale-90 z-[2] opacity-60";
    if (offset === 2 || offset === -3) return "translate-x-[440px] scale-70 z-[1] opacity-30";
    if (offset === 3 || offset === -2) return "-translate-x-[440px] scale-70 z-[1] opacity-30";
    if (offset === 4 || offset === -1) return "-translate-x-[220px] scale-90 z-[2] opacity-60";
    return "opacity-0 scale-0 z-0";
  };

  return (
    <div className="relative w-full max-w-[900px] h-[300px] sm:h-[350px] flex justify-center items-center perspective-[1000px] overflow-visible">

      {/* --- Light Rays --- */}
      <div className="ray center"></div>
      <div className="ray left"></div>
      <div className="ray right"></div>
      <div className="ray diagonal"></div>

      {/* --- Carousel Cards --- */}
      {members.map((member, i) => (
        <Link
        key={i}
        to={member.link}
        className={`absolute w-[120px] sm:w-[180px] md:w-[200px] h-[180px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-[0_0_20px_rgba(255,255,255,0.2)] ${updatePos(i)}`}
      >
        <img src={member.src} alt={member.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 w-full text-center bg-black/60 text-white text-xs sm:text-sm font-semibold py-1">
          {member.name}
        </div>
      </Link>
      ))}

      {/* --- Navigation Buttons --- */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-6 sm:px-10 z-10">
        <button
          className="bg-gray-500 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] text-black rounded-full flex items-center justify-center text-xl sm:text-2xl hover:bg-white shadow-md"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)}
        >
          ←
        </button>
        <button
          className="bg-gray-500 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] text-black rounded-full flex items-center justify-center text-xl sm:text-2xl hover:bg-white shadow-md"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % members.length)}
        >
          →
        </button>
      </div>
    </div>
  );
}
