import React, { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date('2024-06-20T12:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 mb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"></div>
      <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">До свадьбы осталось</h2>
      <div className="grid grid-cols-4 gap-8 relative">
        {[
          { value: timeLeft.days, label: 'дней' },
          { value: timeLeft.hours, label: 'часов' },
          { value: timeLeft.minutes, label: 'минут' },
          { value: timeLeft.seconds, label: 'секунд' }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-pink-50 rounded-xl p-6 shadow-inner">
              <div className="text-4xl font-bold text-pink-400">{item.value}</div>
              <div className="text-gray-600 font-serif">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}