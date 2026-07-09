import tipoInput from "../enum/tipoInput";

export const schema_tabela = [
    {key: "tipo", label: "Tipo"},
    {key: "numero_serie", label: "N° de Série"},
    {key: "loja", label: "Loja"},
    {key: "responsavel", label: "Responsável"}
];

export const schema_cadastro = [
    {key: "tipo", label: "Tipo"},
    {key: "numero_serie", label: "N° de Série"},

    {key: "loja", label: "Loja"

    },

    {key: "responsavel", label: "Responsável",
        propriedadeAlvo:"",
        tipo: tipoInput.SELECAO,
        colunaLabel: "descricao",
        tituloPesquisa: "Responsável por Equipamento",
        id_schema_pesquisa: "pesquisaTipoEquipamento",
        controller: "tipoEquipamento"
    }

];