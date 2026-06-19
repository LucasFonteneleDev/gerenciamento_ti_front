import Tabela from '../components/gerais/tabela'
import { useState } from 'react';
import tipoInput from '/src/enum/tipoInput';

export default function Empresas() {
  const colunas = [
    { key: 'nome', label: 'Loja' },
    { key: 'cnpj', label: 'CNPJ' },
    { key: 'responsavel', label: 'Responsável', tipo: tipoInput.SELECAO},
    { key: 'contato', label: 'Contato' }
  ];

  return (
    <div>
      <p className='text-center fs-3'>
        EMPRESAS
      </p>

      <Tabela 
          colunas={colunas}
          titulo_cadastro={"Cadastro de Empresa"}
          nomeController={"/Empresa"}
          />
      
    </div>
  )
}