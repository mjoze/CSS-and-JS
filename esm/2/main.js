import {
    showInConsole,
    showInDOM
} from "./js/components/show.js";
import product from './js/components/product.js'


showInConsole(product.name);
showInDOM(product.name, 'h1');
showInDOM(product.price, 'h2')
showInDOM(product.age, 'h3')
showInDOM('info2', 'p');