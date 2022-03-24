import { cartWrapper } from "./app";
import { IProduct } from "./product";
export interface ICartItem {
    item: IProduct,
    quantity: number
}

export class Cart {
    line: ICartItem[];
    constructor() {
        this.line = [];
    }
    clearCart() {
        let deleteElement = cartWrapper.querySelectorAll('div');
        for (let i = 0; i < deleteElement.length; i++) {
            deleteElement[i].remove();
        }
    }

    addItem(elementLine: IProduct) {
        const newCartLine = {
            item: elementLine,
            quantity: 1
        };
        this.line.push(newCartLine);
    }
    render(newCartLine: ICartItem) {
        let name = document.createElement('div');
        let price = document.createElement('div');
        let quantity = document.createElement('div');
        let totalPriceDiv = document.createElement('div');
        let totalPrice = newCartLine.quantity * newCartLine.item.price;
        name.innerHTML = 'Наименование: ' + newCartLine.item.productName;
        price.innerHTML = 'Стоимость: ' + newCartLine.item.price + ' руб.';
        quantity.innerHTML = 'Количество: ' + newCartLine.quantity.toString();
        totalPriceDiv.innerHTML = 'Сумма: ' + totalPrice + ' руб.';
        name.className = 'cart cartItemName';
        price.className = 'cart cartItemPrice';
        quantity.className = 'cart cartItemQuantity';
        totalPriceDiv.className = 'cart cartItemTotalPrice';
        cartWrapper.appendChild(name);
        cartWrapper.appendChild(price);
        cartWrapper.appendChild(quantity);
        cartWrapper.appendChild(totalPriceDiv);
    }
    quantityCounter(element: IProduct) {
        let findedItem = this.line.find(x => x.item.productId == element.productId)
        if (findedItem) {
            findedItem.quantity++;
        } else {
            this.addItem(element);
        }
    }
    totalPriceCounter() {
        let cartTotalPrice = 0;
        this.line.forEach(x => {
            let a = x.item.price * x.quantity;
            cartTotalPrice = cartTotalPrice + a;
            return cartTotalPrice;
        });
        let cartTotalPriceDiv = document.createElement('div');
        cartTotalPriceDiv.innerHTML = 'Общая стоимость корзины: ' + cartTotalPrice + ' руб.';
        cartTotalPriceDiv.className = 'cart cartTotalPriceDiv';
        cartWrapper.appendChild(cartTotalPriceDiv);
    }
}
