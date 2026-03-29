import Tabela from '../components/gerais/tabela'
import { useState } from 'react';

export default function Empresas() {
  const [empresas, setEmpresas] = useState([
    {id: 0, nome: "Marli Alimentos ME", cnpj: "48.728.650/0001-84", responsavel: "Marli", contato: "(85) 92836-0779"},
    {id: 1, nome: "Bento Publicidade e Propaganda ME", cnpj: "62.036.085/0001-15", responsavel: "Bento", contato: "(85) 98428-7330"}]);

  const colunas = [
    { key: 'nome', label: 'Loja' },
    { key: 'cnpj', label: 'CNPJ' },
    { key: 'responsavel', label: 'Responsável' },
    { key: 'contato', label: 'Contato' }
  ];

  return (
    <div>
      <p className='text-center fs-3'>
        EMPRESAS
      </p>

      <Tabela 
          dadosBase={empresas}
          setDadosBase={setEmpresas}
          colunas={colunas}
          titulo_cadastro={"Cadastro de Empresa"}
          />
      
    </div>
  )
}