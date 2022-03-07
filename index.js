const nav = document.querySelector(".primary-navigation");  //ul element

const navToggle = document.querySelector(".mobile-nav-toggle");  // button

// when someone click the hamburger button
navToggle.addEventListener("click", () => {
    
    // check, whether it is open or closed
    const visibility = nav.getAttribute("data-visible");

    // if the nav is closed, open it
    if(visibility === "false") {    //gets returned as a string
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
    // if the nav is open, close it
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    }
    
})


