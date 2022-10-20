import { Pagination } from "../types/Pagination";
import { Product, ProductCollection } from "../types/Product";

const BASE_URL = "https://dummyjson.com/products";

export const fetchAll = async (pagination?: Pagination): Promise<ProductCollection> => {
  let url = BASE_URL;
  let queryParams = '';

  if (pagination?.q) {
    url += `/search`;
  }

  if(pagination){
    queryParams = Object.keys(pagination).map(key => key + '=' + pagination[key as keyof Pagination]).join('&');
  }

  const response = await fetch(`${url}?${queryParams}`);
  const json = (await response.json()) as ProductCollection;

  return json;
};

export const fetchById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const json = (await response.json()) as Product;

  return json;
}
