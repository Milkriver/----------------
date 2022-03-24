import { Cart, ICartItem } from "./cart";
import { getCatalogItems } from "./fetch-api";
import { IProduct } from "./product";
export let catalogWrapper = document.querySelector('#catalog');
catalogWrapper.insertAdjacentHTML('afterbegin', '<h2>Каталог</h2>');
let catalogHeader = catalogWrapper.querySelector('h2');
catalogHeader.className = 'catalog catalogHeader';
let data: IProduct[];
getCatalogItems()
    .then(items => {
        data = items
        const handler = (element: IProduct) => {
            cartDiv2.innerHTML = '';
            cart.clearCart();
            cart.quantityCounter(element);
            cart.totalPriceCounter();
            cart.line.forEach((item: ICartItem) => {
                cart.render(item);
            });
        }
        data.forEach(x => {
            x.setClickHandler(handler)
            x.render()
        })
    })

export let cartWrapper = document.querySelector('#cart');
cartWrapper.insertAdjacentHTML('afterbegin', '<h2 id=cartDiv>Корзина</h2>');

let cart = new Cart();
let cartDiv2 = document.createElement('div');
cartDiv2.innerHTML = 'Нет товаров';
cartWrapper.appendChild(cartDiv2);
