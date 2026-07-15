const schema_pesquisa = {
    "pesquisaFuncionario": [
        { key: 'nome', label: 'Nome' },
        { key: 'email', label: 'E-mail' },
        { key: 'contato', label: 'Contato' }
    ],
    "pesquisaTipoEquipamento": [
        { key: 'descricao', label: 'Descricao' },
        { key: 'observacao', label: 'Observação' }
    ],
    "pesquisaEmpresa":[
        { key: 'nome_Loja', label: 'Loja' },
        { key: 'cnpj', label: 'CNPJ' },
        { key: 'funcionarioIdNome', label: 'Responsável'}
    ]
}

export default schema_pesquisa;