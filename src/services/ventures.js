const SHEET_ID = "1JzBZmEmcaiwysYg4Yn6KJpMTWGB7vN-Jt4oQSz8ETB8";
const SHEET_NAME = "Ventures";

const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

export async function fetchVentures() {
  const res = await fetch(URL);
  const text = await res.text();

  // Google adds junk before JSON
  const json = JSON.parse(text.substring(47).slice(0, -2));

  const headers = json.table.cols.map(col => col.label);
  const rows = json.table.rows;

  return rows.map(row => {
    const obj = {};
    row.c.forEach((cell, i) => {
      obj[headers[i]] = cell ? cell.v : "";
    });
    return obj;
  });
}
