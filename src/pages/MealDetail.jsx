import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { data } from "../data";

function MealDetail() {
  const { id } = useParams();
  const product = data.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center ">
        <h2 className="text-2xl text-primary_yellow">Product not found</h2>
        <Link
          to="/"
          className="text-primary_yellow hover:text-white mt-4 inline-block"
        >
          Return to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-auto px-4 py-12">
      <Link
        to="/"
        className="inline-flex items-center text-primary_yellow hover:text-white mb-8"
      >

      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative">
          <img
            src={`/public/images/meals/${product.image}`}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4 bg-primary_yellow text-primary_brown px-4 py-2 rounded-full font-semibold">
            ${product.price}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-primary_yellow mb-4">
            {product.name}
          </h1>
          <p className="text-gray-300 mb-8">{product.description}</p>

          <div className="bg-primary_brown rounded-lg p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="text-primary_yellow" size={20} />
              <span className="text-gray-300">
                Preparation Time: {product.details.preparationTime}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Users className="text-primary_yellow" size={20} />
              <span className="text-gray-300">
                Serving Size: {product.details.servingSize}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary_yellow mb-4">
              Ingredients
            </h2>
            <ul className="grid grid-cols-2 gap-2">
              {product.details.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-300">
                  • {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary_yellow mb-4">
              Nutritional Information
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(product.details.nutritionalInfo).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="bg-primary_brown rounded-lg p-4 text-center"
                  >
                    <div className="text-gray-400 capitalize">{key}</div>
                    <div className="text-primary_yellow font-semibold">
                      {value}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <button className="mt-8 w-full bg-primary_yellow text-primary_brown py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealDetail;
