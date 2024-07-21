window.onscroll = () => {

    document.querySelector(".bg").style.marginTop = scrollY / 2 + "px";

    document.querySelector(".welcome").style.marginTop = scrollY / 2 + "px";

    document.querySelector(".mountains").style.transform = "scale(" + (scrollY / 3000 + 1) + ")";

    document.querySelector(".container").style.transform = "scale(" + (scrollY / 6000 + 1) + ")";

}

const toggleBtn= document.querySelector('.toggle_btn');
const toggleBtnIcon= document.querySelector('.toggle_btn i');
const dropDownMenu= document.querySelector('.dropdown_menu');

toggleBtn.onclick= function(){
    dropDownMenu.classList.toggle('open')
    const isOpen=dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}