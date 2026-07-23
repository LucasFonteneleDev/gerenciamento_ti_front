export default function ChatListContact({ usuario, requisitante, texto, tempo, naoLida, qtdNaoLida }) {

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
    <li class="pb-1 bg-body-tertiary">
      <a href="#" className="text-decoration-none">
        <div className="list-group">
          <div className="list-group-item">
            <div className="d-flex align-items-center">

              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={usuario ? usuario.foto : requisitante}
                  alt={usuario ? usuario.usuario : requisitante}
                  className="rounded-circle"
                  width="50"
                  height="50"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex-grow-1 ms-3 overflow-hidden">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0 text-truncate">
                    {usuario ? usuario.usuario : requisitante}
                  </h6>
                </div>

                <p className="mb-0 text-muted text-truncate">
                  {texto}
                </p>
              </div>

              {/* Hora + badge */}
              <div className="ms-3 text-end">
                <small className="text-muted d-block">
                  {formatarDataChat(tempo)}
                </small>

                {qtdNaoLida > 0 && (
                  <span className="badge bg-danger rounded-pill">
                    {qtdNaoLida}
                  </span>
                )}
              </div>

            </div>
          </div>
        </div>
      </a>
    </li>
  )
}
