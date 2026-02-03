const SHEET_ID = "1JzBZmEmcaiwysYg4Yn6KJpMTWGB7vN-Jt4oQSz8ETB8";
const SHEET_NAME = "Ventures";

const GOOGLE_SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

export const fetchVentures = async () => {
  const res = await fetch(GOOGLE_SHEET_CSV_URL);
  const text = await res.text();

  const rows = text.split("\n").slice(1);

  return rows.map(row => {
    const [name, status, image] = row.split(",");

    return {
      name: name?.trim(),
      status: status?.trim(),
      image: image?.trim(),
    };
  });
};


