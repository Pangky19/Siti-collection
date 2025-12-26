// LOGIN BUTTON HOVER
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("mouseenter", () => {
    loginBtn.style.transform = "scale(1.08)";
});
loginBtn.addEventListener("mouseleave", () => {
    loginBtn.style.transform = "scale(1)";
});

// DATA PRODUK SLIDER UTAMA
const products = [
    {
        img: "assets/img1.jpg",
        name: "Blouse Lavender",
        desc: "Blouse pastel lembut dengan bahan adem dan jatuh cantik.",
        price: "Rp 150.000"
    },
    {
        img: "assets/img2.jpg",
        name: "Blouse Sakura",
        desc: "Motif floral lembut dan feminin.",
        price: "Rp 165.000"
    },
    {
        img: "assets/img3.jpg",
        name: "Blouse Ruffle Pink",
        desc: "Detail ruffle manis dan elegan.",
        price: "Rp 175.000"
    }
];

let index = 0;

const img = document.getElementById("productImg");
const nameEl = document.getElementById("productName");
const descEl = document.getElementById("productDesc");
const priceEl = document.getElementById("productPrice");

document.querySelector(".left").onclick = () => slide(-1);
document.querySelector(".right").onclick = () => slide(1);

function slide(dir) {
    index = (index + dir + products.length) % products.length;
    updateProduct();
}

function updateProduct() {
    img.classList.add("fade");
    setTimeout(() => {
        img.src = products[index].img;
        nameEl.textContent = products[index].name;
        descEl.textContent = products[index].desc;
        priceEl.textContent = products[index].price;
        img.classList.remove("fade");
    }, 300);
}

// KATEGORI AKTIF
document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".carousel-item");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let current = 1;
    let interval;

    function updateCarousel() {
        items.forEach((item, i) => {
            item.classList.toggle("active", i === current);
        });
    }

    function nextSlide() {
        current = (current + 1) % items.length;
        updateCarousel();
    }

    function prevSlide() {
        current = (current - 1 + items.length) % items.length;
        updateCarousel();
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000);
    }

    function resetAutoSlide(action) {
        clearInterval(interval);
        action();
        startAutoSlide();
    }

    nextBtn.addEventListener("click", () => resetAutoSlide(nextSlide));
    prevBtn.addEventListener("click", () => resetAutoSlide(prevSlide));

    startAutoSlide();

});
