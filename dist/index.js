let link1=document.querySelector(".link1");
let link2=document.querySelector(".link2");
let link3=document.querySelector(".link3");
let link4=document.querySelector(".link4");
let link5=document.querySelector(".link5");
let link6=document.querySelector(".link6");
let link7=document.querySelector(".link7");
let link8=document.querySelector(".link8");
let box1=document.querySelector(".box1")
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
let box5=document.querySelector(".box5");
let box6=document.querySelector(".box6");
let box7=document.querySelector(".box7");
let box8=document.querySelector(".box8");

window.addEventListener("load",()=>{
     link1.classList.add("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    link5.classList.remove("active");
    link6.classList.remove("active");
    link7.classList.remove("active");
    link8.classList.remove("active");

    box1.style.display="block";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="none";
    box7.style.display="none";
    box8.style.display="none";
})
link1.addEventListener("click",()=>{
    link1.classList.add("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    link5.classList.remove("active");
    link6.classList.remove("active");
    link7.classList.remove("active");
    link8.classList.remove("active");
    menu_bar.classList.remove("active_sidebar")
    box1.style.display="block";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="none";
    box7.style.display="none";
    box8.style.display="none";

});
link2.addEventListener("click",()=>{
    link1.classList.remove("active");
    link4.classList.remove("active");
    link3.classList.remove("active");
    link2.classList.add("active");
    link5.classList.remove("active");
    link6.classList.remove("active");
    link7.classList.remove("active");
    link8.classList.remove("active");
    menu_bar.classList.remove("active_sidebar")
    box2.style.display="block";
    box1.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="none";
    box7.style.display="none";
    box8.style.display="none";

});
link3.addEventListener("click",()=>{
    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.add("active");
    link4.classList.remove("active");
    link5.classList.remove("active");
    link6.classList.remove("active");
    link7.classList.remove("active");
    link8.classList.remove("active");
    menu_bar.classList.remove("active_sidebar")
    box1.style.display="none";
    box2.style.display="none";
    box4.style.display="none";
    box3.style.display="block";
    box5.style.display="none";
    box6.style.display="none";
    box7.style.display="none";
    box8.style.display="none";

});
link4.addEventListener("click",()=>{
    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.add("active");
    link5.classList.remove("active");
    link6.classList.remove("active");
    link7.classList.remove("active");
    link8.classList.remove("active");
    menu_bar.classList.remove("active_sidebar")
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="block";
    box5.style.display="none";
    box6.style.display="none";
    box7.style.display="none";
    box8.style.display="none";

});
link5.addEventListener("click",()=>{
    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    link5.classList.add("active");
    link6.classList.remove("active");
    link7.classList.remove("active");
    link8.classList.remove("active");
    menu_bar.classList.remove("active_sidebar")
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="block";
    box6.style.display="none";
    box7.style.display="none";
    box8.style.display="none";

});
link6.addEventListener("click",()=>{
    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    link5.classList.remove("active");
    link6.classList.add("active");
    link7.classList.remove("active");
    link8.classList.remove("active");
    menu_bar.classList.remove("active_sidebar")
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="block";
    box7.style.display="none";
    box8.style.display="none";

});
link7.addEventListener("click",()=>{
    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    link5.classList.remove("active");
    link6.classList.remove("active");
    link8.classList.remove("active");
    link7.classList.add("active");
    menu_bar.classList.remove("active_sidebar")
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="none";
    box8.style.display="none";
    box7.style.display="block";

});
link8.addEventListener("click",()=>{
    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    link5.classList.remove("active");
    link6.classList.remove("active");
    link7.classList.remove("active");
    link8.classList.add("active");
    menu_bar.classList.remove("active_sidebar")
    box1.style.display="none";
    box2.style.display="none";
    box3.style.display="none";
    box4.style.display="none";
    box5.style.display="none";
    box6.style.display="none";
    box7.style.display="none";
    box8.style.display="block";

});

let menu=document.querySelectorAll(".menu_btn");
let menu_bar=document.querySelector(".menu_bar");
let close_menu=document.getElementById("menu_btn");
menu.forEach((e)=>{
e.addEventListener("click",()=>{
    menu_bar.classList.add("active_sidebar");

});
})

close_menu.addEventListener("click",()=>{
    menu_bar.classList.remove("active_sidebar")
});