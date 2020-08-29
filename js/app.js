const hamburgerMenu = document.getElementById("hamburger");
const mobileLi = document.querySelector(".collapsible");
const overlay = document.querySelector(".overlay");
const body = document.body;

// event listeners
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("change");

    mobileLi.classList.toggle("collapsed");

    overlay.classList.toggle("showOverlay");

    body.classList.toggle("noScroll");
});

/* ==============================================================
show navbar when scroll up, hide when scroll down
*/
const doc = document.documentElement;
const w = window;

let curScroll = w.scrollY || doc.scrollTop;
let prevScroll = w.scrollY || doc.scrollTop;
let curDirection = 0;
let prevDirection = 0;

const header = document.querySelector(".navbar");

const threshold = 200;
let toggled;

const checkScroll = () => {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
        // scrolled down
        curDirection = 2;
    } else {
        // scrolled up
        curDirection = 1;
    }

    if (curDirection !== prevDirection) {
        toggled = toggleHeader();
    }

    if (toggled) {
        prevDirection = curDirection;
    }

    prevScroll = curScroll;
};

const toggleHeader = () => {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
        header.classList.add("hide");
    } else if (curDirection === 1) {
        header.classList.remove("hide");
    } else {
        toggled = false;
    }
    return toggled;
};

window.addEventListener("scroll", checkScroll);
//================================================================



// // shorter version:
// // show navbar when scroll up, hide when scroll down

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollpos = window.pageYOffset;
//     if (prevScrollpos > currentScrollpos) {
//         document.querySelector(".navbar").style.top = "0";
//     } else {
//         document.querySelector(".navbar").style.top = "-130px";
//     }

//     prevScrollpos = currentScrollpos;
// };
