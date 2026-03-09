const cards = document.querySelectorAll(".card");

let targetScroll = window.scrollY;
let currentScroll = window.scrollY;


/* -------------------------
   Smooth scroll interpolation
-------------------------- */

function animate() {

    // interpolation (smooth follow)
    currentScroll += (targetScroll - currentScroll) * 0.08;

    updateParallax(currentScroll);

    requestAnimationFrame(animate);
}

window.addEventListener("scroll", () => {
    targetScroll = window.scrollY;
});


/* -------------------------
   Parallax calculation
-------------------------- */

function updateParallax(scrollPosition){

    cards.forEach(card => {

        const img = card.querySelector(".parallax");

        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight && rect.bottom > 0){

            const center = rect.top + rect.height / 2;

            const offset = (center - windowHeight / 2) * 0.12;

            img.style.transform = `translateY(${offset}px) scale(1.2)`;

        }

    });

}

/* Email protection */

const user = "daniel";
const domain = "ekblad.es";

const email = user + "@" + domain;

const emailElement = document.getElementById("email");

emailElement.innerHTML = `<a href="mailto:${email}">${email}</a>`;


/* -------------------------
   Fade-in animation
-------------------------- */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }

    });

},{ threshold:0.25 });

cards.forEach(card => observer.observe(card));



animate();
