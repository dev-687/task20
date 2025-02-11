
import React from "react";

const productsData = [
  { id: 1, name: "Campus Men's Sneakers", price: 50, image: "../src/assets/shoes1.png" },
  { id: 2, name: "Campus Men's OG-03 Sneakers", price: 75, image: "../src/assets/shoes2.png" },
  { id: 3, name: "Campus Men's Sneakers", price: 50, image: "../src/assets/shoes3.png" },
  { id: 4, name: "Campus Men's OG-03 Sneakers", price: 75, image: "../src/assets/shoes4.png" },
  { id: 6, name: "Campus Men's Sneakers", price: 50, image: "../src/assets/shoes1.png" },
  { id: 7, name: "Campus Men's OG-03 Sneakers", price: 75, image: "../src/assets/shoes2.png" },
  { id: 8, name: "Campus Men's Sneakers", price: 50, image: "../src/assets/shoes3.png" },
  { id: 9, name: "Campus Men's OG-03 Sneakers", price: 75, image: "../src/assets/shoes4.png" }
];

function Products({ addToCart }) {
  return (
    <div className="grid grid-cols-2 mt-8 gap-x-10 gap-y-6 p-6 justify-between">
      {productsData.map((product) => (
        <div key={product.id} className=" rounded-lg p-4 text-center shadow">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
          <div className="bg-amber-100 p-7 border rounded-lg">
          <h2 className="font-semibold">{product.name}</h2>
          <p className="text-lg font-bold">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-transparent text-black px-2 py-2 rounded-lg border"
          >
            Add to Cart
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Products;