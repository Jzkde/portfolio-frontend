export const Db = {

 // baseApi: "http://localhost:8081",
  baseApi:'https://port-back-c0ij.onrender.com',

  finalApi() {
    return `${this.baseApi}/api/`;
  }
};
