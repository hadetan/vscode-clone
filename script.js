var tl = gsap.timeline();
tl
.from("#download #dleft #dtext h1", {
    x: -100,
    duration: 1,
    opacity: 0,
})
.from("#download #dleft #dtext #h4", {
    x: -100,
    duration: 0.8,
    opacity: 0,
    delay: -0.9
})
.from("#download #dleft #dtext button", {
    y: 50,
    duration: 0.8,
    opacity: 0,
    delay: -0.9
})
.from("#download #dleft #dtext #dinfo", {
    y: 50,
    duration: 0.8,
    opacity: 0,
    delay: -0.9
})
.from("#download #dleft #dtext #dterms", {
    y: 50,
    duration: 0.8,
    opacity: 0,
    delay: -0.9
})
.from("#download #dright", {
    x: 50,
    duration: 1,
    delay: -1.2,
    opacity: 0,
})

var fs1 = document.querySelector("#feature #ft1");
var fs2 = document.querySelector("#feature #ft2");
var fs3 = document.querySelector("#feature #ft3");
var fs4 = document.querySelector("#feature #ft4");
fs1.addEventListener("mousemove", function(){
    fs1.style.scale = 1.1;
})
fs1.addEventListener("mouseleave", function(){
    fs1.style.scale = 1;
})
fs2.addEventListener("mousemove", function(){
    fs2.style.scale = 1.1;
})
fs2.addEventListener("mouseleave", function(){
    fs2.style.scale = 1;
})
fs3.addEventListener("mousemove", function(){
    fs3.style.scale = 1.1;
})
fs3.addEventListener("mouseleave", function(){
    fs3.style.scale = 1;
})
fs4.addEventListener("mousemove", function(){
    fs4.style.scale = 1.1;
})
fs4.addEventListener("mouseleave", function(){
    fs4.style.scale = 1;
})

var ext = document.querySelector("#ext #epart #eright");
ext.addEventListener("mousemove", function(){
    ext.style.scale = 0.6;
})
ext.addEventListener("mouseleave", function(){
    ext.style.scale = 0.5;
})

var logo1 = document.querySelector("#language #cl #js");
var logo2 = document.querySelector("#language #cl #py");
var logo3 = document.querySelector("#language #cl #ja");
var logo4 = document.querySelector("#language #cl #md");
var logo5 = document.querySelector("#language #cl #ts");
var logo6 = document.querySelector("#language #cl #cpp");
var logo7 = document.querySelector("#language #cl #json");
var logo8 = document.querySelector("#language #cl #ps");
var logo9 = document.querySelector("#language #cl #html");
var logo10 = document.querySelector("#language #cl #c");
var logo11 = document.querySelector("#language #cl #php");
var logo12 = document.querySelector("#language #cl #yaml");

logo1.addEventListener("mousemove", function(){
    logo1.style.scale = 1.1;
})
logo1.addEventListener("mouseleave", function(){
    logo1.style.scale = 1;
})
logo2.addEventListener("mousemove", function(){
    logo2.style.scale = 1.1;
})
logo2.addEventListener("mouseleave", function(){
    logo2.style.scale = 1;
})
logo3.addEventListener("mousemove", function(){
    logo3.style.scale = 1.1;
})
logo3.addEventListener("mouseleave", function(){
    logo3.style.scale = 1;
})
logo4.addEventListener("mousemove", function(){
    logo4.style.scale = 1.1;
})
logo4.addEventListener("mouseleave", function(){
    logo4.style.scale = 1;
})
logo5.addEventListener("mousemove", function(){
    logo5.style.scale = 1.1;
})
logo5.addEventListener("mouseleave", function(){
    logo5.style.scale = 1;
})
logo6.addEventListener("mousemove", function(){
    logo6.style.scale = 1.1;
})
logo6.addEventListener("mouseleave", function(){
    logo6.style.scale = 1;
})
logo7.addEventListener("mousemove", function(){
    logo7.style.scale = 1.1;
})
logo7.addEventListener("mouseleave", function(){
    logo7.style.scale = 1;
})
logo8.addEventListener("mousemove", function(){
    logo8.style.scale = 1.1;
})
logo8.addEventListener("mouseleave", function(){
    logo8.style.scale = 1;
})
logo9.addEventListener("mousemove", function(){
    logo9.style.scale = 1.1;
})
logo9.addEventListener("mouseleave", function(){
    logo9.style.scale = 1;
})
logo10.addEventListener("mousemove", function(){
    logo10.style.scale = 1.1;
})
logo10.addEventListener("mouseleave", function(){
    logo10.style.scale = 1;
})
logo11.addEventListener("mousemove", function(){
    logo11.style.scale = 1.1;
})
logo11.addEventListener("mouseleave", function(){
    logo11.style.scale = 1;
})
logo12.addEventListener("mousemove", function(){
    logo12.style.scale = 1.1;
})
logo12.addEventListener("mouseleave", function(){
    logo12.style.scale = 1;
})

var ileft = document.querySelector("#ipart #ileft img");
ileft.addEventListener("mousemove", function(){
    ileft.style.scale = 1.2;
})
ileft.addEventListener("mouseleave", function(){
    ileft.style.scale = 1.1;
})

var deright = document.querySelector("#deright img");
deright.addEventListener("mousemove", function(){
    deright.style.scale = 1.2;
})
deright.addEventListener("mouseleave", function(){
    deright.style.scale = 1.1;
})

var gleft = document.querySelector("#gleft img");
gleft.addEventListener("mousemove", function(){
    gleft.style.scale = 1.2;
})
gleft.addEventListener("mouseleave", function(){
    gleft.style.scale = 1.1;
})

var dpleft = document.querySelector("#dpleft img");
dpleft.addEventListener("mousemove", function(){
    dpleft.style.scale = 1.2;
})
dpleft.addEventListener("mouseleave", function(){
    dpleft.style.scale = 1.1;
})

var nav = document.querySelector("#nav2");
var ul = document.querySelector("#nav2 ul");
var btn = document.querySelector("#nav2 button");
var menu = document.querySelector("#nav #menu");

var flag = 0;
// menu.addEventListener("click", function(){
//     if (flag == 0) {
//         nav.style.opacity = 1;
//         ul.style.opacity = 1;
//         btn.style.opacity = 1;
//         flag = 1;
//     } else {
//         nav.style.opacity = 0;
//         ul.style.opacity = 0;
//         btn.style.opacity = 0;
//         flag = 0;
//     }
// })


menu.addEventListener("click", function(){
    if (flag == 0) {
        gsap.to("#nav2", {
            duration: 0.5,
            // delay: -0.9,
            height: "500px"
        })
        gsap.to("#nav2 ul", {
            duration: 0.5,
            opacity: 1,
            x: 10,
            delay: 0.1,
            width: "7vw",
        })
        gsap.to("#nav2 button", {
            duration: 0.5,
            opacity: 1,
            delay: 0.2,
        })
        flag = 1;
    } else {
        gsap.to("#nav2", {
            duration: 0.5,
            // delay: -0.9,
            height: "0px"
        })
        gsap.to("#nav2 ul", {
            duration: 0.5,
            opacity: 0,
            x: -10,
            delay: -2,
            width: "0vw",
        })
        gsap.to("#nav2 button", {
            duration: 0.5,
            opacity: 0,
            delay: 0.2,
        })
        flag = 0;
    }
})