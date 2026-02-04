import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Enquiry from "../components/Enquiry";
import Ventures from "../components/Ventures";

import { fetchVentures } from "../services/ventures";

const Home = () => {
  const [ventures, setVentures] = useState([]); // ✅ ALWAYS array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVentures()
      .then((data) => {
        setVentures(Array.isArray(data) ? data : []);
      })
      .catch(() => setVentures([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading ventures…</div>;
  }

  return (
    <>
      <Hero ventures={ventures} />
      <Ventures ventures={ventures}/>
      <Enquiry ventures={ventures} />
    </>
  );
};

export default Home;
