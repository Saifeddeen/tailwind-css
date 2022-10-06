
// // var mIsOpen = false;
// var menu = document.getElementById("#mainMenu");

// function openCloseMenu(){
//     // if(!mIsOpen){
//     //     menu.classList.remove("hidden");
//     //     menu.classList.add("flex");
//     //     mIsOpen = true;
//     // }else {
//     //     menu.classList.remove("flex");
//     //     menu.classList.add("hidden");
//     //     mIsOpen = false;
//     // }
//     menu.classList.toggle('hidden','flex');
// }

(function(){
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menu-active');
    })
})();