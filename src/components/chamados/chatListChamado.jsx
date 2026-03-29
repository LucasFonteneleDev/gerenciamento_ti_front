export default function ChatListContact({usuario, texto, tempo, naoLida, qtdNaoLida, isLast}) {
  return (
    <li class={isLast ? ("p-2 bg-body-tertiary"):("p-2 border-bottom bg-body-tertiary") }>
        <a href="#" className="d-flex justify-content-between text-decoration-none">
        <div class="d-flex flex-row">
            <img src={usuario.foto} alt="avatar"
            class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
            <div class="pt-1">
            <p class="fw-bold mb-0">{usuario.usuario}</p>
            <p class="small text-muted">{texto}</p>
            </div>
        </div>
        <div class="pt-1">
            <p class="small text-muted mb-1">{tempo}</p>
            {naoLida && (<span class="badge bg-danger float-end">{qtdNaoLida}</span>)}
        </div>
        </a>
    </li>
  )
}
