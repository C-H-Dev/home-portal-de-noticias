const btnMenu = document.querySelector('.mani-header__btn');
const btnMenuClose = document.querySelector(".btn__close-menu");
const listMenu = document.querySelector('.main-header__list')

// this display menu in mobile design
btnMenu.addEventListener("click", function(){
        console.log("Hola");
        listMenu.classList.add('active')   
        btnMenuClose.classList.remove("hidden")   

});

// this close menu in mobile design
btnMenuClose.addEventListener("click",function(){
    listMenu.classList.remove("active")
    btnMenuClose.classList.add("hidden")
})



