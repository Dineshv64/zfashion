/*sidenavbar-display property*/

var sidenav = document.querySelector(".side-nav")

function showNavbar()
{
    sidenav.style.left="0%"
    
    
}
function closenavbar()
{
    sidenav.style.left="-60%"
}


const loginpage = document.querySelector(".login-container")
function loginopen()
{
    loginpage.style.display ="block"
}
function loginclose()
{
    loginpage.style.display ="none"
}