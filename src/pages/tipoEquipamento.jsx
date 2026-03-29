import Tabela from '../components/gerais/tabela';
import React, { useState, useEffect } from 'react';
import Api from "../services/api";


export default function TipoEquipamento() {
    const [TipoEquipamentos, setTipoEquipamentos] = useState([
        // {id: 0, nome: "Notebook", descricao: ""},
        // {id: 1, nome: "Celular", descricao: ""}
    ]);
    
    const colunas = [
        // PLACEHOLDER
        // { key: 'nome', label: 'Nome' },
        // { key: 'descricao', label: 'Descrição' }

        //https://jsonplaceholder.typicode.com
        // { key: 'userId', label: 'UserId' },
        // { key: 'id', label: 'Id' },
        // { key: 'title', label: 'title' },
        // { key: 'completed', label: 'completed' }

        { key: 'descricao', label: 'Descricao' },
        { key: 'observacao', label: 'Observação' }
    ];

    useEffect(() => {
        Api.get("/TipoEquipamento/listagem").then(data => {
            setTipoEquipamentos(data);
        });
    }, []);

  return (
    <div>
        <p className='text-center fs-3'>
            TIPO DE EQUIPAMENTO
        </p>

        <Tabela 
            dadosBase={TipoEquipamentos}
            setDadosBase={setTipoEquipamentos}
            colunas={colunas}
            titulo_cadastro={"Cadastro de Tipo de Equipamento"}
        />
    </div>
  )
}
