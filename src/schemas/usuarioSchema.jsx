import tipoInput from "../enum/tipoInput"; "../enum/tipoInput.jsx"

export const schema_tabela = [
    { key: 'nome', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
  ];

export const schema_cadastro = [
    { key: 'nome', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
    { key: 'senha', label: 'Senha', tipo: tipoInput.SENHA}
  ];