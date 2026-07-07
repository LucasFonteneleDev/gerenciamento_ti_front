import tipoInput from '../../src/enum/tipoInput';

export const schema_tabela = [
    { key: 'nome_Loja', label: 'Loja' },
    { key: 'cnpj', label: 'CNPJ' },
    { key: 'funcionarioId', label: 'Responsável'},
  ];

export const schema_cadastro = [
{ key: 'nome_Loja', label: 'Loja' },
{ key: 'cnpj', label: 'CNPJ' },
{ key: 'funcionarioId', label: 'Responsável',//todo: trazer nome do funcionário na tabela 
                                            //necessário manipular o endpoint de listagem e trazer o nome, cadastra-lo aqui.
                                            //necessário configurar campos não apresentáveis
                                            //CONCLUSÃO: Amadurecer o framework de front bound by backend
    tipo: tipoInput.SELECAO, displayPath: "funcionario.nome",
    tituloPesquisa: "Funcionário Responsável", controller: "funcionario"},
];