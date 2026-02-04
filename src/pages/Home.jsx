import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Enquiry from "../components/Enquiry";
import Ventures from "../components/Ventures";
import { fetchVentures } from "../services/ventures";

const Home = () => {
  const [ventures, setVentures] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedVenture, setSelectedVenture] = useState("");

  useEffect(() => {
    fetchVentures()
      .then((data) => {
        setVentures(Array.isArray(data) ? data : []);
      })
      .catch(() => setVentures([]))
      .finally(() => setLoading(false));
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (loading) {
    return <div className="p-10 text-center">Loading ventures…</div>;
  }

  return (
    <>
      {/* 🏠 HOME */}
      <div id="home">
        <Hero scrollTo={scrollTo} />
      </div>

      {/* 🔥 HIGHLIGHTS */}
      <section className="w-full bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose <span className="text-teal-400">Us</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700
                            hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/10 transition">
              <h3 className="text-xl font-semibold mb-2 text-teal-400">
                Trusted Ventures
              </h3>
              <p className="text-slate-300 text-sm">
                Carefully curated ventures with proven track records.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700
                            hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Easy Enquiry
              </h3>
              <p className="text-slate-300 text-sm">
                Submit enquiries instantly and get quick responses.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700
                            hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/10 transition">
              <h3 className="text-xl font-semibold mb-2 text-teal-400">
                Verified Data
              </h3>
              <p className="text-slate-300 text-sm">
                All venture details are managed directly from live sheets.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700
                            hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                Customer First
              </h3>
              <p className="text-slate-300 text-sm">
                Designed to make your decision faster and easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏗️ VENTURES */}
      <div id="ventures">
        <Ventures
          ventures={ventures}
          onSelectVenture={(name) => setSelectedVenture(name)}
        />
      </div>

      {/* 📩 ENQUIRY */}
      <div id="enquiry">
        <Enquiry
          ventures={ventures}
          selectedVenture={selectedVenture}
        />
      </div>
    </>
  );
};

export default Home;
