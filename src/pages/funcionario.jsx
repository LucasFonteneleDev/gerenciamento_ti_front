import Tabela from '../components/gerais/tabela';

import React, { useState } from 'react'

export default function Funcionario() {

  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: "Bárbara Ayla", email: "barbara_ayla_moraes@oul.com.br", contato: "(85) 92836-0779" },
    { id: 2, nome: "José Erick Sales", email: "jose-sales87@sicredi.com.br", contato: "(85) 98428-7330" }
    ]);

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
                dadosBase={funcionarios}
                setDadosBase={setFuncionarios}
                colunas={colunas}
                titulo_cadastro={"Cadastro de Funcionário"}
                />

    </div>
  )
}
