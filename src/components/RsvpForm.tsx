import React from 'react';

export function RsvpForm() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 mb-16 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
      <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">Подтвердите Ваше Присутствие</h2>
      <form className="max-w-2xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2 font-serif">Ваше имя</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white/50"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-serif">Телефон</label>
            <input 
              type="tel" 
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white/50"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-2 font-serif">С кем вы будете?</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white/50"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 font-serif">Предпочтения по меню</label>
          <div className="space-y-2">
            {['Стандартное меню', 'Вегетарианское меню', 'Особые предпочтения'].map((option) => (
              <label key={option} className="flex items-center">
                <input type="radio" name="menu" className="form-radio text-pink-400" />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-300 font-serif text-lg shadow-lg"
        >
          Подтвердить
        </button>
      </form>
    </div>
  );
}