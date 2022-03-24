/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartWrapper\": () => (/* binding */ cartWrapper),\n/* harmony export */   \"catalogWrapper\": () => (/* binding */ catalogWrapper)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/cart.ts\");\n/* harmony import */ var _fetch_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-api */ \"./src/fetch-api.ts\");\n\r\n\r\nvar catalogWrapper = document.querySelector('#catalog');\r\ncatalogWrapper.insertAdjacentHTML('afterbegin', '<h2>Каталог</h2>');\r\nvar catalogHeader = catalogWrapper.querySelector('h2');\r\ncatalogHeader.className = 'catalog catalogHeader';\r\nvar data;\r\n(0,_fetch_api__WEBPACK_IMPORTED_MODULE_1__.getCatalogItems)()\r\n    .then(function (items) {\r\n    data = items;\r\n    var handler = function (element) {\r\n        cartDiv2.innerHTML = '';\r\n        cart.clearCart();\r\n        cart.quantityCounter(element);\r\n        cart.totalPriceCounter();\r\n        cart.line.forEach(function (item) {\r\n            cart.render(item);\r\n        });\r\n    };\r\n    data.forEach(function (x) {\r\n        x.setClickHandler(handler);\r\n        x.render();\r\n    });\r\n});\r\nvar cartWrapper = document.querySelector('#cart');\r\ncartWrapper.insertAdjacentHTML('afterbegin', '<h2 id=cartDiv>Корзина</h2>');\r\nvar cart = new _cart__WEBPACK_IMPORTED_MODULE_0__.Cart();\r\nvar cartDiv2 = document.createElement('div');\r\ncartDiv2.innerHTML = 'Нет товаров';\r\ncartWrapper.appendChild(cartDiv2);\r\n\n\n//# sourceURL=webpack://shop/./src/app.ts?");

/***/ }),

/***/ "./src/cart.ts":
/*!*********************!*\
  !*** ./src/cart.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cart\": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n\r\nvar Cart = /** @class */ (function () {\r\n    function Cart() {\r\n        this.line = [];\r\n    }\r\n    Cart.prototype.clearCart = function () {\r\n        var deleteElement = _app__WEBPACK_IMPORTED_MODULE_0__.cartWrapper.querySelectorAll('div');\r\n        for (var i = 0; i < deleteElement.length; i++) {\r\n            deleteElement[i].remove();\r\n        }\r\n    };\r\n    Cart.prototype.addItem = function (elementLine) {\r\n        var newCartLine = {\r\n            item: elementLine,\r\n            quantity: 1\r\n        };\r\n        this.line.push(newCartLine);\r\n    };\r\n    Cart.prototype.render = function (newCartLine) {\r\n        var name = document.createElement('div');\r\n        var price = document.createElement('div');\r\n        var quantity = document.createElement('div');\r\n        var totalPriceDiv = document.createElement('div');\r\n        var totalPrice = newCartLine.quantity * newCartLine.item.price;\r\n        name.innerHTML = 'Наименование: ' + newCartLine.item.productName;\r\n        price.innerHTML = 'Стоимость: ' + newCartLine.item.price + ' руб.';\r\n        quantity.innerHTML = 'Количество: ' + newCartLine.quantity.toString();\r\n        totalPriceDiv.innerHTML = 'Сумма: ' + totalPrice + ' руб.';\r\n        name.className = 'cart cartItemName';\r\n        price.className = 'cart cartItemPrice';\r\n        quantity.className = 'cart cartItemQuantity';\r\n        totalPriceDiv.className = 'cart cartItemTotalPrice';\r\n        _app__WEBPACK_IMPORTED_MODULE_0__.cartWrapper.appendChild(name);\r\n        _app__WEBPACK_IMPORTED_MODULE_0__.cartWrapper.appendChild(price);\r\n        _app__WEBPACK_IMPORTED_MODULE_0__.cartWrapper.appendChild(quantity);\r\n        _app__WEBPACK_IMPORTED_MODULE_0__.cartWrapper.appendChild(totalPriceDiv);\r\n    };\r\n    Cart.prototype.quantityCounter = function (element) {\r\n        var findedItem = this.line.find(function (x) { return x.item.productId == element.productId; });\r\n        if (findedItem) {\r\n            findedItem.quantity++;\r\n        }\r\n        else {\r\n            this.addItem(element);\r\n        }\r\n    };\r\n    Cart.prototype.totalPriceCounter = function () {\r\n        var cartTotalPrice = 0;\r\n        this.line.forEach(function (x) {\r\n            var a = x.item.price * x.quantity;\r\n            cartTotalPrice = cartTotalPrice + a;\r\n            return cartTotalPrice;\r\n        });\r\n        var cartTotalPriceDiv = document.createElement('div');\r\n        cartTotalPriceDiv.innerHTML = 'Общая стоимость корзины: ' + cartTotalPrice + ' руб.';\r\n        cartTotalPriceDiv.className = 'cart cartTotalPriceDiv';\r\n        _app__WEBPACK_IMPORTED_MODULE_0__.cartWrapper.appendChild(cartTotalPriceDiv);\r\n    };\r\n    return Cart;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://shop/./src/cart.ts?");

/***/ }),

/***/ "./src/fetch-api.ts":
/*!**************************!*\
  !*** ./src/fetch-api.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCatalogItems\": () => (/* binding */ getCatalogItems)\n/* harmony export */ });\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/product.ts\");\n\r\nvar api = 'https://raw.githubusercontent.com/BruTyler/online-api/master/responses/catalogData.json';\r\nfunction getCatalogItems() {\r\n    return fetch(api)\r\n        .then(function (resp) { return resp.json(); })\r\n        .then(function (items) { return items.map(function (x) { return new _product__WEBPACK_IMPORTED_MODULE_0__.Product(x.id_product, x.product_name, x.price); }); });\r\n}\r\n\n\n//# sourceURL=webpack://shop/./src/fetch-api.ts?");

/***/ }),

/***/ "./src/product.ts":
/*!************************!*\
  !*** ./src/product.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n\r\nvar Product = /** @class */ (function () {\r\n    function Product(productId, productName, price) {\r\n        this.productId = productId;\r\n        this.productName = productName;\r\n        this.price = price;\r\n    }\r\n    Product.prototype.render = function () {\r\n        var _this = this;\r\n        var newDiv = document.createElement('div');\r\n        var name = document.createElement('div');\r\n        var price = document.createElement('div');\r\n        var button = document.createElement('button');\r\n        name.innerHTML = 'Наименование: ' + this.productName;\r\n        price.innerHTML = 'Стоимость: ' + this.price.toString() + ' руб.';\r\n        button.innerHTML = 'Добавить в корзину';\r\n        name.className = 'product productName';\r\n        price.className = 'product productPrice';\r\n        button.className = 'product productButton';\r\n        newDiv.appendChild(name);\r\n        newDiv.appendChild(price);\r\n        newDiv.appendChild(button);\r\n        _app__WEBPACK_IMPORTED_MODULE_0__.catalogWrapper.appendChild(newDiv);\r\n        if (this.handler !== undefined) {\r\n            button.addEventListener('click', function () { return _this.handler(_this); });\r\n        }\r\n    };\r\n    Product.prototype.setClickHandler = function (clickHandler) {\r\n        this.handler = clickHandler;\r\n    };\r\n    return Product;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://shop/./src/product.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;