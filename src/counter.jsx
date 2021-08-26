import react, { useState } from "react";

const Counter = (props) => {
  const [compteur, setCompteur] = useState(1);
  const handleChange = () => {
    setCompteur(compteur + 1);
  };
  const handleCompteur = () => {
    setCompteur(0);
  };
  return (
    <div>
      {compteur}
      <button onClick={handleChange}>Incrementer</button>
      <button onClick={handleCompteur}>MA0</button>
    </div>
  );
};
export default Counter;
