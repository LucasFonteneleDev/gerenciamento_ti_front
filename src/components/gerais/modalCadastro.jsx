import { useState, useEffect } from 'react'
import InputVariavel from './inputVariavel';
import Modal from "./modal.jsx";
import ModalPesquisa from './modalPesquisa.jsx';

export default function ModalCadastro({ 
    show,
    onClose,
    titulo,
    tituloPesquisa,
    classesConteudo,
    dadosIniciais,
    colunas, //TOOD: trocar de colunas para um nome mais intuitivo, deve ser uma confiuração para renderizar os campos dinamicamente, não necessariamente colunas
    onSave}) {

  const [form, setForm] = useState(dadosIniciais);//TODO: mudar de form para um nome mais intuitivo, está confuso com a troca de nomes
  const [showPesquisa, setShowPesquisa] = useState(false);

  useEffect(() => {
    setForm(dadosIniciais);
  }, [dadosIniciais]);

  const handleChange = (chave, valor) => {
    setForm(prev => ({
      ...prev,
      [chave]: valor
    }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  function getNestedValue(obj, path) {
    return path
      .split('.')
      .reduce((acc, key) => acc?.[key], obj);
  }

  if (!show) return null;

  return (
    <div>
      <Modal titulo={titulo} onClose={onClose}>
        <div className="modal-body" >
          <div className={classesConteudo}>
            {
              // Object.entries(form).map(([chave, valor]) => 
              //   chave != "id" && 
              //   <InputVariavel
              //     key={chave}
              //     chave={chave}
              //     valor={valor}
              //     handleChange={handleChange}
              //   />)

              //não sei se handlechange vai saber lidar com a mudança da ID referencia do campo
              //mas vou tentar mesmo assim, quem sabe dessa forma 
              colunas.map(campo => {
                return (
                  <InputVariavel
                    key={campo.key}
                    chave={campo.key}
                    label={campo.label}
                    valor={
                        campo.displayPath
                            ? getNestedValue(form, campo.displayPath)
                            : form[campo.key]
                    }
                    tipo={campo.tipo}
                    handleChange={handleChange} //TODO: trocar função para receber o tipo do campo e renderizar o input correto
                    onClick={e=> setShowPesquisa(true)}
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
          controller={"Empresa"}
          onClose={e => {
              setShowPesquisa(false);
              //onclose tinha uma propriedade sendo passada (ID)
          }}
          titulo={"teste"}//TODO: separar melhor variáveis de ambiente entre configurações, layouts e strings,
                                  //promover legibilidade e intuitividade.
          onSave={e => {
              setShowPesquisa(false);
              //handlesave
              //onclose tinha uma propriedade sendo passada (ID)
          }}
      />
    </div>
  );
}
