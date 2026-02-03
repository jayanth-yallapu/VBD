const Ventures = ({ ventures }) => {
  return (
    <section id="ventures" className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">
          Our <span className="text-teal-400">Ventures</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ventures.map((v, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden
                         hover:border-teal-400 transition"
            >
              {/* Image */}
              {v.image && (
                <img
                  src={v.image}
                  alt={v.name}
                  className="h-40 w-full object-cover"
                />
              )}

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {v.name}
                </h3>

                {v.status && (
                  <span className="inline-block mt-2 text-sm text-yellow-400">
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
