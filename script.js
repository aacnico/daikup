const navExpand = document.querySelector(".CI-expand");
const labelcb = document.querySelector(".label-cb");
const body = document.getElementById("body");
const collItems = document.querySelectorAll(".coll-item");
const clickHere = document.querySelector(".click-here");

const lanEs = document.getElementById("lanEs");
const lanEn = document.getElementById("lanEn");

lanEn.addEventListener("click", () => {
    localStorage.setItem("english", "en");
    window.location.href = "/en";
});

lanEs.addEventListener("click", () => {
    localStorage.setItem("spanish", "es");
    window.location.href = "/";
});

collItems.forEach(item => {
    const collImg = item.querySelector(".CI-img");
    const collTxt = item.querySelector(".CI-txt");

    collImg.addEventListener("click", () => {
        const x = collImg.dataset.x;
        const txtX = collTxt.dataset.x;

        collImg.style.setProperty("--x", x);
        collTxt.style.setProperty("--x", txtX);

        collImg.classList.toggle("collActive");
        collTxt.classList.toggle("collTxtActive");

        collImg.classList.toggle("collFront");
        collTxt.classList.toggle("collFront");

        clickHere.classList.toggle("click-here-active")

        navExpand.classList.toggle("expand-act");
        body.classList.toggle("sc")
        
        item.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
    });
});

labelcb.addEventListener("click", () => {
    navExpand.classList.remove("expand-act");
    body.classList.remove("sc")

    document.querySelectorAll(".CI-img").forEach(img => {
        img.classList.remove("collActive", "collFront");
    });

    document.querySelectorAll(".CI-txt").forEach(txt => {
        txt.classList.remove("collTxtActive", "collFront");
    });
});

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: "true",
    speed: 800,
    touchRatio: 0.5,
    slidesPerView: "auto",

    coverflowEffect: {
        rotate: 0,     
        stretch: 1,   
        depth: 120,   
        modifier: 1,
        scale: 1,   
        slideShadows: true,
    }
});

const elementos = document.querySelectorAll('.elemento');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

elementos.forEach(elemento => observer.observe(elemento));

const hero = document.querySelector('#hero');

const imagenes = [
    'assets/daikup-banner.webp',
    'assets/daikup-banner2.webp'
];

let indice = 0;

if (window.matchMedia('(min-width: 768px)').matches) {

    setInterval(() => {
        hero.classList.add('cambiando');

        setTimeout(() => {
            indice = (indice + 1) % imagenes.length;

            hero.style.backgroundImage = `
                linear-gradient(to top, #000000, #00000048, transparent),
                url("${imagenes[indice]}")
            `;

            hero.classList.remove('cambiando');

        }, 600);

    }, 60000);
}