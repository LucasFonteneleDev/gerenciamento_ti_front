import Tabela from '../components/gerais/tabela';

import React, { useState } from 'react'

export default function Funcionario() {

    const colunas = [
    { key: 'nome', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
    { key: 'contato', label: 'Contato' }
  ];

  return (
    <div>
      <p className='text-center fs-3'>
        FUNCIONÁRIOS
      </p>

      <Tabela 
                colunas={colunas}
                titulo_cadastro={"Cadastro de Funcionário"}
                nomeController={"/Funcionario"}
                />

    </div>
  )
}
