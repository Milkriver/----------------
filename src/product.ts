import { catalogWrapper } from "./app"

export interface IProduct {
    productId: number
    productName: string
    price: number
    render: () => void
    setClickHandler: (clickHandler?: (element: IProduct) => void) => void
}

export class Product implements IProduct {
    productId: number;
    productName: string;
    price: number
    handler: (element: IProduct) => void;
    constructor(productId: number, productName: string, price: number) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    render() {
        let newDiv = document.createElement('div');
        let name = document.createElement('div');
        let price = document.createElement('div');
        let button = document.createElement('button');
        name.innerHTML = 'Наименование: ' + this.productName;
        price.innerHTML = 'Стоимость: ' + this.price.toString()+ ' руб.';
        button.innerHTML = 'Добавить в корзину';
        name.className = 'product productName';
        price.className = 'product productPrice';
        button.className = 'product productButton';
        newDiv.appendChild(name);
        newDiv.appendChild(price);
        newDiv.appendChild(button);
        catalogWrapper.appendChild(newDiv);
        if(this.handler !== undefined) {
            button.addEventListener('click', () => this.handler(this))
        }
    }

    setClickHandler(clickHandler?: (element: IProduct) => void){
        this.handler = clickHandler;
    }
}
