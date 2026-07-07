import React, { useState } from 'react'
import Tabela from '../components/gerais/tabela';
import {schema_cadastro, schema_tabela} from "../schemas/equipamentosSchema.jsx";

export default function Equipamentos() {

  return (
    <div>
        <p className='text-center fs-3'>
            EQUIPAMENTOS
        </p>

        <Tabela 
                schema_tabela={schema_tabela}
                schema_cadastro={schema_cadastro}
                titulo_cadastro={"Cadastro de Equipamento"}
                nomeController={"/Equipamento"}
                />
    </div>
  )
}
