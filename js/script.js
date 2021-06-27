//Detecta el idioma del sistema
var ln = navigator.language || navigator.userLanguage;
ln=ln.substring(0,2);
//Selecciona el objeto del idioma
function changeLanguage(ln){
    let selectLang="";
    data.languages.forEach(language => {
        if (language.lang===ln){
            selectLang=language;
        };
    });
    return selectLang;
};
//Escribe la burbuja dinamica
const typed = new Typed('.typed',{
    strings:changeLanguage(ln).header.bubble,
    typeSpeed:75,
    cursorChar:'',
    loop:true,
    loopCount:false,
});
//construccion del contenido segun el lenguage
function construction(object){
    //se escribe el menu
    let menu= document.querySelectorAll(".m");
    for(let i=0;i<menu.length;i++){
        switch (i) {
            case 0:
                menu[i].textContent=object.menu.title;
                break;
            case 1:
                menu[i].textContent=object.menu.opt1;
            break;
            case 2:
                menu[i].textContent=object.menu.opt2;
                break;
            case 3:
                menu[i].textContent=object.menu.opt3;
                break;
            case 4:
                menu[i].textContent=object.menu.opt4;
                break;
            default:
                menu[i].textContent=object.message;
                break;
        }   
    };
    //Se escribe el titulo
    let title=document.querySelector("#i");
    title.textContent=object.main.sect1.title;
    //Se escribe section 1
    let sect1=document.querySelector("#sect1");
    sect1.children[0].textContent=object.main.sect1.subtitle;
    sect1.children[1].textContent=object.main.sect1.message;
    //Se escribe section 2
    let sect2=document.querySelector("#sect2");
    sect2.children[0].textContent=object.main.sect2.title;
    for (let i = 0; i < sect2.children[1].children.length; i++) {
        sect2.children[1].children[i].children[0].textContent=object.main.sect2.load[i].title;
        sect2.children[1].children[i].children[1].textContent=object.main.sect2.load[i].subtitle;
    }
    //Se escribe section 3
    let sect3=document.querySelector("#sect3");
    sect3.children[0].textContent=object.main.sect3.title;
    //Se escribe section 4
    let sect4=document.querySelector("#sect4");
    sect4.children[0].textContent=object.main.sect4.title;
    for (let i = 0; i < sect4.children[1].children.length; i++) {
        sect4.children[1].children[i].children[1].textContent=object.main.sect4.opt[i];
    }
    //Se escribe section 5
    let sect5=document.querySelector("#sect5");
    sect5.children[0].textContent=object.main.sect5.title;
    sect5.children[1].children[0].children[0].textContent=object.main.sect5.subtitle;
    for (let i = 0; i < sect5.children[1].children[0].children[1].children.length; i++) {
        sect5.children[1].children[0].children[1].children[i].children[0].textContent=object.main.sect5.jobs[i].title;
        sect5.children[1].children[0].children[1].children[i].children[1].textContent=object.main.sect5.jobs[i].rank;
        sect5.children[1].children[0].children[1].children[i].children[2].textContent=object.main.sect5.jobs[i].detail;
    }
};
construction(changeLanguage(ln));
//captura formulario
let formLang=document.querySelector(".languages");
//trae un array con los valores del radio
let arrayLang=document.querySelectorAll(".language");
arrayLang.forEach(element=>{
    if (element.value===ln) {
        element.checked=true;
    }
});
//escucha el formulario
formLang.addEventListener("change",(event)=>{
    arrayLang.forEach(element=>{
        if (element.checked){
            construction(changeLanguage(element.value));
        };
    });
});