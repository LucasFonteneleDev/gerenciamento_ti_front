import tipoInput from "../enum/tipoInput";

export const schema_tabela = [
    {key: "tipoEquipamentoIdDescricao", label: "Tipo"},
    {key: "numero_Serie", label: "N° de Série"},
    {key: "empresaIdNome_Loja", label: "Loja"},
    {key: "funcionarioIdNome", label: "Responsável"}
];

export const schema_cadastro = [
    {key: "numero_Serie", label: "N° de Série"},

    { key: 'tipoEquipamentoId', label: '',id_de_nome: "tipoEquipamentoIdDescricao"},
    {key: "tipoEquipamentoIdDescricao", label: "Tipo",
        propriedade_alvo:"tipoEquipamentoId",
        tipo: tipoInput.SELECAO,
        colunaLabel: "descricao",
        tituloPesquisa: "Tipo do Equipamento",
        id_schema_pesquisa: "pesquisaTipoEquipamento",
        controller: "TipoEquipamento"
    },

    { key: 'empresaId', label: '',id_de_nome: "empresaIdNome_Loja"},
    {key: "empresaIdNome_Loja", label: "Loja",
        propriedade_alvo:"empresaId",
        tipo: tipoInput.SELECAO,
        colunaLabel: "nome_Loja",
        tituloPesquisa: "Estabelecimento onde se encontra",
        id_schema_pesquisa: "pesquisaEmpresa",
        controller: "Empresa"
    },

    { key: 'funcionarioId', label: '',id_de_nome: "funcionarioIdNome"},
    {key: "funcionarioIdNome", label: "Responsável",
        propriedade_alvo:"funcionarioId",
        tipo: tipoInput.SELECAO,
        colunaLabel: "nome",
        tituloPesquisa: "Responsável por Equipamento",
        id_schema_pesquisa: "pesquisaFuncionario",//todo: documentar o funcionamento
        controller: "Funcionario"
    }

];