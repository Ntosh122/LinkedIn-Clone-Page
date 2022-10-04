
const d = new Date();
let year = d.getFullYear();
document.getElementById('year').innerHTML=year;

// menu
let profile_Menu = document.getElementById("profileMenu");

function toggleMenu(){
    profile_Menu.classList.toggle("open-menu");
    
}
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("show-more-link");

function toggleActivity(){
    sideActivity.classList.toggle("open-activity");
    
    if(sideActivity.classList.contains('open-activity')){
        moreLink.innerHTML= "Show Less <b>-</b>";
    }else{
        moreLink.innerHTML= "Show More <b>+</b>";
    }
}
onload = () =>{
    const load = document.getElementById('load');

    setTimeout(()=>{
        load.style.display='none'
    }, 1500);
}