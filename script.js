// Ждём, пока сайт загрузится
document.addEventListener(
   "DOMContentLoaded", () =>
   {
    const surpriseBtn = document.getElementById('surpriseBtn');
   if (surpriseBtn) {
    surpriseBtn.addEventListener('click', () =>
    {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        })
    })
   }
}) 