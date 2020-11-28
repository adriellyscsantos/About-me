import { useState, useEffect } from "react";
import musicas from "../Services/dados";
import "../Styles/Pages/filmes.css";
import Sidebar from "../Components/Sidebar";

const Musicas = () => {
  const [busca, setBusca] = useState("");
  const [filtroMusicas, setFiltro] = useState([]);

  useEffect(() => {
    setFiltro(
      musicas.filter((musica) => {
        return musica.nome.includes(busca);
      })
    );
  }, [busca]);

  return (
    <>
      <Sidebar />
      <div className="div-busca">
        <input
          className="busca"
          type="text"
          placeholder="Pesquisar pelo nome"
          onChange={(e) => {
            setBusca(e.target.value);
          }}
        />
      </div>

      <div id="container">
        {filtroMusicas.map((musica) => {
          return (
            <div className="card">
              <h3>{musica.nome}</h3>
              <p>Gênero: {musica.genero}</p>
              <img src={musica.capa} alt="capa" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Musicas;
