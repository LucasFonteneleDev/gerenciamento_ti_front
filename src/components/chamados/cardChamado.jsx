import api from "../../services/api";

export default function CardChamado({ chamado, qtdNaoLida, onClick, selecionado, onExcluir, onEditar }) {

  //todo: adicionar esta função a pasta de útil
  function formatarDataChat(dataString) {
    const data = new Date(dataString);
    const hoje = new Date();

    const inicioHoje = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      hoje.getDate()
    );

    const inicioData = new Date(
      data.getFullYear(),
      data.getMonth(),
      data.getDate()
    );

    const diffDias = Math.floor(
      (inicioHoje - inicioData) / (1000 * 60 * 60 * 24)
    );

    if (diffDias === 0) {
      return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    if (diffDias === 1) {
      return "Ontem";
    }

    if (diffDias < 7) {
      return data.toLocaleDateString("pt-BR", {
        weekday: "short",
      });
    }

    if (data.getFullYear() === hoje.getFullYear()) {
      return data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      });
    }

    return data.toLocaleDateString("pt-BR");
  }

  return (
    <li onClick={onClick} class="pb-1 bg-body-tertiary">
      <div >
        <div className="list-group">
          <div className={selecionado ? "list-group-item bg-light" : "list-group-item "}>
            <div className="d-flex align-items-center ">

              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={chamado.requisitanteInicialNome}
                  alt={chamado.requisitanteInicialNome}//todo: buscar uma melhor alternativa
                  className="rounded-circle"
                  width="50"
                  height="50"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex-grow-1 ms-3 overflow-hidden">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0 text-truncate">
                    {chamado.requisitanteInicialNome}
                  </h6>
                </div>

                <p className="mb-0 text-muted text-truncate">
                  {chamado.assunto}
                </p>
              </div>

              {/* Hora + badge */}
              <div className="ms-3 text-end">
                <small className="text-muted d-block">
                  {formatarDataChat(chamado.inicio)}
                </small>

                {qtdNaoLida > 0 && (
                  <span className="badge bg-danger rounded-pill">
                    {qtdNaoLida}
                  </span>
                )}
              </div>

              {/* Dropdown de opções */}
              <div className="dropdown ms-2">
                <button
                  type="button"
                  className="btn p-1 border-0 fs-4"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ⋮
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={() => onEditar(chamado.id)}>
                      ✎ Editar
                    </button>
                  </li>

                  <li>
                    <button className="dropdown-item" onClick={() => {
                      const confirma = confirm(`Deseja mesmo Excluir o chamado com o assunto: "${chamado.assunto}" ?`);

                      if (confirma) {
                        onExcluir(chamado.id)
                      }
                    }}>
                      🗑 Excluir
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
