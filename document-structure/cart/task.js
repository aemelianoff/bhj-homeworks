const cartProducts = document.querySelector('.cart__products');
class addToCart {
    constructor(container) {
    this.container = container;
    this.Quantity = container.querySelector('.product__quantity-value');
    this.quantityDec = container.querySelector('.product__quantity-control.product__quantity-control_dec');
    this.quantityInc = container.querySelector('.product__quantity-control.product__quantity-control_inc');
    this.productImage = container.querySelector('.product__image');
    this.add = container.querySelector('.product__add');
    this.count = this.Quantity.textContent;

    this.registerEvents();
}

    registerEvents() {
        this.add.addEventListener( 'click', e => {    
            e.preventDefault();  
        const id = e.target.closest('.product').getAttribute('data-id');
        let cartProduct = cartProducts.querySelectorAll('.cart__product');
        for (let product of Array.from(cartProduct)) {
            if (product.dataset.id === id) {
                let addToCart = parseInt(this.Quantity.textContent) + parseInt(product.children[1].textContent);
                product.children[1].innerText = addToCart;
                return false;
            }
        }
        cartProducts.insertAdjacentHTML('beforeEnd', `<div class='cart__product' data-id='${id}'>
                                        <img class='cart__product-image' src='${this.productImage.src}'>
                                        <div class='cart__product-count'>${this.Quantity.textContent}</div>
                                        </div>`);
        });

        this.quantityDec.addEventListener( 'click', () => {
            if (this.count > 1) {
                this.count--;
                this.Quantity.textContent = this.count;
            }
        })

        this.quantityInc.addEventListener( 'click', () => {
                this.count++;
                this.Quantity.textContent = this.count;
            });
        

    }

}
for (item of document.querySelectorAll('.product'))
new addToCart (item);