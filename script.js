// Ждём, пока сайт загрузится
document.addEventListener(
   "DOMContentLoaded", () =>{
        const btn=document.getElementById('surpriseBtn');
        const content=document.getElementById("surpriseContent");
        // Делаем по клику
        btn.addEventListener('click', ()=>{
        content.classList.add('show'); 
         //Показываем скрытый блок
         confetti({particleCount:100, spread: 70, origin: {y: 0.6}}); //Салют!
        btn.style.display='none'; 
        });   //Прячем кнопку
    });
    