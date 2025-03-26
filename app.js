const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const prevButton = document.querySelector(".sliderArrow.prev");
const nextButton = document.querySelector(".sliderArrow.next");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      { code: "black", img: "./img/air.png" },
      { code: "darkblue", img: "./img/air2.png" },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      { code: "lightgray", img: "./img/jordan.png" },
      { code: "green", img: "./img/jordan2.png" },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      { code: "lightgray", img: "./img/blazer.png" },
      { code: "green", img: "./img/blazer2.png" },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      { code: "black", img: "./img/crater.png" },
      { code: "lightgray", img: "./img/crater2.png" },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      { code: "gray", img: "./img/hippie.png" },
      { code: "black", img: "./img/hippie2.png" },
    ],
  },
];

let chosenProduct = products[0];
let currentIndex = 0;

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Update slider and product section when clicking menu items
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    chosenProduct = products[index];
    updateProductDetails();
  });
});

// Update product image when clicking color options
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

// Highlight selected size
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "#3d5a80";
    size.style.color = "#e0e0e0";
  });
});

// Show/hide payment modal
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Slider navigation
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
  chosenProduct = products[currentIndex];
  updateProductDetails();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % products.length;
  wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
  chosenProduct = products[currentIndex];
  updateProductDetails();
});

// Function to update product details
function updateProductDetails() {
  currentProductTitle.textContent = chosenProduct.title;
  currentProductPrice.textContent = "$" + chosenProduct.price;
  currentProductImg.src = chosenProduct.colors[0].img; // Default to first color
  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = chosenProduct.colors[index].code;
  });
}

// Initialize with the first product
updateProductDetails();