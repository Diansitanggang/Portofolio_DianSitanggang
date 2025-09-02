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
  "images/kuliah.jpg",
  "images/Dian.png"
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
// ====== Open CV ======
function openCV() {
  window.open("files/CV-SQA-DianSitanggang.pdf", "_blank");
}
window.openCV = openCV;

// ====== Project Images ======
const projectImages = {
  project1: [
    'images/projects/TA.png',
    'images/projects/TA_1.png',
    'images/projects/TA_3.png',
    'images/projects/TA_2.png',
    'images/projects/TA_5.png',
    'images/projects/TA_4.png',
    'images/projects/TA_6.png'
  ],
  project2: [
    'images/projects/pa2.jpg',
    'images/projects/Pa2_1.png',
    'images/projects/Pa2_2.png', // typo ganti gng → png
    'images/projects/Pa2_3.jpg',
    'images/projects/Pa2_4.jpg'
  ],
  project3: [
    'images/projects/PA1_1.png',
    'images/projects/PA1_2.png',
    'images/projects/PA1_3.png',
    'images/projects/statistikPA1.png'
  ],
  project4: [
    'images/projects/Teknet_1.png',
    'images/projects/Teknet_2.png',
    'images/projects/Teknet_3.png',
    'images/projects/Teknet_4.png',
    'images/projects/Teknet_5.png',
    'images/projects/Teknet_6.png'
  ],
  project5: [
    'images/projects/p_1.png',
    'images/projects/p_2.png',
    'images/projects/p_3.png',
    'images/projects/p_4.png',
    'images/projects/p_5.png'
  ]
};

let currentIndex = 0;
let currentProject = "";

// ====== Modal Gallery ======
function openGallery(project, index = 0) {
  currentProject = project;
  currentIndex = index;
  document.getElementById("photoModal").style.display = "flex";
  document.getElementById("modalImage").src =
    projectImages[currentProject][currentIndex];
}

function closeGallery() {
  document.getElementById("photoModal").style.display = "none";
}

function changeSlide(n) {
  const images = projectImages[currentProject];
  currentIndex += n;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("modalImage").src = images[currentIndex];
}

// Tutup modal klik di luar gambar
window.onclick = function (event) {
  const modal = document.getElementById("photoModal");
  if (event.target === modal) {
    closeGallery();
  }
};

// ====== Reveal on Scroll ======
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
