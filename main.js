const menu = document.getElementById('menu');
const menuClose =document.getElementById('menu-close');
const unOrderList = document.querySelector('.un-order-list');

menuClose.style.display = 'none';


menu.addEventListener('click',() => { 
    menu.style.display = 'none';
    menuClose.style.display = 'block';
    unOrderList.style.opacity = '1'
    document.body.style.overflowY = 'hidden'
   
})

menuClose.addEventListener('click',() => { 
    menu.style.display = 'block';
    menuClose.style.display = 'none';
    unOrderList.style.opacity = '0'
    document.body.style.overflowY = 'scroll'
    
})