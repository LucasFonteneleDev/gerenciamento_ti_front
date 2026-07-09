import tipoInput from '../../src/enum/tipoInput';

export const schema_tabela = [
  { key: 'nome_Loja', label: 'Loja' },
  { key: 'cnpj', label: 'CNPJ' },
  { key: 'funcionarioIdNome', label: 'Responsável'},
];

export const schema_cadastro = [
  { key: 'nome_Loja', label: 'Loja' },
  { key: 'cnpj', label: 'CNPJ' },
  { key: 'funcionarioId', label: 'Responsável',id_de_nome: "funcionarioIdNome"},

  { key: 'funcionarioIdNome', label: 'Responsável', 
    propriedade_alvo: "funcionarioId",
    tipo: tipoInput.SELECAO,
    colunaLabel: "nome",
    tituloPesquisa: "Responsável de Loja",
    id_schema_pesquisa: "pesquisaFuncionario",
    controller: "funcionario"
  },
];