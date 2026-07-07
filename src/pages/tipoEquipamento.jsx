import Tabela from '../components/gerais/tabela';
import {schema_cadastro, schema_tabela} from "../schemas/tipoEquipamentoSchema.jsx";

export default function TipoEquipamento() {

  return (
    <div>
        <p className='text-center fs-3'>
            TIPO DE EQUIPAMENTO
        </p>

        <Tabela
            schema_tabela={schema_tabela}
            schema_cadastro={schema_cadastro}
            titulo_cadastro={"Cadastro de Tipo de Equipamento"}
            nomeController={"/TipoEquipamento"}
        />
    </div>
  )
}
