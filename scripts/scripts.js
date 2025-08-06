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