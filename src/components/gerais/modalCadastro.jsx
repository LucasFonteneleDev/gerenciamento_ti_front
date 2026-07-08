import { useState, useEffect } from 'react'
import InputVariavel from './inputVariavel';
import Modal from "./modal.jsx";
import ModalPesquisa from './modalPesquisa.jsx';

export default function ModalCadastro({ 
    show,
    onClose,
    titulo,
    classesConteudo,
    dadosIniciais,
    schema_cadastro,
    onSave}) {

  const [form, setForm] = useState(dadosIniciais);//TODO: mudar de form para um nome mais intuitivo, está confuso com a troca de nomes
  const [showPesquisa, setShowPesquisa] = useState(false);

  //todo: transformar em objeto
  const [displayPathPesquisaTemp, setDisplayPathPesquisaTemp] = useState("");
  const [controllerPesquisa, setControllerPesquisa] = useState("");//todo: definir controller
  const [tituloPesquisa, setTituloPesquisa] = useState("");
  const [propriedadeAlvo, setPropriedadeAlvo] = useState("");

  useEffect(() => {
    setForm(dadosIniciais);
  }, [dadosIniciais]);

  const handleChange = (path, value) => {
    setForm(prev => {
      const novo = structuredClone(prev);

      const keys = path.split(".");
      let atual = novo;

      for (let i = 0; i < keys.length - 1; i++) {
        atual = atual[keys[i]];
      }

      atual[keys[keys.length - 1]] = value;

      return novo;
    });
  };

  const handleSubmit = () => {
    onSave(form);
  };

  function limparPesquisa(){
    setDisplayPathPesquisaTemp("");
    setControllerPesquisa("");
    setPropriedadeAlvo("");
  }

  function getNestedValue(obj, path) {
    return path
      .split('.')
      .reduce((acc, key) => acc?.[key], obj);
  }

  function pesquisarObjetoRelacionado(displayStringPath, controllerPesquisa, propriedadeAlvo){
    console.log(displayStringPath, controllerPesquisa, propriedadeAlvo);

    setDisplayPathPesquisaTemp(displayStringPath);
    setControllerPesquisa(controllerPesquisa);
    setPropriedadeAlvo(propriedadeAlvo);

    setShowPesquisa(true);
  }

  if (!show) return null;

  return (
    <div>
      <Modal titulo={titulo} onClose={onClose}>
        <div className="modal-body" >
          <div className={classesConteudo}>
            {
              schema_cadastro.map(campo => {
                return (
                  <InputVariavel
                    key={campo.key}
                    chave={campo.key}
                    label={campo.label}
                    valor={
                        //todo: utilizar enumerator e checar o tipo do valor
                        campo.displayPath
                            ? getNestedValue(form, campo.displayPath)
                            : form[campo.key]
                    }
                    tipo={campo.tipo}
                    handleChange={handleChange} //TODO: trocar função para receber o tipo do campo e renderizar o input correto
                    onClick={e=> 
                      pesquisarObjetoRelacionado(
                        campo.displayPath,
                        campo.controller,
                        campo.key
                      )}
                  />
                )
                })
              }

            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleSubmit}>Salvar</button>
            <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
          </div>
        <div className={`modal-body ${classesConteudo}`}></div>
      </Modal>

      <ModalPesquisa
          show={showPesquisa}
          displayPath={displayPathPesquisaTemp}//TODO: NÃO GOSTO DESSA SOLUÇÃO
          controller={controllerPesquisa}//TODO: NÃO GOSTO DESSA SOLUÇÃO
          onClose={e => {setShowPesquisa(false);}}
          titulo={displayPathPesquisaTemp}//TODO: separar melhor variáveis de ambiente entre configurações, layouts e strings,
                                  //promover legibilidade e intuitividade.
          onSave={handlePesquisaRelacionado}
      />
    </div>
  );

  function handlePesquisaRelacionado(objSelecionado){
    //TODO: corrigir chamada de display de variável de nome do objeto
    var trueDisplayPropriety = displayPathPesquisaTemp
        .split('.')
        .at(-1)
    var displayValue = objSelecionado[trueDisplayPropriety]

    handleChange(propriedadeAlvo, objSelecionado.id);
    handleChange(
      displayPathPesquisaTemp,
      displayValue
     );

    limparPesquisa(); 
    setShowPesquisa(false);
  }
}
