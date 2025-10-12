// Listeners
document.addEventListener("DOMContentLoaded", function () {
    setupMapSync();
    checkResolution();
});

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
    let lengths = document.querySelectorAll ('li a')
    
    for (let i = 0; i < lengths.length; i++)
    {
        if (currentPath == pageNames[i])
        {

        }
    }
}

function setupMapSync(){
    const pins = document.querySelectorAll('.map-pin')
    const sites = document.querySelectorAll('.site-item')

    pins.forEach(pin => {
        const siteId = pin.dataset.site;
        const matchingItem = document.querySelector(`.site-item[data-site="${siteId}"]`);
        if (!matchingItem) return;

        pin.addEventListener('mouseenter', () => {
            pin.classList.add('active');
            matchingItem.classList.add('active');
        });

        pin.addEventListener('mouseleave', () => {
            pin.classList.remove('active');
            matchingItem.classList.remove('active');
        });
    })

    sites.forEach(site => {
        const siteId = site.dataset.site;
        const matchingItem = document.querySelector(`.map-pin[data-site="${siteId}"]`);
        if (!matchingItem) return;

        site.addEventListener('mouseenter', () => {
            site.classList.add('active');
            matchingItem.classList.add('active');
        })
        site.addEventListener('mouseleave', () => {
            site.classList.remove('active');
            matchingItem.classList.remove('active');
        })
    })
}

function checkResolution(){
    let width = window.innerWidth;
    
    switch(true) {
        case width <= 768:
            const servicesLink = document.querySelector('.services-link');
            servicesLink.textContent = "Services";

            const contactLink = document.querySelector('.contact-link');
            contactLink.textContent = "Contact";

            const callLink = document.querySelector('.call-link');
            callLink.textContent = "Call";
            break;

    }
}