const drop_menu_btn = document.querySelector('button.drop-menu-btn')
const close_menu_btn = document.querySelector('button.close-nav')
const nav_box=document.querySelector('header nav')
drop_menu_btn.addEventListener('click',function(){
    nav_box.classList.add('show-header-nav')
})
close_menu_btn.addEventListener('click',function(){
    nav_box.classList.remove('show-header-nav')
})

nav_box.addEventListener('click',function(){
    nav_box.classList.remove('show-header-nav')
})
const menu_section_ele=document.querySelector('section#menu')
const home_section_ele=document.querySelector('section#home')
const contact_section_ele=document.querySelector('section#contact')
let delay=undefined
window.addEventListener('scroll',function(){
    const ms = 200
    if(menu_section_ele.getBoundingClientRect().bottom > 0 && menu_section_ele.getBoundingClientRect().top < window.innerHeight/1.6){
        clearTimeout(delay)
        delay=setTimeout(()=>{document.querySelector('header nav .active').classList.remove('active')
        document.querySelector('header nav .menu-link').classList.add('active')},ms)
        console.log(0,menu_section_ele.getBoundingClientRect().top)
    }
    else if(contact_section_ele.getBoundingClientRect().bottom > 0 && contact_section_ele.getBoundingClientRect().top < window.innerHeight/1.6){
        clearTimeout(delay)
        delay=setTimeout(()=>{document.querySelector('header nav .active').classList.remove('active')
        document.querySelector('header nav .contact-link').classList.add('active')},ms)
        console.log(0,contact_section_ele.getBoundingClientRect().top)
    }else if(home_section_ele.getBoundingClientRect().bottom > 0 && home_section_ele.getBoundingClientRect().top < window.innerHeight/1.6){

        clearTimeout(delay)
        delay=setTimeout(()=>{document.querySelector('header nav .active').classList.remove('active')
        document.querySelector('header nav .home-link').classList.add('active')},ms)
    }
})
