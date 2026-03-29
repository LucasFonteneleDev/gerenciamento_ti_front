import { useState } from "react";

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // login fake (exemplo)
    if (usuario && senha) {
      onLogin({ usuario });
    } else {
      alert("Preencha usuário e senha");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h4 className="text-center mb-4">Login</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Usuário</label>
            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button type="submit" className="btn w-100 text-light" 
                    style={{ backgroundColor: "#00f9aa"}}>
            <strong>Entrar</strong>
          </button>
        </form>
      </div>
    </div>
  );
}
