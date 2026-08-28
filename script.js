// Ждём, пока сайт загрузится
document.addEventListener(
   "DOMContentLoaded", () =>{
    // Находим все кнопки и аккордеоны (details/summary) на странице
    const elements = document.querySelectorAll('button, .btn, summary');
    elements.forEach(el => {
        el.addEventListener('click', () =>
        {
            // Запускаем конфетти при клике
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y:0.6 }
            })
        })
    })
        