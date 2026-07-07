import React, { useState } from 'react'
import Tabela from '../components/gerais/tabela';
import tipoInput from "../../src/enum/tipoInput.jsx";
import {schema_cadastro, schema_tabela} from "../schemas/usuarioSchema.jsx";

export default function Usuarios() {

  return (
    <div>
      <p className='text-center fs-3'>
        USUÁRIOS
      </p>

      <Tabela 
        schema_tabela={schema_tabela}
        schema_cadastro={schema_cadastro}
        titulo_cadastro={"Cadastro de Usuário"}
        nomeController={"/Usuario"}
        />
    </div>
  )
}
