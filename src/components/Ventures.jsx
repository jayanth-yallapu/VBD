import { useState, useEffect } from "react";

const Ventures = ({ ventures = [] }) => {
  const [activeVenture, setActiveVenture] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fullscreen image viewer
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState(null);
  const [viewerVisible, setViewerVisible] = useState(false);

  const openModal = (venture) => {
    setActiveVenture(venture);
    requestAnimationFrame(() => setShowModal(true));
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setActiveVenture(null), 350);
  };

  // viewer animation control
  useEffect(() => {
    if (viewerOpen) {
      requestAnimationFrame(() => setViewerVisible(true));
    } else {
      setViewerVisible(false);
    }
  }, [viewerOpen]);

  return (
    <>
      {/* Ventures Section */}
      <section id="ventures" className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">
            Our <span className="text-teal-400">Ventures</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ventures.map((v, i) => (
              <div
                key={v.id || i}
                onClick={() => openModal(v)}
                className="cursor-pointer bg-slate-900 border border-slate-800
                           rounded-2xl overflow-hidden
                           transition-all duration-300
                           hover:-translate-y-1 hover:border-teal-400
                           hover:shadow-xl hover:shadow-teal-400/10"
              >
                {v.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="h-full w-full object-cover
                                 transition-transform duration-700 ease-out
                                 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{v.name}</h3>
                  {v.status && (
                    <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs
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

      {/* Venture Modal */}
      {activeVenture && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 z-50 flex items-center justify-center px-4
            transition-opacity duration-300
            ${showModal ? "opacity-100 bg-black/70 backdrop-blur-sm" : "opacity-0"}
          `}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-lg w-full bg-slate-900 border border-slate-700
                        rounded-2xl shadow-2xl overflow-hidden
                        transition-all duration-500
                        ${
                          showModal
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-[0.97] translate-y-6"
                        }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-slate-400 hover:text-white text-xl z-10"
            >
              ✕
            </button>

            {/* Layout */}
            {activeVenture.layout && (
              <div className="p-4 border-b border-slate-800">
                <p className="text-sm text-slate-400 mb-2">Layout Plan</p>
                <img
                  src={activeVenture.layout}
                  className="w-full h-48 object-cover rounded-xl cursor-pointer
                             transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => {
                    setViewerImage(activeVenture.layout);
                    setViewerOpen(true);
                  }}
                />
              </div>
            )}

            {/* Gallery */}
            {activeVenture.images?.length > 0 && (
              <div className="p-4">
                <p className="text-sm text-slate-400 mb-2">Site Images</p>
                <div className="grid grid-cols-3 gap-2">
                  {activeVenture.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="h-24 w-full object-cover rounded-lg cursor-pointer
                                 transition-all duration-300 hover:scale-105 hover:opacity-90"
                      onClick={() => {
                        setViewerImage(img);
                        setViewerOpen(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Info */}
            <div className="p-6 border-t border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-3">
                {activeVenture.name}
              </h3>

              {activeVenture.highlights?.length > 0 && (
                <ul className="space-y-2 text-slate-300 text-sm">
                  {activeVenture.highlights.map((t, i) => (
                    <li key={i}>• {t}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {viewerOpen && (
        <div
          className={`fixed inset-0 z-[999] flex items-center justify-center
            transition-all duration-300
            ${
              viewerVisible
                ? "opacity-100 bg-black/90"
                : "opacity-0 bg-black/0"
            }`}
          onClick={() => setViewerOpen(false)}
        >
          <img
            src={viewerImage}
            className={`max-w-full max-h-full object-contain
              transition-all duration-500
              ${
                viewerVisible
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              }`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Ventures;