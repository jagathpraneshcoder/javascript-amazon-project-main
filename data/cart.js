export const cart=[];

export function addToCart(productId){

  let matchingId;
      
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      const quantity = Number(quantitySelector.value);
      
      cart.forEach(item => {
          if(productId === item.productId){
            matchingId=item;
          }
      });

      if(matchingId){
        matchingId.quantity+=quantity;
      }
      else{
        cart.push({
          productId:productId,
          quantity:quantity
        });
      }

}
