export const cart=[
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2
  },
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:1
  }

];

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
