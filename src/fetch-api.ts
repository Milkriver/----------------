import { Product } from './product';

interface IProductResponse {
    id_product: number; 
    product_name: string; 
    price: number;
}

const api = 'https://raw.githubusercontent.com/BruTyler/online-api/master/responses/catalogData.json';
export function getCatalogItems() {
    return fetch(api)
        .then(resp => resp.json())
        .then(items => (items as IProductResponse[]).map(x => new Product(x.id_product, x.product_name, x.price)))
}
