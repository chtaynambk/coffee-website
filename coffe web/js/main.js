const head =document.querySelector(".head")
const header =document.querySelector(".header")
const scrollWatcher =document.createElement("div")
scrollWatcher.setAttribute('data-scroll-watcher', '');
head.before(scrollWatcher);
const navObserver =new IntersectionObserver((entries) => {
    head.classList.toggle('stiky-nav', !entries[0].isIntersecting )
});
navObserver.observe(scrollWatcher);


let span = document.querySelector(".up")

window.onscroll = function() {
    if(this.scrollY >= 500){
        span.classList.add("show")
    }else{
        span.classList.remove("show")
    }
};
span.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    });
};


let hamberg =document.querySelector(".menu__icon");
let navMenu =document.querySelector(".nav-menu");

hamberg.addEventListener("click", ()=>{
    navMenu.classList.toggle("show-menu");
    hamberg.classList.toggle("active");
    
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",
 () => {
    navMenu.classList.remove("show-menu");
    hamberg.classList.remove("active");
}));
document.onclick = function(e) {
    if(!hamberg.contains(e.target) && !navMenu.contains(e.target)){

        navMenu.classList.remove("show-menu");
        hamberg.classList.remove("active");
    }
};


const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".card-cos");
const firstCardWidth = carousel.querySelector(".reviews").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (3 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
