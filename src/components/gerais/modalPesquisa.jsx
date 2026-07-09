import React from 'react'
import Modal from './modal'
import api from '../../services/api';
import { useState, useEffect } from 'react';
import schema_pesquisa from "../../schemas/schemasPesquisaGeral.jsx"

export default function ModalPesquisa({show, onClose, onSelect, titulo, controller, id_schema_pesquisa}) {
  //todo: avaliar se constante é o tipo correto neste contexto
  const schema_colunas_pesquisa = schema_pesquisa[id_schema_pesquisa];

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
      titulo={titulo}
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
                  {schema_colunas_pesquisa.map(col => (
                      <th key={col.key}>{col.label}</th>
                  ))}
                  <th></th>
                  </tr>
              </thead>
              <tbody>
              {filtrados.map(filtrado => (
                  <tr key={filtrado.id}>
                    {schema_colunas_pesquisa.map(col => 
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
                              onClick={() => onSelect(filtrado)}
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
