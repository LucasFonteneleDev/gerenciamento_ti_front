import React, { useState } from 'react'
import Tabela from '../components/gerais/tabela';

export default function Equipamentos() {

const [Equipamentos, setEquipamentos] = useState([
        {id:0, tipo: "notebook", numero_serie: "123@123", loja: "loja", responsavel: "responsavel"},
        {id:1, tipo: "celular", numero_serie: "123@123", loja: "loja", responsavel: "responsavel"}
    ]);

const colunas = [
    {key: "tipo", label: "Tipo"},
    {key: "numero_serie", label: "N° de Série"},
    {key: "loja", label: "Loja"},
    {key: "responsavel", label: "Responsável"}
];

  return (
    <div>
        <p className='text-center fs-3'>
            EQUIPAMENTOS
        </p>

        <Tabela 
                dadosBase={Equipamentos}
                setDadosBase={setEquipamentos}
                colunas={colunas}
                titulo_cadastro={"Cadastro de Equipamento"}
                />
    </div>
  )
}
