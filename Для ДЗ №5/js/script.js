let li = document.querySelectorAll('.menu .menu-item'),
    ul = document.querySelector('.menu'),
    li5 = document.createElement('li'),
    li3 = document.createElement('li'),
    title = document.getElementById('title'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.column .adv');
    ans = document.querySelector('.column .prompt');
    
    
title.textContent = 'Мы продаем только подлинную технику Apple';
 
    
li5.textContent = 'Пятый пункт';
li3.textContent = 'Третий пункт';
 
ul.replaceChild(li[2], li[1]);

li5.classList.add('menu-item');
li3.classList.add('menu-item');
ul.appendChild(li5);
ul.insertBefore(li3, li[3]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
column[1].removeChild(adv);

let answer = prompt('Какая у вас отношение к технике apple', '');
ans.textContent = answer;








// var url = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg";

// var div = document.getElementById("container");
// div.style.backgroundImage = `url(${url})`;
// div.style.width = "640px";
// div.style.height = "374px";