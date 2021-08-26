import react, { useState } from "react";

const ClientForm = (props) => {
  const [nouveauClient, setNvClient] = useState("");
  const handleChange = (event) => {
    setNvClient(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = nouveauClient;
    props.onClientAdd({ id, nom });
    setNvClient("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nouveauClient}
        type="text"
        onChange={handleChange}
        placeholder="Ajouter un client"
      />
      <button>Confirmer</button>
    </form>
  );
};

export default ClientForm;
