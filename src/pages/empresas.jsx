import Tabela from '../components/gerais/tabela'
import { useState } from 'react';
import tipoInput from '../../src/enum/tipoInput';

export default function Empresas() {
  const colunas = [
    { key: 'nome_Loja', label: 'Loja' },
    { key: 'cnpj', label: 'CNPJ' },
    { key: 'funcionarioId', label: 'Responsável',//todo: trazer nome do funcionário na tabela 
                                                //necessário manipular o endpoint de listagem e trazer o nome, cadastra-lo aqui.
                                                //necessário configurar campos não apresentáveis
                                                //CONCLUSÃO: Amadurecer o framework de front bound by backend
        tipo: tipoInput.SELECAO, displayPath: "funcionario.nome",
        tituloPesquisa: "Funcionário Responsável", controller: "funcionario"},
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