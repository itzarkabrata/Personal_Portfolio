console.log("HEllo in ABout section");

// See-less and See-more button animation 

document.querySelector("main>.content>#text>span").addEventListener("click",()=>{
    document.querySelector("main>.content>#text>span").style.display = "none";
    document.querySelector("main>.expanded").style.display = "inherit";
    document.querySelector("main>.expanded>span").style.display = "inherit";
});
document.querySelector("main>.expanded>span").addEventListener("click",()=>{
    document.querySelector("main>.expanded>span").style.display = "none";
    document.querySelector("main>.expanded").style.display = "none";
    document.querySelector("main>.content>#text>span").style.display = "inherit";
});

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

//Time of window scrolling elivation of navbar

window.addEventListener("scroll",()=>{
    document.querySelector("header>.hamburger").classList.toggle("sticky",window.scrollY > 0);
    document.querySelector("header>.menu").classList.toggle("stickyMenu",window.scrollY > 0);
});





let icon = document.querySelector("header>.menu");
document.querySelector("header>.hamburger>#h_icon").addEventListener("click",()=>{
    if(icon.style.transform = "translateX(-450px)"){
        icon.style.transform = "translateX(0px)";
    }
    else{
        icon[0].style.transform = "translateY(-450px)";
    }
});
document.querySelector("header>.menu").addEventListener("mouseleave",()=>{
    document.querySelector("header>.menu").style.transform = "translateX(-450px)";
});
