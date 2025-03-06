import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: "Trứng Chiên",
    price: "9.99",
    category: "Bữa Sáng",
    image:"/public/menu/trungchien.avif",
    description: "Làm từ trứng, rau xà lách, muối, dầu ăn và các nguyên liệu khác"
  },
  {
    id: 2,
    name: "Pizza Hawaiian",
    price: "15.99",
    category: "Món Chính",
    image: "/public/menu/PizzaHawaiian.avif",
    description: "Làm từ trứng, rau xà lách, muối, dầu ăn và các nguyên liệu khác"
  },
  {
    id: 3,
    name: "Cocktail Martinez",
    price: "7.25",
    category: "Đồ Uống",
    image: "/public/menu/Cocktail.avif",
    description: "Làm từ trứng, rau xà lách, muối, dầu ăn và các nguyên liệu khác"
  },
  {
    id: 4,
    name: "Bánh Butterscotch",
    price: "20.99",
    category: "Món Tráng Miệng",
    image: "/public/menu/Butterscotch.avif",
    description: "Làm từ trứng, rau xà lách, muối, dầu ăn và các nguyên liệu khác"
  },
];

const categories = ["Tất Cả", "Bữa Sáng", "Món Chính", "Đồ Uống", "Món Tráng Miệng"];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Tất Cả");

  const filteredItems = selectedCategory === "Tất Cả" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-primary_linear">

      {/* Menu Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary_yellow mb-4">Thực Đơn Của Chúng Tôi</h1>
          <p className="text-gray-300">Chúng tôi đã chọn lọc tất cả các món ăn ngon miệng với nguyên liệu tuyệt vời</p>
          <p className="text-gray-300">Bạn cần thay đổi để tạo ra hạnh phúc thực sự</p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary_yellow text-primary_brown"
                  : "text-primary_yellow border border-primary_yellow hover:bg-primary_yellow hover:text-primary_brown"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-primary_brown rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-primary_yellow font-semibold">{item.name}</h3>
                  <span className="text-primary_yellow">${item.price}</span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
