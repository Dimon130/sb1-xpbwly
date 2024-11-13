import React from 'react';

export function DressCode() {
  const colors = [
    { bg: 'bg-[#F5E6E0]', label: 'Нежно-розовый' },
    { bg: 'bg-[#D5B6A6]', label: 'Пудровый' },
    { bg: 'bg-[#A67F6C]', label: 'Кофейный' },
    { bg: 'bg-[#594D46]', label: 'Шоколадный' }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
      <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">Дресс-код</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Мы будем благодарны, если вы поддержите цветовую гамму нашей свадьбы. 
        Выберите наряд в одном из предложенных оттенков:
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {colors.map((color, index) => (
          <div key={index} className="text-center">
            <div className={`w-16 h-16 rounded-full ${color.bg} shadow-lg mx-auto mb-2`}></div>
            <p className="text-sm text-gray-600">{color.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}