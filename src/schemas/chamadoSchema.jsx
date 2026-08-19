import tipoInput from "../enum/tipoInput"; "../enum/tipoInput.jsx"

// export const schema_tabela = [
//     { key: 'nome', label: 'Nome' },
//     { key: 'email', label: 'E-mail' },
//   ];

//todo: ajustar/criar tela de finalização de chamado
export const schema_cadastro = [
  { key: 'assunto', label: 'Assunto', Obrigatorio: true },
];

export const schema_cadastro_update = [
  { key: 'solucao', label: 'Solução' },
  { key: 'inicio', label: 'Início', tipo: tipoInput.DATA, Obrigatorio: true },
  { key: 'fim', label: 'Fim', tipo: tipoInput.DATA },
  { key: 'assunto', label: 'Assunto', Obrigatorio: true },
];