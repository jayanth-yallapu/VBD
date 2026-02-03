import { useEffect, useState } from "react";
import { getVentures } from "../data/ventureStore";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSftqcEn8JsgHaz_u1N2xIYkHblHLwVXJ0oL60VzwR12zJy87w/formResponse"; // 🔴 replace

const Enquiry = () => {
  const [ventures, setVentures] = useState([]);
  const [data, setData] = useState({
    name: "",
    phone: "",
    venture: "",
    size: "",
    facing: "",
  });

  useEffect(() => {
    setVentures(getVentures());
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    // Validation
    if (Object.values(data).some(v => !v)) {
      alert("Please fill all fields");
      return;
    }

    // Send to Google Sheets
    const formBody = new URLSearchParams({
      "entry.1284893688": data.name,    // 🔴 replace
      "entry.621228616": data.phone,
      "entry.937809861": data.venture,
      "entry.1899246880": data.size,
      "entry.1895423107": data.facing,
    });

    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    });

    // WhatsApp message
    const message = `
Hello, I'm interested in a plot.

Name: ${data.name}
Phone: ${data.phone}
Venture: ${data.venture}
Plot Size: ${data.size}
Facing: ${data.facing}
    `;

    window.open(
      `https://wa.me/919849675068?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Reset
    setData({
      name: "",
      phone: "",
      venture: "",
      size: "",
      facing: "",
    });
  };

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        value={data.name}
        onChange={handleChange}
        className="border p-3 w-full"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={data.phone}
        onChange={handleChange}
        className="border p-3 w-full"
      />

      <select
        name="venture"
        value={data.venture}
        onChange={handleChange}
        className="border p-3 w-full"
      >
        <option value="">Select Venture</option>
        {ventures.map((v, i) => (
          <option key={i}>{v}</option>
        ))}
      </select>

      <select
        name="size"
        value={data.size}
        onChange={handleChange}
        className="border p-3 w-full"
      >
        <option value="">Plot Size</option>
        <option>120 Sq Yards</option>
        <option>240 Sq Yards</option>
        <option>360 Sq Yards</option>
      </select>

      <select
        name="facing"
        value={data.facing}
        onChange={handleChange}
        className="border p-3 w-full"
      >
        <option value="">Facing</option>
        <option>North</option>
        <option>South</option>
        <option>East</option>
        <option>West</option>
        <option>North-East</option>
        <option>North-West</option>
        <option>South-East</option>
        <option>South-West</option>
      </select>

      <button className="w-full bg-teal-500 text-white py-3 rounded">
        Submit & WhatsApp
      </button>
    </form>
  );
};

export default Enquiry;
