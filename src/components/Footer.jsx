const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Vande Bharat Developers
          </h3>
          <p className="text-sm leading-relaxed">
            Developing well-planned residential ventures with a focus on trust,
            transparency, and long-term value.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => scrollTo("home")} className="hover:text-teal-400 transition">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("ventures")} className="hover:text-teal-400 transition">
                Ventures
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("enquiry")} className="hover:text-teal-400 transition">
                Contact / Enquiry
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
          <p className="text-sm mb-2">
            Interested in our ventures? Reach out for details and site visits.
          </p>
          <button
            onClick={() => scrollTo("enquiry")}
            className="mt-2 inline-block bg-yellow-400 text-slate-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
          >
            Enquire Now
          </button>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 text-center py-4 text-xs">
        © {new Date().getFullYear()} Vande Bharat Developers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;