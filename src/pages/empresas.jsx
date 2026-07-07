import Tabela from '../components/gerais/tabela'
import { useState } from 'react';
import {schema_cadastro, schema_tabela} from "../schemas/empresasSchema.jsx";

export default function Empresas() {
  return (
    <div>
      <p className='text-center fs-3'>
        EMPRESAS
      </p>

      <Tabela 
          schema_tabela={schema_tabela}
          schema_cadastro={schema_cadastro}
          titulo_cadastro={"Cadastro de Empresa"}
          nomeController={"/Empresa"}
          />
      
    </div>
  )
}