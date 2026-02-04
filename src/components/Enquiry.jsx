import { useEffect, useState } from "react";

const PLOT_SIZES = [120, 240, 360, 480];

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSftqcEn8JsgHaz_u1N2xIYkHblHLwVXJ0oL60VzwR12zJy87w/formResponse";

const Enquiry = ({ ventures = [], selectedVenture }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    venture: "",
    size: "",
    facing: "",
  });

  const [loading, setLoading] = useState(false);

  // 🆕 auto-fill venture when card is clicked
  useEffect(() => {
    if (selectedVenture) {
      setData((prev) => ({
        ...prev,
        venture: selectedVenture,
      }));

      // scroll to form
      document
        .getElementById("enquiry-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedVenture]);

  const selectedVentureObj = ventures.find(
    (v) => v.name === data.venture
  );

  const availableVentures = ventures.filter(
    (v) => v.status?.trim().toLowerCase() === "available"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setData({ ...data, [name]: value });
  };

  const isValid =
    data.name.trim() &&
    data.phone.length === 10 &&
    data.venture &&
    data.size &&
    data.facing;

  const submit = async (e) => {
    e.preventDefault();
    if (!isValid || loading) return;

    setLoading(true);

    try {
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
    } catch {}

    const message = `Hi, I'm interested in the ${data.venture} venture.

Preferred plot size: ${data.size}
Facing preference: ${data.facing}

Name: ${data.name}
Phone: ${data.phone}`;

    const whatsapp = selectedVentureObj?.whatsappNumber;

    if (whatsapp) {
      window.location.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        message
      )}`;
    }

    setLoading(false);
  };

  return (
  <section className="bg-slate-950 py-20">
    <form
      id="enquiry-form"
      onSubmit={submit}
      className="max-w-xl mx-auto space-y-5 p-8
                 bg-slate-900 border border-slate-800
                 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white text-center">
        Enquire About a <span className="text-teal-400">Venture</span>
      </h2>

      <p className="text-slate-400 text-sm text-center">
        Fill in the details and we’ll connect you instantly on WhatsApp
      </p>

      {/* Name */}
      <input
        name="name"
        placeholder="Your Name"
        value={data.name}
        onChange={handleChange}
        className="w-full rounded-md bg-slate-950 border border-slate-800
                   text-white placeholder-slate-500
                   px-4 py-3 focus:outline-none
                   focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
      />

      {/* Phone */}
      <input
        name="phone"
        placeholder="Phone Number"
        value={data.phone}
        maxLength={10}
        inputMode="numeric"
        onChange={handleChange}
        className="w-full rounded-md bg-slate-950 border border-slate-800
                   text-white placeholder-slate-500
                   px-4 py-3 focus:outline-none
                   focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
      />

      {/* Venture */}
      <select
        name="venture"
        value={data.venture}
        onChange={handleChange}
        className="w-full rounded-md bg-slate-950 border border-slate-800
                   text-white px-4 py-3
                   focus:outline-none focus:border-teal-400
                   focus:ring-1 focus:ring-teal-400"
      >
        <option value="" className="text-slate-400">
          Select Venture
        </option>
        {availableVentures.map((v) => (
          <option key={v.id} value={v.name}>
            {v.name}
          </option>
        ))}
      </select>

      {/* Plot Size */}
      <select
        name="size"
        value={data.size}
        onChange={handleChange}
        disabled={!data.venture}
        className="w-full rounded-md bg-slate-950 border border-slate-800
                   text-white px-4 py-3
                   disabled:opacity-50 disabled:cursor-not-allowed
                   focus:outline-none focus:border-teal-400
                   focus:ring-1 focus:ring-teal-400"
      >
        <option value="">Plot Size</option>
        {PLOT_SIZES.map((s) => (
          <option key={s} value={s}>
            {s} Sq Yards
          </option>
        ))}
      </select>

      {/* Facing */}
      <select
        name="facing"
        value={data.facing}
        onChange={handleChange}
        className="w-full rounded-md bg-slate-950 border border-slate-800
                   text-white px-4 py-3
                   focus:outline-none focus:border-teal-400
                   focus:ring-1 focus:ring-teal-400"
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

      {/* Submit */}
      <button
        disabled={!isValid || loading}
        className="w-full mt-4 py-3 rounded-md font-semibold
                   bg-yellow-400 text-slate-900
                   hover:bg-yellow-300 transition
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit & WhatsApp"}
      </button>
    </form>
  </section>
);

};

export default Enquiry;
