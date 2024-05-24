var theme1=document.querySelector("#theme-1");
var theme2=document.querySelector("#theme-2");
var theme3=document.querySelector("#theme-3");

var stl=getComputedStyle(document.body);



theme1.addEventListener("click",function(){
    document.documentElement.style.setProperty('--clr-body-bg-1','hsl(222, 26%, 31%)');
    document.documentElement.style.setProperty('--clr-main-bg-1','hsl(223, 31%, 20%)');
    document.documentElement.style.setProperty('--clr-screen-bg-1','hsl(224, 36%, 15%)');
    document.documentElement.style.setProperty('--clr-key-bg-primary','hsl(30, 25%, 89%)');
    document.documentElement.style.setProperty('--clr-key-bg-secondary','hsl(225, 21%, 49%)');
    document.documentElement.style.setProperty('--clr-key-bg-tertiary','hsl(6, 63%, 50%)');
    document.documentElement.style.setProperty('--clr-key-shadow-primary','hsl(28, 16%, 65%)');
    document.documentElement.style.setProperty('--clr-key-shadow-secondary','hsl(224, 28%, 35%)');
    document.documentElement.style.setProperty('--clr-key-shadow-tertiary','hsl(6, 70%, 34%)');
    document.documentElement.style.setProperty('--clr-text-primary','hsl(221, 14%, 31%)');
    document.documentElement.style.setProperty('--clr-text-secondary','hsl(0, 0%, 100%)');
});
theme2.addEventListener("click",function(){
    document.documentElement.style.setProperty('--clr-body-bg-1','hsl(0, 0%, 90%)');
    document.documentElement.style.setProperty('--clr-main-bg-1','hsl(0, 5%, 81%)');
    document.documentElement.style.setProperty('--clr-screen-bg-1','hsl(0, 0%, 93%)');
    document.documentElement.style.setProperty('--clr-key-bg-primary','hsl(45, 7%, 89%)');
    document.documentElement.style.setProperty('--clr-key-bg-secondary','hsl(185, 42%, 37%)');
    document.documentElement.style.setProperty('--clr-key-bg-tertiary','hsl(25, 98%, 40%)');
    document.documentElement.style.setProperty('--clr-key-shadow-primary','hsl(35, 11%, 61%)');
    document.documentElement.style.setProperty('--clr-key-shadow-secondary','hsl(185, 58%, 25%)');
    document.documentElement.style.setProperty('--clr-key-shadow-tertiary','hsl(25, 99%, 27%)');
    document.documentElement.style.setProperty('--clr-text-primary','hsl(60, 10%, 19%)');
    document.documentElement.style.setProperty('--clr-text-secondary','hsl(60, 10%, 19%)');
});
theme3.addEventListener("click",function(){
    document.documentElement.style.setProperty('--clr-body-bg-1','hsl(268, 75%, 9%)');
    document.documentElement.style.setProperty('--clr-main-bg-1','hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--clr-screen-bg-1','hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--clr-key-bg-primary','hsl(268, 47%, 21%)');
    document.documentElement.style.setProperty('--clr-key-bg-secondary','hsl(281, 89%, 26%)');
    document.documentElement.style.setProperty('--clr-key-bg-tertiary','hsl(176, 100%, 44%)');
    document.documentElement.style.setProperty('--clr-key-shadow-primary','hsl(290, 70%, 36%)');
    document.documentElement.style.setProperty('--clr-key-shadow-secondary','hsl(285, 91%, 52%)');
    document.documentElement.style.setProperty('--clr-key-shadow-tertiary','hsl(177, 92%, 70%)');
    document.documentElement.style.setProperty('--clr-text-primary','hsl(52, 100%, 62%)');
    document.documentElement.style.setProperty('--clr-text-secondary','hsl(52, 100%, 62%)');
    });

