function enableDarkMode(){
    var short = document.getElementById('btn-disable-dark-mode')
    short.innerHTML = "Disable Dark Mode";
    
   
}
function enableDark(){
    var toglle = document.getElementById('toggler');
    toglle.classList.remove("fa-toggle-off");
    toglle.classList.add("fa-toggle-on");

}

//navbar active styling
function test(){
    var x=document.getElementById('home');
    var y = document.getElementById('sell');
    y.classList.toggle('nav_active');
    x.classList.remove('nav_active');

}

