/* ==========================================
          MAYAS PORTFOLIO V2
         JavaScript Main File
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

/* ==========================================
      Loading Screen
========================================== */

const loader=document.getElementById("loader");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},2500);

});

/* ==========================================
      Typewriter Effect
========================================== */

const typing=document.getElementById("typing");

if(typing){

const words=[

"Cybersecurity",

"Artificial Intelligence",

"Information Technology",

"Machine Learning",

"GRC",

"SOC"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function typeEffect(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

}

/* ==========================================
      Back To Top
========================================== */

const topBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

});
/* ==========================================
      Scroll Reveal Animation
      إظهار العناصر عند النزول
========================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
      Mouse Glow Effect
      تأثير إضاءة يتبع الماوس
========================================== */

const glow = document.querySelector(".mouse-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

}

/* ==========================================
      Active Navbar
      تلوين الرابط الحالي أثناء التمرير
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
      Navbar Shadow
      إضافة ظل عند النزول
========================================== */

const navbar = document.querySelector(".nav-glass");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});
/* ==========================================
      Dark / Light Mode
      تغيير الوضع الليلي والنهاري
========================================== */

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light-mode")) {

            if (icon) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }

            localStorage.setItem("theme", "light");

        } else {

            if (icon) {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }

            localStorage.setItem("theme", "dark");

        }

    });

}

/* ==========================================
      حفظ الوضع المختار
========================================== */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    if (themeBtn) {

        const icon = themeBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        }

    }

}

/* ==========================================
      Animated Counters
      عدادات الإنجازات
========================================== */

const counters = document.querySelectorAll(".stat-number");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const speed = target / 80;

    function updateCounter() {

        if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;

        }

    }

    updateCounter();

});

/* ==========================================
      Skill Bars Animation
      تحريك أشرطة المهارات
========================================== */

const bars = document.querySelectorAll(".progress span");

bars.forEach(bar => {

    const width = bar.dataset.width;

    bar.style.width = "0";

    setTimeout(() => {

        bar.style.width = width + "%";

    }, 400);

});
/* ==========================================
      Card Hover Effect
      حركة بسيطة للكروت
========================================== */

const cards = document.querySelectorAll(

".glass-card,.project-card,.skill-card,.cert-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--x",x+"px");

        card.style.setProperty("--y",y+"px");

    });

});

/* ==========================================
      Smooth Anchor Links
      الانتقال السلس للأقسام
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/* ==========================================
      Hero Floating Animation
      تحريك كرت البداية بشكل خفيف
========================================== */

const heroCard=document.querySelector(".hero-card");

if(heroCard){

let angle=0;

setInterval(()=>{

angle+=0.01;

heroCard.style.transform=

`translateY(${Math.sin(angle)*8}px)`;

},30);

}

/* ==========================================
      Console Welcome Message
      رسالة للمطور داخل المتصفح
========================================== */

console.log("%cWelcome to Mayas Portfolio",

"color:#38bdf8;font-size:20px;font-weight:bold;");

console.log("%cCybersecurity • AI • Information Technology",

"color:#8b5cf6;font-size:14px;");

console.log("%cDeveloped with ❤️",

"color:#10b981;font-size:14px;");
/* ==========================================
      Matrix Rain Effect
      خاص بصفحة Cybersecurity
========================================== */

const matrixCanvas = document.getElementById("matrix");

if(matrixCanvas){

const ctx = matrixCanvas.getContext("2d");

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const letters = "01010101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = Math.floor(matrixCanvas.width / fontSize);

const drops = [];

for(let i = 0; i < columns; i++){

drops[i] = 1;

}

function drawMatrix(){

ctx.fillStyle = "rgba(3,7,18,0.08)";
ctx.fillRect(0,0,matrixCanvas.width,matrixCanvas.height);

ctx.fillStyle = "#0ea5e9";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){

const text = letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > matrixCanvas.height && Math.random()>0.975){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(drawMatrix,35);

window.addEventListener("resize",()=>{

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

});

}
/* ==========================================
      AI Floating Nodes
      خاص بصفحة الذكاء الاصطناعي
========================================== */

const aiNodes = document.querySelectorAll(".ai-node");

aiNodes.forEach((node,index)=>{

node.style.animationDelay=(index*.4)+"s";

});



/* ==========================================
      Floating Icons
========================================== */

const floatingIcons=document.querySelectorAll(".floating-icon");

floatingIcons.forEach((icon,index)=>{

icon.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-20px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3000+(index*500),

iterations:Infinity

});

});
/* ==========================================
      Certificate Hover Glow
========================================== */

const certificates=document.querySelectorAll(".flip-card");

certificates.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 35px rgba(14,165,233,.45)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});


/* ==========================================
      Project Hover Animation
========================================== */

const projects=document.querySelectorAll(".project-card");

projects.forEach(project=>{

project.addEventListener("mouseenter",()=>{

project.style.transform="translateY(-12px) scale(1.02)";

});

project.addEventListener("mouseleave",()=>{

project.style.transform="translateY(0)";

});

});
/* ==========================================
      Page Ready
========================================== */

window.addEventListener("load",()=>{

console.log("Portfolio Loaded Successfully");

});


/* ==========================================
      Disable Right Click (اختياري)
========================================== */

// إذا ما تبغيه احذفي هذا الجزء

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});


/* ==========================================
      Disable Drag Images
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});


/* ==========================================
      End of File
========================================== */

console.log("%c===================================",
"color:#38bdf8");

console.log("%c Mayas Portfolio V2",
"color:#38bdf8;font-size:18px;font-weight:bold;");

console.log("%c Cybersecurity | AI | IT",
"color:#8b5cf6;font-size:15px;");

console.log("%c===================================",
"color:#38bdf8");
