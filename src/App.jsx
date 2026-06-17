import { HashRouter, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/gerais/navbar";
import Login from "./pages/login";
import Home from "./pages/home";
import Empresas from "./pages/empresas";
import Funcionario from "./pages/funcionario";
import Usuarios from "./pages/usuarios";
import Equipamentos from "./pages/equipamentos";
import TipoEquipamento from "./pages/tipoEquipamento";

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <HashRouter>

      <div className="container">
        {usuarioLogado && <Navbar />}
        <Routes>
          <Route
            path="/login"
            element={
              usuarioLogado ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={setUsuarioLogado} />
              )
            }
          />

          <Route
            path="/"
            element={
              usuarioLogado ? <Home /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/empresas"
            element={
              usuarioLogado ? <Empresas /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/funcionarios"
            element={
              usuarioLogado ? <Funcionario /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/usuarios"
            element={
              usuarioLogado ? <Usuarios /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/equipamentos"
            element={
              usuarioLogado ? <Equipamentos /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/tipo-equipamentos"
            element={
              usuarioLogado ? <TipoEquipamento /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
