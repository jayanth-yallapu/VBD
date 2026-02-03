const STORAGE_KEY = "ventures";

/* Get all ventures */
export const getVentures = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

/* Add a new venture */
export const addVenture = (venture) => {
  const ventures = getVentures();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...ventures, venture])
  );
};

/* Delete a venture */
export const deleteVenture = (ventureName) => {
  const ventures = getVentures().filter(
    (v) => v !== ventureName
  );
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(ventures)
  );
};
