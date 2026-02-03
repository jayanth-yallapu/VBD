const Hero = () => {
  return (
    <section className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Building Trusted <span className="text-teal-500">Real Estate</span>{" "}
            Opportunities
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Premium residential, farm, and commercial plots in prime locations.
            Clear documentation. Transparent pricing. Trusted service.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition">
              View Ventures
            </button>

            <button className="border border-slate-900 text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-slate-900 hover:text-white transition">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Right Visual Placeholder */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-64 bg-slate-300 rounded-xl flex items-center justify-center text-slate-600">
            Image / Illustration
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
