import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen text-gray-800 p-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 p-4 rounded-lg flex items-center mb-4 shadow-sm">
              <img
                src="https://via.placeholder.com/100"
                alt="Product"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-semibold">WickWear Suit</h2>
                <p className="text-sm text-gray-600">Size: M | Color: Black</p>
                <div className="mt-2 flex items-center justify-between">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 p-2 bg-white border border-gray-300 rounded text-center"
                  />
                  <p className="text-lg font-bold">$250.00</p>
                  <button className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <Link to={"/home"}>
                <button className="text-sm text-gray-600 hover:text-gray-800">
                  Continue Shopping
                </button>
              </Link>
              <button className="text-sm text-red-500 hover:text-red-700">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Subtotal</p>
              <p>$250.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Shipping</p>
              <p>$15.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Tax</p>
              <p>$22.50</p>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p>$287.50</p>
            </div>
            <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-bold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
