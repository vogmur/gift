// Ждём, пока сайт загрузится
document.addEventListener(
   "DOMContentLoaded", () =>{
        const btn=document.getElementById('surpriseBtn');
        const content=document.getElementById("surpriseContent");
        // Делаем по клику
        btn.addEventListener('click', ()=>{
        content.classList.add('show'); 
         //Показываем скрытый блок
        btn.style.display='none';
        });   //Прячем кнопку
    });
    