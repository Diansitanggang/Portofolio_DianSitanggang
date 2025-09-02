// ===== Simple SPA navigation =====
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav a, [data-go]");


// ===== ScrollSpy Navbar =====
const sections = document.querySelectorAll("section.page");
const navItems = document.querySelectorAll(".nav a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.6 }); // 60% visible dianggap aktif

sections.forEach(sec => observer.observe(sec));


// ===== Hero rotator =====
// ===== Hero rotator A (3 detik) =====
const imagesA = [
  "images/FotoDian.png",
  "images/AnimasiSQA2.png",
  "images/AnimasiSQA.png"
];
const heroImgA = document.getElementById("heroImageA");

if (heroImgA) {
  let idxA = 0;
  setInterval(() => {
    heroImgA.classList.add("rotate");
    setTimeout(() => {
      idxA = (idxA + 1) % imagesA.length;
      heroImgA.src = imagesA[idxA];
      heroImgA.classList.remove("rotate");
    }, 300);
  }, 2000); 
}

// ===== Hero rotator B =====
const imagesB = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg"
];
const heroImgB = document.getElementById("heroImageB");

if (heroImgB) {
  let idxB = 0;
  setInterval(() => {
    heroImgB.classList.add("rotate");
    setTimeout(() => {
      idxB = (idxB + 1) % imagesB.length;
      heroImgB.src = imagesB[idxB];
      heroImgB.classList.remove("rotate");
    }, 300);
  }, 1000); 
}


// ===== Open CV (adjust your file path) =====
function openCV(){
  window.open("files/CV-SQA-DianSitanggang.pdf", "_blank");
}
window.openCV = openCV;

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add("show");
      io.unobserve(e.target);
    }
  });
},{threshold: .15});
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

//eduya
// Ambil semua education item
const eduItems = document.querySelectorAll(".edu");

eduItems.forEach(item => {
  // efek saat mouse masuk
  item.addEventListener("mouseenter", () => {
    item.classList.add("hovered");
  });

  // efek saat mouse keluar
  item.addEventListener("mouseleave", () => {
    item.classList.remove("hovered");
  });
});


