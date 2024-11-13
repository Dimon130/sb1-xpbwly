import React from 'react';
import { MapPin, Clock, Calendar, Music, Gift } from 'lucide-react';

export function EventDetails() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 mb-16 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
      <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">Детали Торжества</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <Calendar className="w-8 h-8 text-pink-400" />
            <div>
              <p className="font-serif text-xl">Дата</p>
              <p className="text-gray-600">20 июня 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Clock className="w-8 h-8 text-pink-400" />
            <div>
              <p className="font-serif text-xl">Время</p>
              <p className="text-gray-600">12:00</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <MapPin className="w-8 h-8 text-pink-400" />
            <div>
              <p className="font-serif text-xl">Место</p>
              <p className="text-gray-600">Дворец бракосочетания №1</p>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <Music className="w-8 h-8 text-pink-400" />
            <div>
              <p className="font-serif text-xl">Банкет</p>
              <p className="text-gray-600">Ресторан "Золотой Дворец"</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Gift className="w-8 h-8 text-pink-400" />
            <div>
              <p className="font-serif text-xl">Пожелания</p>
              <p className="text-gray-600">Ваши улыбки и хорошее настроение</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}