import React, { useState, useEffect } from "react";
import img from "../assets/image/download (5).svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "service", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0f172a]/70 to-[#3b0764]/70 backdrop-blur-md border-b border-white/10">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
        <a href="#hero" className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-xl shadow-md">
            <img className="w-8 h-8 invert" src={img} alt="logo" />
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Markiva
          </h1>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-white text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className="relative group"
            >
              <span
                className={`transition-colors ${
                  active === link.id ? "text-pink-400" : "hover:text-pink-400"
                }`}
              >
                {link.label}
              </span>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-pink-500 transition-all duration-300 ease-in-out
                ${active === link.id ? "w-full scale-x-100 origin-left" : "w-full scale-x-0 origin-right"}`}
              />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="px-5 py-2 text-base font-semibold text-white rounded-full 
            bg-gradient-to-r from-pink-500 to-purple-600 
            hover:scale-105 hover:shadow-[0_8px_20px_rgba(236,72,153,0.25),0_12px_30px_rgba(147,51,234,0.25)] 
            transition duration-300">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? (
              <AiOutlineClose className="text-3xl text-white" />
            ) : (
              <AiOutlineMenu className="text-3xl text-white" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col items-center space-y-5 py-6 bg-[#1e1b4b]/95 backdrop-blur-md text-white text-lg font-medium animate-slideDown">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.id);
                setOpen(false);
              }}
              className={`relative ${
                active === link.id ? "text-pink-400 font-semibold" : "hover:text-pink-400"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button className="w-10/12 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 hover:shadow-lg transition duration-300">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
