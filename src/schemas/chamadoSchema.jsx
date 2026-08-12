import tipoInput from "../enum/tipoInput"; "../enum/tipoInput.jsx"

// export const schema_tabela = [
//     { key: 'nome', label: 'Nome' },
//     { key: 'email', label: 'E-mail' },
//   ];

export const schema_cadastro = [
    { key: 'solucao', label: 'Solução' },
    { key: 'inicio', label: 'Início', tipo: tipoInput.DATA},
    { key: 'fim', label: 'Fim', tipo: tipoInput.DATA},
    { key: 'assunto', label: 'Assunto'},
  ];