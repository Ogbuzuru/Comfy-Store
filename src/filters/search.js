import { getElement } from '../utils.js';
import display from '../displayProducts.js';


const setupSearch = (store) => {
    const form = getElement('.input-form');
    const nameInput = getElement('.search-input');
    form.addEventListener('keyup', function () {
        const value = nameInput.value;
        // if and else her will help to display full products incase you don't have the value search and you clear the search area
        if (value) {
            const newStore = store.filter((product)=>{
                let {name} = product
               name = name.toLowerCase();
               if (name.includes(value)) {
                return product
               }
            });
          display(newStore,getElement('.products-container'),true);
          if (newStore.length < 1) {
            const products = getElement('.products-container');
            products.innerHTML = `<h3 class="filter-error">Sorry no products matched your search</h3>`
          }
        }else{
            display(store,getElement('.products-container'),true)
        }
    })
};

export default setupSearch;