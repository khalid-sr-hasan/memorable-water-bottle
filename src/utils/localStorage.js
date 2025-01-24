// const getStoredCard = () => {
//     const storedCardString = localStorage.getItem("cart");

//     if (storedCardString) {
//         return JSON.parse(storedCardString);
//     }
//     return [];
// };

// const saveCartToLS = (cart) => {
//     const cartStringify = JSON.stringify(cart);
//     localStorage.setItem("cart", cartStringify);
// };

// const addCartToLS = (id) => {
//     const cart = getStoredCard();
//     cart.push(id);
//     // save to local storage
//     saveCartToLS(cart);
// };

const getStoredCard = () => {
    const storedCardString = localStorage.getItem("cart");

    if (storedCardString) {
        return JSON.parse(storedCardString);
    }
    return [];
};

const saveCartToLS = (cart) => {
    const saveCartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", saveCartStringified);
};

const addCartToLS = (id) => {
    const cart = getStoredCard();
    cart.push(id);
    saveCartToLS(cart);
};

// const removeStoredCard = () => {
//     localStorage.clear();
// };

export { addCartToLS, getStoredCard };
