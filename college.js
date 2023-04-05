// slider Menubar

document.querySelector("header>.menu>#items>#item2").addEventListener("mouseover",()=>{
    document.querySelector("header>.menu>#subAcademic").style.visibility = "unset";
    document.querySelector("header>.menu>#subDownloads").style.visibility = "hidden";
    document.querySelector("header>.menu>#subProjects").style.visibility = "hidden";
});
document.querySelector("header>.menu>#items>#item3").addEventListener("mouseover",()=>{
    document.querySelector("header>.menu>#subDownloads").style.visibility = "unset";
    document.querySelector("header>.menu>#subAcademic").style.visibility = "hidden";
    document.querySelector("header>.menu>#subProjects").style.visibility = "hidden";
});
document.querySelector("header>.menu>#items>#item4").addEventListener("mouseover",()=>{
    document.querySelector("header>.menu>#subProjects").style.visibility = "unset";
    document.querySelector("header>.menu>#subAcademic").style.visibility = "hidden";
    document.querySelector("header>.menu>#subDownloads").style.visibility = "hidden";
});
document.querySelector("header>.menu").addEventListener("mouseleave",()=>{
    document.querySelector("header>.menu>#subAcademic").style.visibility = "hidden";
});
document.querySelector("header>.menu").addEventListener("mouseleave",()=>{
    document.querySelector("header>.menu>#subDownloads").style.visibility = "hidden";
});
document.querySelector("header>.menu").addEventListener("mouseleave",()=>{
    document.querySelector("header>.menu>#subProjects").style.visibility = "hidden";
});



document.querySelector("header>.hamburger>#h_icon").addEventListener("click",()=>{
    if(document.querySelector("header>.menu").style.transform = "translateX(-435px)"){
        document.querySelector("header>.menu").style.transform = "translateX(0px)";
    }
    else if(document.querySelector("header>.menu").style.transform = "translateX(0px)"){
        document.querySelector("header>.menu").style.transform = "translateX(-435px)";
    }
});
document.querySelector("header>.menu").addEventListener("mouseleave",()=>{
    document.querySelector("header>.menu").style.transform = "translateX(-435px)";
});


//Time of window scrolling elivation of navbar

window.addEventListener("scroll",()=>{
    document.querySelector("header>.hamburger").classList.toggle("sticky",window.scrollY > 0);
    document.querySelector("header>.menu").classList.toggle("stickyMenu",window.scrollY > 0);
});




// Event animation javascript


document.querySelector("main>.events>#skywatching").addEventListener("click",()=>{
    if(document.querySelector("main>.events>#skywatching>#photo").style.display = "none")
        document.querySelector("main>.events>#skywatching>#photo").style.display = "inherit";
});
document.querySelector("main>.events>#skywatching").addEventListener("mouseleave",()=>{
    document.querySelector("main>.events>#skywatching>#photo").style.display = "none";
});
document.querySelector("main>.events>#excursion").addEventListener("click",()=>{
    if(document.querySelector("main>.events>#excursion>#photo").style.display = "none")
        document.querySelector("main>.events>#excursion>#photo").style.display = "inherit";
});
document.querySelector("main>.events>#excursion").addEventListener("mouseleave",()=>{
    document.querySelector("main>.events>#excursion>#photo").style.display = "none";
});
document.querySelector("main>.events>#social").addEventListener("click",()=>{
    if(document.querySelector("main>.events>#social>#photo").style.display = "none")
        document.querySelector("main>.events>#social>#photo").style.display = "inherit";
});
document.querySelector("main>.events>#social").addEventListener("mouseleave",()=>{
    document.querySelector("main>.events>#social>#photo").style.display = "none";
});
document.querySelector("main>.events>#games").addEventListener("click",()=>{
    if(document.querySelector("main>.events>#games>#photo").style.display = "none")
        document.querySelector("main>.events>#games>#photo").style.display = "inherit";
});
document.querySelector("main>.events>#games").addEventListener("mouseleave",()=>{
    document.querySelector("main>.events>#games>#photo").style.display = "none";
});
document.querySelector("main>.events>#puja").addEventListener("click",()=>{
    if(document.querySelector("main>.events>#puja>#photo").style.display = "none")
        document.querySelector("main>.events>#puja>#photo").style.display = "inherit";
});
document.querySelector("main>.events>#puja").addEventListener("mouseleave",()=>{
    document.querySelector("main>.events>#puja>#photo").style.display = "none";
});
