const Hero = () => {const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="w-full bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Building the Future with{" "}
          <span className="text-teal-400">Innovation</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
          Vande Bharat Developers brings together ideas, technology, and
          execution to create impactful ventures.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <button onClick={() => scrollTo("ventures")} className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition">
            Explore Ventures
          </button>
          <button onClick={() => scrollTo("enquiry")} className="border border-teal-400 text-teal-400 px-6 py-3 rounded-md font-semibold hover:bg-teal-400 hover:text-slate-900 transition">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
