import React , {useState, useRef, useEffect} from 'react'
import MessageCard from './messageCard'
import ChatList from './chatList'
import TextAreaSend from './textAreaSend'

export default function MessageChat() {
    //lista de chamados abertos
    const [Chamados, setChamados] = useState([
        {id_usuario:"0", texto:"Preciso de Ajuda!", tempo:"Agora", naoLida:true, qtdNaoLida:1},
        {id_usuario:"1", texto:"Impressora parou", tempo:"Agora", naoLida:true, qtdNaoLida:3}
    ])

    //lista de mensagens abertas atualmente.
    const [Mensagens, setMensagens] = useState([
        {id_usuario:"0", data:"13 minutos atrás", texto:"Olá! Esta é a primeira mensagem de teste."},
        {id_usuario:"1", data:"13 minutos atrás", texto:"Que bom! Esta é a segunda mensagem de teste."}
    ])

    //usuários
    const [Usuarios, setUsuarios] = useState([
        {id:"0", recebendo:true, foto:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp", usuario:"Renata - Adm"},
        {id:"1", recebendo:false, foto:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp", usuario:"Lucas Dev"}
    ])

    //usuario que envia (DEMONSTRAÇÃO)
    const [valorSelecionado, setValorSelecionado] = useState("0");
    function handleChange(event) {
        setValorSelecionado(event.target.value);
    }

    //texto da mensagem a ser enviada
    const [Texto, setTexto] = useState("")
    function handleTextoMensagem(event){
        setTexto(event.target.value)
    }

    const fimMensagensRef = useRef(null);
    useEffect(() => {
        fimMensagensRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [Mensagens]);

    //função ativada ao apertar um botão
    function Enviar(){
        //não enviar texto vazio
        if (Texto === "" || Texto == null){
            return;
        }

        setMensagens((mensagensAtuais) => ([
            ...mensagensAtuais,
            {
                id_usuario:valorSelecionado,
                recebendo:false, 
                data:"temp", 
                texto:Texto
            }
        ]));

        setTexto("");
    }

  return (
    <div>
        <div className="container py-5">

            <div className="row">
                <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">

                    <ChatList 
                        chats={Chamados}
                        Usuarios={Usuarios}
                    />

                </div>

                <div className="col-md-6 col-lg-7 col-xl-8 d-flex flex-column" style={{ height: 'calc(100vh - 170px)' }}>
                    <div className="flex-grow-1 overflow-auto bg-light rounded">
                        <ul className="list-unstyled m-1" >
                            {
                                Mensagens.map((mensagem) => 
                                    <li className="d-flex mb-4">
                                        <MessageCard
                                        recebendo={Usuarios[mensagem.id_usuario].recebendo}
                                        texto={mensagem.texto}
                                        usuario={Usuarios[mensagem.id_usuario].usuario}
                                        foto={Usuarios[mensagem.id_usuario].foto}
                                        />

                                    </li>
                                )
                            }
                        </ul>
                        <div ref={fimMensagensRef} />
                    </div>
                    <div className='mt-1'>
                        <TextAreaSend
                            text={Texto}
                            onClick={Enviar}
                            handleChange={handleTextoMensagem}
                            />
                    </div>
                    <div>
                        <select 
                        className="form-select mt-1"
                        value={valorSelecionado}
                        onChange={handleChange}
                        aria-label="Default select example">
                            <option selected value="0">{Usuarios[0].usuario}</option>
                            <option value="1">{Usuarios[1].usuario}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
