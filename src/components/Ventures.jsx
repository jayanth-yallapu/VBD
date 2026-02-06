import { useState, useEffect } from "react";

const Ventures = ({ ventures = [] }) => {
  const [activeVenture, setActiveVenture] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (venture) => {
    setActiveVenture(venture);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setActiveVenture(null), 200);
  };

  return (
    <>
      {/* Ventures Section */}
      <section id="ventures" className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center md:text-left">
            Our <span className="text-teal-400">Ventures</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ventures.map((v, i) => (
              <div
                key={v.id || i}
                onClick={() => openModal(v)}
                className="cursor-pointer bg-slate-900 border border-slate-800
                           rounded-2xl overflow-hidden
                           hover:border-teal-400 hover:shadow-xl hover:shadow-teal-400/10
                           transition-all duration-300 hover:-translate-y-1"
              >
                {v.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">
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

      {/* MODAL */}
      {activeVenture && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 z-50 flex items-center justify-center px-4
            transition-opacity duration-200
            ${showModal ? "opacity-100 bg-black/70 backdrop-blur-sm" : "opacity-0"}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-lg w-full bg-slate-900 border border-slate-700
                        rounded-2xl shadow-2xl overflow-hidden
                        transition-all duration-300
                        ${showModal ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {activeVenture.image && (
              <div className="h-56">
                <img
                  src={activeVenture.image}
                  alt={activeVenture.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {activeVenture.name}
              </h3>

              {activeVenture.status && (
                <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold
                                 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                  {activeVenture.status}
                </span>
              )}

              {/* Highlights */}
              <div className="mt-4 space-y-2 text-slate-300 text-sm">
                {[activeVenture.highlight1,
                  activeVenture.highlight2,
                  activeVenture.highlight3]
                  .filter(Boolean)
                  .map((text, i) => (
                    <p key={i}>• {text}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ventures;