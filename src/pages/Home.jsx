import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Enquiry from "../components/Enquiry";
import Ventures from "../components/Ventures";
import { fetchVentures } from "../services/ventures";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";



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
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-center text-white mb-10">
        Loading latest ventures…
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-slate-800 border border-slate-700 animate-pulse"
          >
            {/* Image placeholder */}
            <div className="h-32 w-full bg-slate-700 rounded-lg mb-4" />

            {/* Title placeholder */}
            <div className="h-4 bg-slate-700 rounded w-3/4 mb-3" />

            {/* Text lines */}
            <div className="h-3 bg-slate-700 rounded w-full mb-2" />
            <div className="h-3 bg-slate-700 rounded w-5/6 mb-2" />
            <div className="h-3 bg-slate-700 rounded w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
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
      
      {/* Card 1 */}
      <div className="p-6 rounded-xl bg-slate-800 border border-slate-700
                      hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/10 transition">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">
          Trusted Ventures
        </h3>
        <p className="text-slate-300 text-sm">
          Well-planned residential ventures with a strong reputation and satisfied customers.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 rounded-xl bg-slate-800 border border-slate-700
                      hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition">
        <h3 className="text-xl font-semibold mb-2 text-yellow-400">
          SBI Loan Approved
        </h3>
        <p className="text-slate-300 text-sm">
          Our ventures are approved by leading banks, making home loans easy and secure.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 rounded-xl bg-slate-800 border border-slate-700
                      hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/10 transition">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">
          Clear Documentation
        </h3>
        <p className="text-slate-300 text-sm">
          Transparent layouts, legal approvals, and complete documentation you can trust.
        </p>
      </div>

      {/* Card 4 */}
      <div className="p-6 rounded-xl bg-slate-800 border border-slate-700
                      hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition">
        <h3 className="text-xl font-semibold mb-2 text-yellow-400">
          Customer First
        </h3>
        <p className="text-slate-300 text-sm">
          We focus on long-term relationships, not just quick sales.
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
        <Footer/>
        <WhatsAppButton/>
      </div>
    </>
  );
};

export default Home;
