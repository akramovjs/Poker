const animatsiya = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-links_a li");
    const ext = document.querySelector(".ext")


    // listeners

    burger.addEventListener("click", () =>{
        nav.classList.toggle("nav-active");
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation="";
            }else{
              link.style.animation = `move 0.5s ease forwards ${index / 5 + 0.35}s`; 
            }
        });

        //Animated burger
        burger.classList.toggle("toggle");
    })
    ext.addEventListener("click", ()=>{
        nav.classList.remove("nav-active")
    })
}

animatsiya();