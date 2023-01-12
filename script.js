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

// var loader = document.querySelector(".big");
// window.addEventListener("DOMContentLoaded", function df() {
    //     setTimeout(() => {
        //         loader.style.display = "none";
        //     }, 4000);
        // })
        
        
        
        
        // const allLiTags = document.querySelectorAll(".nav-links_a li");
        // function playingSong() {
        //     for(let j = 0; j < 7; j++){
        //         console.log(j);
        //         //  let audioTag = allLiTags[j].querySelector(".audio-duration");
        //         //
        //         if(allLiTags[j].classList.contains("activex")){
        //             allLiTags[j].classList.remove("activex");
        //             // alert(1)
        //             // let's get that audio duration value and pass to .audio-duration innerText
        //         }
                
        //         // if there is an li tag which li index is equal to musicIndex
        //         // then this music is playing now and we'll style it
                
        //         //  if(allLiTags[j].getAttribute("li-index") == musicIndex){
        //             //      allLiTags[j].classList.add("activex");
        //             //     //  audioTag.innerText="playing"
        //             //  }
                    
        //             // adding on click attribute in all li tags
        //             allLiTags[j].setAttribute("onclick", "clicked(this)")
        //         }
        //     }
        //     playingSong()