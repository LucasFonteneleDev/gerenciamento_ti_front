import React, { useState } from 'react'
import Tabela from '../components/gerais/tabela';

export default function Usuarios() {

  const [Usuarios, setUsuarios] = useState([
    {id: 0, nome: "Lucas", id_funcionario: 0, ativo: true, senha: "123"},
    {id: 1, nome: "Julia", id_funcionario: 1, ativo: false, senha: "123"}
  ]);

  const colunas = [
    { key: 'nome', label: 'Nome' },
    { key: 'id_funcionario', label: 'Funcionario' },
    { key: 'ativo', label: 'Ativo' }
  ];

  return (
    <div>
      <p className='text-center fs-3'>
        USUÁRIOS
      </p>

      <Tabela 
        dadosBase={Usuarios}
        setDadosBase={setUsuarios}
        colunas={colunas}
        titulo_cadastro={"Cadastro de Usuário"}
        />
    </div>
  )
}
