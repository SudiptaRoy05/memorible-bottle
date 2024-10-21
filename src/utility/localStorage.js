const getStoredCart =()=>{
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        return JSON.parse(storedCart);
    }
    return [];
}

const saveCardToLS =cart=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCardToLS(cart);
}

export {addToLS, getStoredCart}




// const getCartFromLocalStorage=()=>{
//     const storedCart = localStorage.getItem('cart');
//     if(storedCart){
//         return JSON.parse(storedCart);
//     }else{
//         return [];
//     }
// }

// const saveCartToLs =(cart)=>{
//     const cartStringified = JSON.stringify(cart);
//     localStorage.setItem('cart', cartStringified)
// }

// const addToLS =id=>{
//     const addCart = getCartFromLocalStorage();
//     addCart.push(id);
//     saveCartToLs(addCart);
// }

// export{addToLS}