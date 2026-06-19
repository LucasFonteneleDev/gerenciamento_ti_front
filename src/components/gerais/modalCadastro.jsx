import { useState, useEffect } from 'react'
import InputVariavel from './inputVariavel';
import Modal from "./modal.jsx";

export default function ModalCadastro({ 
    show,
    onClose,
    titulo,
    classesConteudo,
    dadosIniciais,
    colunas, //TOOD: trocar de colunas para um nome mais intuitivo, deve ser uma confiuração para renderizar os campos dinamicamente, não necessariamente colunas
    onSave}) {

  const [form, setForm] = useState(dadosIniciais);//TODO: mudar de form para um nome mais intuitivo, está confuso com a troca de nomes

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

  if (!show) return null;

  return (
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

            colunas.map(campo => {
              return (
                <InputVariavel
                  key={campo.key}
                  chave={campo.key}
                  label={campo.label}
                  valor={form[campo.key]}
                  tipo={campo.tipo}
                  handleChange={handleChange} //TODO: trocar função para receber o tipo do campo e renderizar o input correto
                />
              )
              })
            }

          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={handleSubmit}>Salvar</button>
          <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
          <button className="btn btn-success" onClick={onClose}>Pesquisar</button>
        </div>
      <div className={`modal-body ${classesConteudo}`}></div>
    </Modal>
  );
}
