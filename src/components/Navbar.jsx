const Navbar = () => {
  return (
    <nav className="w-full bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <span className="text-teal-400">Vande Bharat</span>{" "}
          <span className="text-yellow-400">Developers</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-teal-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-teal-400 transition">
            Ventures
          </a>
          <a href="#" className="hover:text-teal-400 transition">
            About
          </a>
          <a href="#" className="hover:text-teal-400 transition">
            Contact
          </a>

          {/* CTA */}
          <button className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-md font-semibold hover:bg-yellow-300 transition">
            Enquire Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
