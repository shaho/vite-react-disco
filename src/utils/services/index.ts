import axios, { AxiosResponse } from "axios";

export function getTodos(): Promise<AxiosResponse<any>> {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`);
}
