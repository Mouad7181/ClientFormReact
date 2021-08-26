import "./styles.css";
import React from "react";
import ReactDom from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
import Counter from "./counter";
class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Mouad Houssa" },
      { id: 2, nom: "Med Chraibi" },
      { id: 3, nom: "Ayoub Haddi" }
    ],
    nouveauClient: ""
  };
  handleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };
  handleAdd = (client) => {
    const clients = [...this.state.clients];
    clients.push(client);
    this.setState({ clients });
  };
  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <Counter />
        <ul>
          {this.state.clients.map((client) => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootelement = document.getElementById("root");
ReactDom.render(<App />, rootelement);
