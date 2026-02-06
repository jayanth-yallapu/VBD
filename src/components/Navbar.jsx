import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false); // close mobile menu after click
  };

  return (
    <nav className="w-full bg-slate-900 text-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div
  onClick={() => scrollTo("home")}
  className="flex items-center gap-3 cursor-pointer"
>
  <img
    src="/icon.svg"
    alt="Vande Bharat Developers Logo"
    className="h-9 w-auto"
  />

  <div className="text-xl font-bold tracking-wide">
    <span className="text-teal-400">Vande Bharat</span>{" "}
    <span className="text-yellow-400">Developers</span>
  </div>
</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("home")} className="hover:text-teal-400 transition">
            Home
          </button>

          <button onClick={() => scrollTo("ventures")} className="hover:text-teal-400 transition">
            Ventures
          </button>

          <button onClick={() => scrollTo("enquiry")} className="hover:text-teal-400 transition">
            Contact
          </button>

          <button
            onClick={() => scrollTo("enquiry")}
            className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-6 py-6 space-y-4">
          <button
            onClick={() => scrollTo("home")}
            className="block w-full text-left hover:text-teal-400 transition"
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("ventures")}
            className="block w-full text-left hover:text-teal-400 transition"
          >
            Ventures
          </button>

          <button
            onClick={() => scrollTo("enquiry")}
            className="block w-full text-left hover:text-teal-400 transition"
          >
            Contact
          </button>

          <button
            onClick={() => scrollTo("enquiry")}
            className="w-full bg-yellow-400 text-slate-900 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Enquire Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
