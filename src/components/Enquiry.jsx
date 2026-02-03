import { useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSftqcEn8JsgHaz_u1N2xIYkHblHLwVXJ0oL60VzwR12zJy87w/formResponse";

const Enquiry = ({ ventures }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    venture: "",
    size: "",
    facing: "",
  });

  const [loading, setLoading] = useState(false);

  const availableVentures = ventures.filter(
    v => v.status?.toLowerCase() === "available"
  );

  const selectedVenture = availableVentures.find(
    v => v.name === data.venture
  );

  const sizes =
  selectedVenture && typeof selectedVenture.sizes === "string"
    ? selectedVenture.sizes.split(",").map(s => s.trim())
    : [];


  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const isValid =
    data.name &&
    data.phone.length === 10 &&
    data.venture &&
    data.size &&
    data.facing;

  const submit = async e => {
    e.preventDefault();
    if (!isValid || loading) return;

    setLoading(true);

    // Send to Google Sheets (via Google Form)
    const formBody = new URLSearchParams({
      "entry.1284893688": data.name,
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

    // WhatsApp message (clean + human)
    const message = `Hi, I'm interested in the ${data.venture} venture.

Preferred plot size: ${data.size}
Facing preference: ${data.facing}

Name: ${data.name}
Phone: ${data.phone}`;

    const whatsapp = selectedVenture?.whatsappNumber;

    window.location.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    setData({
      name: "",
      phone: "",
      venture: "",
      size: "",
      facing: "",
    });

    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto space-y-4 p-4">
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
        maxLength={10}
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
        {availableVentures.map(v => (
          <option key={v.id} value={v.name}>
            {v.name}
          </option>
        ))}
      </select>

      <select
        name="size"
        value={data.size}
        onChange={handleChange}
        disabled={!sizes.length}
        className="border p-3 w-full"
      >
        <option value="">Plot Size</option>
        {sizes.map(s => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
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

      <button
        disabled={!isValid || loading}
        className="w-full bg-teal-500 text-white py-3 rounded disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit & WhatsApp"}
      </button>
    </form>
  );
};

export default Enquiry;
