import React, { useState } from 'react'
import Tabela from '../components/gerais/tabela';

export default function Equipamentos() {

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
                colunas={colunas}
                titulo_cadastro={"Cadastro de Equipamento"}
                nomeController={"/Equipamento"}
                />
    </div>
  )
}
