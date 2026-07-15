import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "http://192.168.1.123:7225/api",
      // baseURL: "https://jsonplaceholder.typicode.com",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Adiciona o JWT automaticamente
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Trata respostas de erro
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        const isLoginRequest =
          error.config?.url?.includes("/Login/login");

        if (
          error.response?.status === 401 &&
          !isLoginRequest
        ) {
          localStorage.removeItem("token");
          window.location.href = "/gerenciamento_ti_front/login";
        }
        else if (isLoginRequest) {
          alert(JSON.stringify(error ));
        }

        return Promise.reject(error);
      }
    );
  
  }

  get(url, config = {}) {
    return this.api.get(url, config).then(response => response.data);
  }

  post(url, data, config = {}) {
    return this.api.post(url, data, config).then(response => response.data);
  }

  put(url, data, config = {}) {
    return this.api.put(url, data, config).then(response => response.data);
  }

  delete(url, config = {}) {
    return this.api.delete(url, config).then(response => response.data);
  }
}

export default new Api();