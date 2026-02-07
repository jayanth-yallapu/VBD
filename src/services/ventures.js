const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSPuro902wiNimLuvEmK10w5So7bTXVLQOPEaVCWNX4nybNtzB9lqJhXIjOZQD-geCo5pApq_UH_wDM/pub?gid=777846124&single=true&output=csv";

export const fetchVentures = async () => {
  const res = await fetch(GOOGLE_SHEET_CSV_URL);
  const text = await res.text();

  const rows = text.trim().split("\n");
  rows.shift(); // remove header row

  return rows.map((row) => {
    // ⚠️ still CSV-based, so commas in cells will break (okay for now)
    const [
      id,
      name,
      location,
      sizes,
      price,
      status,
      whatsappNumber,
      image,
      gallery,
      layout,
      highlight1,
      highlight2,
      highlight3,
    ] = row.split(",");

    return {
      id: id?.trim(),
      name: name?.trim(),
      location: location?.trim(),
      sizes: sizes?.trim(),
      price: price?.trim(),
      status: status?.trim(),
      whatsappNumber: whatsappNumber?.trim(),

      // 🖼️ Card thumbnail
      image: image?.trim(),

      // 📸 Gallery images (pipe-separated in Sheets)
      images: gallery
        ? gallery
            .split("|")
            .map((img) => img.trim())
            .filter(Boolean)
        : [],

      // 🗺️ Layout image
      layout: layout?.trim(),

      // ⭐ Highlights (THIS powers the modal bullets)
      highlights: [
        highlight1?.trim(),
        highlight2?.trim(),
        highlight3?.trim(),
      ].filter(Boolean),
    };
  });
};