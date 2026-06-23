import Tabela from '../components/gerais/tabela';
import tipoInput from '../../src/enum/tipoInput';
import React, { useState } from 'react'

export default function Funcionario() {

    const colunas = [
      { key: 'email', label: 'E-mail' },
      { key: 'nome', label: 'Nome' },
      { key: 'contato', label: 'Contato'},
      { key: 'senha', label: 'Senha'},
      { key: 'usuario_Ativo', label: 'Ativo', tipo: tipoInput.BOOLEANO},
      { key: 'esta_Ativo_Plataforma', label: 'Ativo na Plataforma', tipo: tipoInput.BOOLEANO},
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
