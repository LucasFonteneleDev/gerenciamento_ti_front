import Tabela from '../components/gerais/tabela';

export default function TipoEquipamento() {
    const colunas = [
        { key: 'descricao', label: 'Descricao' },
        { key: 'observacao', label: 'Observação' }
    ];

  return (
    <div>
        <p className='text-center fs-3'>
            TIPO DE EQUIPAMENTO
        </p>

        <Tabela
            colunas={colunas}
            titulo_cadastro={"Cadastro de Tipo de Equipamento"}
            nomeController={"/TipoEquipamento"}
        />
    </div>
  )
}
