import {useState} from 'react'
import ChatListContact from './chatListChamado'

export default function ChatList({ chats, Usuarios }) {
  const [busca, setBusca] = useState("");
    
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
    <div className="card">
      <div className="card-body">
        <div className="d-flex" role="search">
            <input onChange={(e) => setBusca(e.target.value)}
              className="form-control me-2" 
              type="search" 
              placeholder="Busca" 
              aria-label="Search"/>
        </div>
        <ul className="list-unstyled mb-0">
          {filtrados.map((chat, index) => {
            const isLast = index === filtrados.length - 1;

            return (
              <ChatListContact
                key={chat.id} 
                usuario={Usuarios[chat.id_usuario]}
                texto={chat.texto}
                tempo={chat.tempo}
                naoLida={chat.naoLida}
                qtdNaoLida={chat.qtdNaoLida}
                isLast={isLast}
              />
            );
          })}
        </ul>
      </div>
    </div>
  )
}
