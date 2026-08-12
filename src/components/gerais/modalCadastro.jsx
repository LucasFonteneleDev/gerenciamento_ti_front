import { useState, useEffect } from 'react'
import InputVariavel from './inputVariavel';
import Modal from "./modal.jsx";
import ModalPesquisa from './modalPesquisa.jsx';
import tipoInput from '../../enum/tipoInput.jsx';


export default function ModalCadastro({ 
    show,
    onClose,
    titulo,
    classesConteudo,
    dadosIniciais,
    schema_cadastro,
    onSave}) {

  const [form, setForm] = useState(dadosIniciais);
  const [showPesquisa, setShowPesquisa] = useState(false);

  //todo: transformar em objeto
  const [id_schema_pesquisa, setId_schema_pesquisa] = useState("")
  const [tituloPesquisa, setTituloPesquisa] = useState("");
  const [nomeColunaPesquisa, setNomeColunaPesquisa] = useState("");
  const [controllerPesquisa, setControllerPesquisa] = useState("");
  const [keyCaixaTexto, setKeyCaixaTexto] = useState("");
  const [propriedadeAlvo, setPropriedadeAlvo] = useState("");

  useEffect(() => {
    setForm(dadosIniciais);
  }, [dadosIniciais]);

  const handleChange = (chave, valor) => {
    // console.log("chave: "+chave +" | "+"Valor: "+valor);
    
    setForm(prev => ({
      ...prev,
      [chave]: valor
    }));
  };

  const handleSubmit = () => {
    //todo: concluir validação de senha
    // const campoSenha = form.find(
    //     campo => campo.tipo === tipoInput.SENHA
    // );

    // alert(JSON.stringify(form));

    // if (campoSenha) {
    //     const senha = form[campoSenha.key];

    //     if (!senha) {
    //         alert("Informe a senha.");
    //         return;
    //     }
    // }

    //VALIDAÇÕES DO SUBMIT (TEMPORÁRIA)
    const campos_vazios = schema_cadastro.filter(campo_schema => 
      campo_schema.Obrigatorio && !form[campo_schema.key]
    );

    if(Array.isArray(campos_vazios) && campos_vazios.length > 0){
      // if(campo_schema.Obrigatorio){
      //   alert(`Campo "${campo_schema.label}" não pode ser vazio.`);
      //   return;
      // }

      var campos_string = "";
      campos_vazios.forEach(campo_schema => {
        campos_string = campos_string + `${campo_schema.label}, `;
      });

      alert(`Campo(s) "${campos_string}" não pode(m) ser vazio(s).`);
      return;
    }

    //todo: IMPORTAR PARA O MODAL CADASTRO A RESPONSABILIDADE DE CHAMAR A API
    onSave(form);
  };

  function limparPesquisa(){
    setTituloPesquisa("");
    setKeyCaixaTexto("");
    setNomeColunaPesquisa("");
    setControllerPesquisa("");
    setId_schema_pesquisa("");
    setPropriedadeAlvo("");
  }

  function getNestedValue(obj, path) {
    return path
      .split('.')
      .reduce((acc, key) => acc?.[key], obj);
  }

  function pesquisarObjetoRelacionado(
      keyCaixaTexto, 
      colunaLabel,
      controller, 
      propriedade_alvo, 
      tituloPesquisa,
      id_schema_pesquisa
    ){

    setKeyCaixaTexto(keyCaixaTexto);
    setNomeColunaPesquisa(colunaLabel);
    setControllerPesquisa(controller);
    setPropriedadeAlvo(propriedade_alvo);
    setTituloPesquisa(tituloPesquisa);
    setId_schema_pesquisa(id_schema_pesquisa);

    setShowPesquisa(true);
  }

  if (!show) return null;

  function configurarCampo(campo){

    if(campo.id_de_nome){
      return;//todo: verificar se está atrapalhando o layout de cadastro
    }

    return (
      <InputVariavel
        key={campo.key}
        chave={campo.key}
        label={campo.label}
        valor={form[campo.key]}
        tipo={campo.tipo}
        handleChange={handleChange}
        onClick={e=> 
          pesquisarObjetoRelacionado(
            campo.key, //identificador da caixa de texto que vai receber o valor visual
            campo.colunaLabel,//Propriedade do objeto selectionado que preenche a caixa de texto
            campo.controller,//controller de onde vem a listagem para pesquisa
            campo.propriedade_alvo,//chave do valor a ser alterado no form
            campo.tituloPesquisa,
            campo.id_schema_pesquisa
          )}
      />
    )
  }

  return (
    <div>
      <Modal titulo={titulo} onClose={onClose}>
        <div className="modal-body" >
          <div className={classesConteudo}>
            {
              schema_cadastro.map(campo => configurarCampo(campo))
            }
          </div>
        </div>

        <div className="modal-footer" //todo: pedir confirmação para salvar
        >
          <button className="btn btn-primary" onClick={handleSubmit}>Salvar</button>
          <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
        </div>

        <div className={`modal-body ${classesConteudo}`}>
        </div>
      </Modal>

      <ModalPesquisa
          show={showPesquisa}
          controller={controllerPesquisa}//será alterado quando estas informações forem centralizadas em objeto
          onClose={e => {setShowPesquisa(false);}}
          titulo={tituloPesquisa}
          id_schema_pesquisa={id_schema_pesquisa}
          onSelect={handlePesquisaRelacionado}
      />
    </div>
  );

  function handlePesquisaRelacionado(objSelecionado){
    handleChange(propriedadeAlvo, objSelecionado.id);

    var displayValue = objSelecionado[nomeColunaPesquisa]
    handleChange(keyCaixaTexto, displayValue);

    limparPesquisa(); 
    setShowPesquisa(false);
  }
}
