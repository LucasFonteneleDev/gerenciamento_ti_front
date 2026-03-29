import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5252/api",
      // baseURL: "https://jsonplaceholder.typicode.com",
      headers: {
        "Content-Type": "application/json",
      },
    });
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