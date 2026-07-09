import Api from '../../services/api';
import ModalCadastro from './modalCadastro'
import { useState, useEffect } from 'react';
import tipoInput from '../../enum/tipoInput';

export default function Tabela(
    {   
        schema_tabela,
        schema_cadastro,
        titulo_cadastro,
        nomeController
    }) {

    const [showModal, setShowModal] = useState(false);
    const [objSelecionado, setObjSelecionado] = useState(null);
    const [dadosBase, setDadosBase] = useState([]);

    useEffect(() => {
        carregarListagem();
    }, []);

    function editar(id){
        Api.get(nomeController +"/"+ id)
            .then(data=> setObjSelecionado(data));

        setShowModal(true);
    }
    
    function desativar(id){
        Api.delete(nomeController +"/"+ id);

        carregarListagem();
    }

    function carregarListagem(){//TODO: está sendo chamada duas vezes
        Api.get(nomeController + "/listagem").then(data => {
            setDadosBase(data);
        });
    }

    //ABRE O MODAL CONFIGURADO PARA CADASTRAR
    function cadastrar(){

    //isso é uma solução temporária até que eu termine a implementação da API no front
    //a alternativa seria editar o funcionamento do form para aceitar um schema do objeto
    const novoObjeto = {
        id: null,
        ...Object.fromEntries(
            schema_tabela.map(col => [col.key, ""])
        )
    };

    setObjSelecionado(novoObjeto);
    setShowModal(true);
    }

    //TODO: no momento de salvar também é necessário adequar a forma como a API aceita os dados
    const handleSave = (objEditado) => {
        if(objEditado.id == null){
            Api.post(nomeController, objEditado).then(data => {
                carregarListagem();
            });
        }
        else{
            Api.put(`${nomeController}/${objEditado.id}`, objEditado).then(data => {
                carregarListagem();
            });
        }

        setShowModal(false);
        setObjSelecionado(null);
        carregarListagem();
    };

    const [busca, setBusca] = useState("");
  
    const filtrados = dadosBase.filter(obj =>
        Object.values(obj).some(valor =>
            valor !== null &&
            valor !== undefined &&
            String(valor).toLowerCase().includes(busca.toLowerCase())
        )
    );

    const renderCelula = (filtrado, col) => {
        switch (col.tipo) {
            case tipoInput.BOOLEANO:
                return (
                    <input
                        className="form-check-input mt-2"
                        readOnly
                        type="checkbox"
                        checked={!!filtrado[col.key]}
                    />
                );

            default:
                return filtrado[col.key];
        }
    };

  return (
    <div>
        <hr />
        <div className="d-flex" role="search">
            <button
                className="btn btn-success fw-bold me-1 ms-1"
                onClick={() => cadastrar()}
            >
                Cadastrar
            </button>

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
                {schema_tabela.map(coluna => (
                    <th key={coluna.key}>{coluna.label}</th>
                ))}
                <th></th>
                </tr>
            </thead>
            <tbody>
            {filtrados.map(filtrado => (
                <tr key={filtrado.id}>
                {schema_tabela.map(col => (
                    <td key={col.key}>
                        {renderCelula(filtrado, col)}
                    </td>
                ))}
                <td>
                    <div className="d-flex justify-content-around">
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => editar(filtrado.id)}
                        >
                            Editar
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => desativar(filtrado.id)}
                        >
                            Desativar
                        </button>
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
            </table>

            {objSelecionado && (
            <ModalCadastro
                show={showModal}
                onClose={() => {
                    setShowModal(false);
                    setObjSelecionado(null);
                }}
                titulo={titulo_cadastro}
                classesConteudo="d-flex flex-wrap"
                dadosIniciais={objSelecionado}
                schema_cadastro={schema_cadastro}
                onSave={handleSave}
            />
            )}
    </div>
  )
}
