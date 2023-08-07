import { urls } from "@/utils/urls";
import axios from "axios";

export async function GetProdutos() {
  return axios
    .get(urls.getProdutos)
    .then((result) => result.data)
    .catch((error) => error);
}
