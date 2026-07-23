import { useState, useEffect } from 'react';
import ChatListContact from './chatListChamado';
import Api from '../../services/api';

export default function ChatList({ chats, Usuarios }) {
  const [busca, setBusca] = useState("");
  const [CHAMADOS, setChamados] = useState([]);

  useEffect(() => {
    CarregaChamados();
  }, []);

  async function CarregaChamados() {
    Api.get("Chamado/listagem")
      .then(data => setChamados(data));
  }

  const filtrados = chats.filter(chat => {
    const usuario = Usuarios?.[chat.id_usuario];

    const textoChat = Object.values(chat).some(valor =>
      valor !== null &&
      valor !== undefined &&
      String(valor).toLowerCase().includes(busca.toLowerCase())
    );

    const textoUsuario =
      usuario &&
      Object.values(usuario).some(valor =>
        valor !== null &&
        valor !== undefined &&
        String(valor).toLowerCase().includes(busca.toLowerCase())
      );

    return textoChat || textoUsuario;
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

            {filtrados.map((chat, index) => (
              <ChatListContact
                key={chat.id}
                usuario={Usuarios[chat.id_usuario]}
                texto={chat.texto}
                tempo={chat.tempo}
                naoLida={chat.naoLida}
                qtdNaoLida={chat.qtdNaoLida}
              />
            ))}

            {CHAMADOS.map((chamado) => (
              <ChatListContact
                key={chamado.id}
                requisitante={chamado.requisitanteInicialNome}
                texto={chamado.assunto}
                tempo={chamado.inicio}
                naoLida={true}
                qtdNaoLida={1}
              />
            ))}

          </ul>
        </div>

      </div>
    </div>
  );
}
