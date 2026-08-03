import { useState, useEffect } from 'react';
import CardChamado from './cardChamado';
import Api from '../../services/api';

export default function ListaCardChamados({ onSelectChamado }) {
  const [busca, setBusca] = useState("");
  const [IdChamadoSelecionado, setIdChamadoSelecionado] = useState(0);
  const [CHAMADOS, setChamados] = useState([]);

  function SetChamado(idchamado){
    setIdChamadoSelecionado(idchamado);
    onSelectChamado(idchamado);
  }

  useEffect(() => {
    CarregaChamados();
  }, []);

  async function CarregaChamados() {
    await Api.get("Chamado/listagem")
      .then(data => setChamados(data));
  }

  const filtrados = CHAMADOS.filter(chamado => {

    const textoChat = Object.values(chamado).some(valor =>
      valor !== null &&
      valor !== undefined &&
      String(valor).toLowerCase().includes(busca.toLowerCase())
    );

    return textoChat;
  });

  return (
    <div className="card h-100">
      <div className="card-body overflow-auto d-flex flex-column">

        {/* Busca */}
        <div className="d-flex pb-2" role="search">
          <input
            onChange={(e) => setBusca(e.target.value)}
            className="form-control"
            type="search"
            placeholder="Busca"
          />

          <span className="badge bg-danger fs-5 ms-1">
            {filtrados.length}
          </span>
        </div>

        {/* Lista com scroll */}
        <div className="flex-grow-1 overflow-auto">
          <ul className="list-unstyled mb-0">

            {filtrados.map((chamado) => (
              <CardChamado
                key={chamado.id}
                requisitante={chamado.requisitanteInicialNome}
                texto={chamado.assunto}
                tempo={chamado.inicio}
                naoLida={true}
                qtdNaoLida={1}
                onClick={() => {
                  SetChamado(chamado.id);
                }}

                selecionado={chamado.id == IdChamadoSelecionado}
              />
            ))}

          </ul>
        </div>

      </div>
    </div>
  );
}
