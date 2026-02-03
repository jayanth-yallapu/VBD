import { useState } from "react";
import { getVentures, addVenture, deleteVenture } from "../data/ventureStore";

const VentureManager = () => {
  const [ventures, setVentures] = useState(getVentures());
  const [name, setName] = useState("");

  const add = () => {
    if (!name) return;
    addVenture(name);
    setVentures(getVentures());
    setName("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Ventures</h2>

      <div className="flex gap-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Venture Name"
          className="border p-2 flex-1"
        />
        <button onClick={add} className="bg-teal-500 text-white px-4">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {ventures.map((v, i) => (
          <li key={i} className="flex justify-between border p-2">
            {v}
            <button
              onClick={() => {
                deleteVenture(v);
                setVentures(getVentures());
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VentureManager;
