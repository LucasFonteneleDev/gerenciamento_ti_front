import tipoInput from "../enum/tipoInput"; "../enum/tipoInput.jsx"

export const schema_tabela = [
      { key: 'email', label: 'E-mail' },
      { key: 'nome', label: 'Nome' },
      { key: 'contato', label: 'Contato'},
      { key: 'senha', label: 'Senha'},
      { key: 'usuario_Ativo', label: 'Ativo', tipo: tipoInput.BOOLEANO},
      { key: 'esta_Ativo_Plataforma', label: 'Ativo na Plataforma', tipo: tipoInput.BOOLEANO},
  ];

export const schema_cadastro = [
      { key: 'email', label: 'E-mail' },
      { key: 'nome', label: 'Nome' },
      { key: 'contato', label: 'Contato'},
      { key: 'senha', label: 'Senha'},
      { key: 'usuario_Ativo', label: 'Ativo', tipo: tipoInput.BOOLEANO},
      { key: 'esta_Ativo_Plataforma', label: 'Ativo na Plataforma', tipo: tipoInput.BOOLEANO},
  ];