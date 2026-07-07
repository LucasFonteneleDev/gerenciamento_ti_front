import Tabela from '../components/gerais/tabela';
import tipoInput from '../../src/enum/tipoInput';
import React, { useState } from 'react'
import {schema_cadastro, schema_tabela} from "../schemas/funcionarioSchema.jsx";

export default function Funcionario() {

  return (
    <div>
      <p className='text-center fs-3'>
        FUNCIONÁRIOS
      </p>

      <Tabela 
                schema_tabela={schema_tabela}
                schema_cadastro={schema_cadastro}
                titulo_cadastro={"Cadastro de Funcionário"}
                nomeController={"/Funcionario"}
                />

    </div>
  )
}
