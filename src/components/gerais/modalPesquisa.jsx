import React from 'react'
import Modal from './modal'
import api from '../../services/api';
import { useState, useEffect } from 'react';


export default function ModalPesquisa({show, onClose, onSave, titulo, controller, }) {
  //carregar listagem de ítens de qualquer endpoint
  //vai requerer outra
  //TODO: requerer SCHEMAS do banco de dados ao invés de salvar na pagina, repassar apenas a controller a ser requisitada
  // por enquanto vou terminar o modal de pesquisa e resolver os bugs da CRUD com a API

  const colunas = [
    { key: 'nome', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
    { key: 'contato', label: 'Contato' }
  ];

  
 useEffect(() => {
    async function carregar() {
        try {
            const data = await api.get(controller + "/listagem");
            setDadosBase(data);
        }
        catch(error) {
            console.error(error);
        }
    }

    carregar();
  }, [controller]);
  
  const [dadosBase, setDadosBase] = useState([])

  const [busca, setBusca] = useState("");
  
    const filtrados = dadosBase.filter(obj =>
        Object.values(obj).some(valor =>
            valor !== null &&
            valor !== undefined &&
            String(valor).toLowerCase().includes(busca.toLowerCase())
        )
    );
  
  if (!show) return null;

  return (
    <Modal
      onClose={onClose}
      titulo={"Pesquisa"}
    >
      <div className="modal-body">
          <div className="d-flex" role="search">
              <input onChange={(e) => setBusca(e.target.value)}
                className="form-control me-2" 
                type="search" 
                placeholder="Busca" 
                aria-label="Search"/>
          </div>
          <hr />
  
            <table className="table">
              <thead>
                  <tr>
                  {colunas.map(col => (
                      <th key={col.key}>{col.label}</th>
                  ))}
                  <th></th>
                  </tr>
              </thead>
              <tbody>
              {filtrados.map(filtrado => (
                  <tr key={filtrado.id}>
                    {colunas.map(col => 
                    (
                        <td key={col.key}>
                          {
                            typeof filtrado[col.key] === "boolean" ?
                            (
                                <input className="form-check-input" 
                                type="checkbox" 
                                id={col.key} 
                                for={col.key}
                                checked={filtrado[col.key]}/>
                            ):
                            (
                                filtrado[col.key]
                            )
                          }
                        </td>
                  ))}
                  <td>
                      <div className="d-flex justify-content-around">
                          <button
                              className="btn btn-primary"
                              onClick={() => onSave(filtrado.id)}
                          >
                              Selecionar
                          </button>
                      </div>
                  </td>
                  </tr>
              ))}
              </tbody>
            </table>
      </div>
    </Modal>
  )
}
