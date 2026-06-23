import React, { useState } from 'react'
import Tabela from '../components/gerais/tabela';
import tipoInput from "../../src/enum/tipoInput.jsx";

export default function Usuarios() {
  const colunas = [
    { key: 'nome', label: 'Nome' },
    { key: 'id_funcionario', label: 'Funcionario' },
    { key: 'id_funcionario', label: 'Funcionario' },
    { key: 'ativo', label: 'Ativo', tipo: tipoInput.BOOLEANO}
  ];

  return (
    <div>
      <p className='text-center fs-3'>
        USUÁRIOS
      </p>

      <Tabela 
        colunas={colunas}
        titulo_cadastro={"Cadastro de Usuário"}
        nomeController={"/Usuario"}
        />
    </div>
  )
}
