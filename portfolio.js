
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
        })
    );
});



        // go to top button
        let goToTopBtn = document.getElementById("goToTopBtn");
        
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if(document.body.scrollTop >20 || document.documentElement.scrollTop >20){
                goToTopBtn.style.display = "block";
            }else{
                goToTopBtn.style.display = "none";
            }
        }

        goToTopBtn.onclick = function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        function showSidebar(){
            const sidebar = document.querySelector('.nav');
            sidebar.style.display = 'flex';
        }