const Ventures = ({ ventures = [], onSelectVenture }) => {
  return (
    <section id="ventures" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center md:text-left">
          Our <span className="text-teal-400">Ventures</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ventures.map((v, i) => (
            <div
              key={v.id || i}
              onClick={() => onSelectVenture?.(v.name)}
              className="group cursor-pointer bg-slate-900 border border-slate-800
                         rounded-2xl overflow-hidden
                         hover:border-teal-400 hover:shadow-xl hover:shadow-teal-400/10
                         transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              {v.image && (
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-full w-full object-cover
                               group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* subtle image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition">
                  {v.name}
                </h3>

                {v.status && (
                  <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold
                                   bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                    {v.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
