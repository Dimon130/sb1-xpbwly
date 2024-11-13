// Плавная прокрутка и анимации при скролле
document.addEventListener('DOMContentLoaded', () => {
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Анимация появления элементов при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });

    // Параллакс эффект для фона
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Анимация хедера при скролле
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Галерея с лайтбоксом
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${item.src}" alt="${item.alt}">
                    <button class="close-lightbox">&times;</button>
                </div>
            `;
            document.body.appendChild(lightbox);
            
            lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });

    // Форма RSVP с анимацией
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        // Здесь можно добавить логику отправки данных
        showThankYouMessage();
    });
});

// Анимированное сообщение после отправки формы
function showThankYouMessage() {
    const message = document.createElement('div');
    message.className = 'thank-you-message';
    message.textContent = 'Спасибо за ваш ответ!';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Счетчик до свадьбы
function updateCountdown() {
    const weddingDate = new Date('2024-12-31T00:00:00'); // Установите вашу дату
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div>${days}д</div>
        <div>${hours}ч</div>
        <div>${minutes}м</div>
        <div>${seconds}с</div>
    `;
}

setInterval(updateCountdown, 1000);
