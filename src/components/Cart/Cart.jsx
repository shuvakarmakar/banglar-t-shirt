import React from 'react';

const Cart = ({cart, handleRemoveToCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    return (
        <div>
            <h2>Order Summery: {cart.length}</h2>
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveToCart(tshirt._id)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;

// Conditional Rendering
// 1. use if else to set a variable that will contain element, componenets, div etc
// 2. ternary : condition ? 'for true' : 'for false'