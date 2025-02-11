
import React from "react";

function Cart({ cartItems, removeFromCart, addToCart }) {
    return (
        <div className="p-6 m-10 border rounded-lg shadow-md fixed bg-gray-200 top-10 right-0 w-1/2">
            <h2 className="text-lg font-semibold">Cart</h2>
            {cartItems.length === 0 && <p className="text-gray-500">Cart is empty</p>}
            {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                    <span>
                        <img src={item.image} alt={item.name} className="w-full h-10 object-cover mb-2" />
                    </span>
                    <span>{item.name}</span>
                    <span>${item.price}</span>


                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() => addToCart(item)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                        +
                    </button>
                </div>
            ))}
            <h3 className="font-bold mt-4">Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
        </div>

    );
}

export default Cart;