const cartProducts = document.querySelector('.cart__products');
class addToCart {
    constructor( container ) {
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
        console.log(e.target.closest('.product').getAttribute('data-id'))   
        const id = e.target.closest('.product').getAttribute('data-id');
                    const cartProduct = cartProducts.querySelectorAll('.cart__product');

        if (document.querySelector('.cart__product')) {
           
            for (let product of Array.from(cartProduct)) {
                
                console.log(Array.from(cartProduct));
                    if (id != product.getAttribute('data-id')) {
                         console.log(product)
                    cartProducts.insertAdjacentHTML('beforeEnd', `<div class='cart__product' data-id='${id}'>
			 							            <img class='cart__product-image' src='${this.productImage.src}'>
			 							            <div class='cart__product-count'>${this.Quantity.textContent}</div>
										            </div>`);
                }
                else if (id == product.getAttribute('data-id')) {
                     console.log(product);
                    let addToCart = parseInt(this.Quantity.textContent) + parseInt(product.children[1].textContent);
                     
                   // console.log(addToCart);
                   // product.children[1].replaceWith(document.createElement('div'));
                   product.children[1].innerText = addToCart;

                }
            }
        } else {
            cartProducts.insertAdjacentHTML('beforeEnd', `<div class='cart__product' data-id='${id}'>
			 							            <img class='cart__product-image' src='${this.productImage.src}'>
			 							            <div class='cart__product-count'>${this.Quantity.textContent}</div>
										            </div>`);
        }

        
        //console.log(cartProduct);
        

        
        /*else if (id == product.getAttribute('data-id')) {
            let div = document.createElement(`<div class='cart__product-count'>${this.Quantity.textContent} + ${document.get} </div>`);
           
        }*/
        
    
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
new addToCart ( document.querySelectorAll('.product')[0] );
new addToCart ( document.querySelectorAll('.product')[1] );