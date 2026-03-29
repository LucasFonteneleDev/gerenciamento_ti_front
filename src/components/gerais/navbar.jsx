import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/empresas">Empresas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/funcionarios">Funcionários</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usuarios">Usuários</Link>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Equipamentos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li >
                    <Link className="dropdown-item" 
                          to="/equipamentos">Cadastro de Equipamentos</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item"
                          to="/tipo-equipamentos">Tipo Equipamento</Link>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ backgroundColor: "#00f9aa", height: "7px" }} />
    </>
  );
}
