import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Enquiry from "../components/Enquiry";
import { fetchVentures } from "../services/ventures";

const Home = () => {
  const [ventures, setVentures] = useState([]);

  useEffect(() => {
    fetchVentures().then(setVentures);
  }, []);

  return (
    <>
      <Hero ventures={ventures} />
      <Enquiry ventures={ventures} />
    </>
  );
};

export default Home;
