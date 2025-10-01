// Listeners
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const rrlogo = document.querySelector('.nav-logo');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
        rrlogo.src = "images/rrlogo.png";
    } else {
        header.classList.remove('scrolled');
        rrlogo.src = "images/rrlogo2.png";
    }
});


// Functions
function getCurrentPage(){
    const currentPath = window.location.pathname;
    const pageNames = ["/pages", "/index",];
    let length = pageNames.length;
    let lengths = document.querySelectorAll ('li a')
    
    for (let i = 0; i < lengths.length; i++)
    {
        if (currentPath == pageNames[i])
        {

        }
    }
}