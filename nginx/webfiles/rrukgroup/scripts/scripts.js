// Listeners
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    setupMapSync();
    setupScroll();
    setTimeout(checkResolution, 50);

    const contactForm = document.querySelector('.contact-form');
    if (contactForm)
    {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            console.log(Object.fromEntries(formData));
        })
    }
});


// Functions
function setupScroll() {
    const headerSlider = document.querySelector('.headerSlider');
    const header = document.querySelector('header');
    const rrlogo = document.querySelector('.nav-logo');


    // OTHER PAGES, NO HEADERSLIDER
    if (!headerSlider)
    {
        const listItems = document.querySelectorAll('.nav-wrapper li a')
        const secondListItems = document.querySelectorAll('.dropdown-menu li a')
        const navButton = document.querySelector('.services-toggle')
        header.style.backgroundColor = 'white';
        rrlogo.src = "images/rrlogo.png";

        listItems.forEach(listItem => {
            listItem.style.color = 'black';
            navButton.style.color = 'black';
        })

        secondListItems.forEach(secondListItem => {
            secondListItem.style.color = 'white';
        })
    }

    // HOME PAGE
    window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
        rrlogo.src = "images/rrlogo.png";
    } else {
        header.classList.remove('scrolled');
        if (headerSlider){
            rrlogo.src = "images/rrlogo2.png";
        }
    }
});
}

// function getCurrentPage(){
//     const currentPath = window.location.pathname;
//     const pageNames = ["/pages", "/index",];
//     let lengths = document.querySelectorAll ('li a')
    
//     for (let i = 0; i < lengths.length; i++)
//     {
//         if (currentPath == pageNames[i])
//         {

//         }
//     }
// }

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

function setupMobileNav (){
    const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavButton = document.querySelector('.button.buttonNavMenuToggle');
    const mobileNavButtonIcon = document.querySelector('.button-mobile-nav-icon');
    const mobileMainMenu = document.querySelector('.mobile-main-menu');
    const mobileServicesMenu = document.querySelector('.mobile-services-menu');
    const mobileServicesToggle = document.querySelector('.mobile-services-toggle');
    const mobileBackButton = document.querySelector('.mobile-back-button')

    if (!mobileNavWrapper || !mobileNavButton || !mobileMainMenu || !mobileServicesMenu) {
        console.log("Mobile nav elements not found, aborting setup");
        return;
    }
    
    console.log("Setting up mobile nav");

    // Toggle main mobile nav
    mobileNavButton.addEventListener('click', () => {
        console.log("Mobile nav button clicked");
        mobileNavWrapper.classList.toggle('active');
        mobileNav.classList.toggle('active');
        mobileMainMenu.classList.toggle('active');
        if (mobileNavButtonIcon) mobileNavButtonIcon.classList.toggle('active');
    });

    // Show services submenu
    if (mobileServicesToggle) {
        mobileServicesToggle.addEventListener('click', () => {
            console.log("Mobile services clicked");
            mobileMainMenu.classList.toggle('active');
            mobileServicesMenu.classList.toggle('active');
        });
    }

    // Back button in services menu
    if (mobileBackButton) {
        mobileBackButton.addEventListener('click', () => {
            console.log("Mobile back button clicked");
            mobileMainMenu.classList.toggle('active');
            mobileServicesMenu.classList.toggle('active');
        });
    }
}

function checkResolution(){
    const width = window.innerWidth;
    console.log("Window width:", width);
    
    if (width <= 768) {
        console.log("Mobile resolution detected");

        // const servicesLink = document.querySelector('.services-link');
        // if (servicesLink) servicesLink.textContent = "Services";

        // const contactLink = document.querySelector('.contact-link');
        // if (contactLink) contactLink.textContent = "Contact";

        // const callLink = document.querySelector('.call-link');
        // if (callLink) callLink.textContent = "Call";

        const footerPolicies = document.querySelector('.footerPolicies');
        if (footerPolicies) footerPolicies.classList.add('hide'); // safer than toggle

        // Activate mobile nav
        setupMobileNav();
    }
}

