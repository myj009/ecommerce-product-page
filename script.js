const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');
  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    primaryNav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

const addItem = document.querySelector('.add-item');
const subtractItem = document.querySelector('.subtract-item');
const itemQuantity = document.querySelector('.item-quantity');
subtractItem.addEventListener('click', () => {
  if (itemQuantity.innerHTML > 0) {
    itemQuantity.innerHTML--;
  }
});
addItem.addEventListener('click', () => {
  itemQuantity.innerHTML++;
});

const addToCart = document.querySelector('.add-to-cart');
const fullCart = document.querySelector('.full-cart');
const emptyCart = document.querySelector('.empty-cart');
const cartItemQuantity = document.querySelector('.cart-item-quantity');
const cartItemTotal = document.querySelector('.cart-item-total');
const cartItemQuant = document.querySelector('.cart-item-quant');
addToCart.addEventListener('click', () => {
  const quantity = parseInt(itemQuantity.innerHTML);
  if (quantity > 0) {
    fullCart.classList.remove('hidden');
    emptyCart.classList.add('hidden');
    fullCart.classList.add('flex');
    emptyCart.classList.remove('flex');
    cartItemQuantity.innerHTML = quantity;
    cartItemQuant.innerHTML = quantity;
    cartItemQuant.classList.remove('hidden');
    const amount = (quantity * 125.00).toFixed(2);
    cartItemTotal.innerHTML = `$` + amount;
  } else {
    fullCart.classList.add('hidden');
    emptyCart.classList.remove('hidden');
    fullCart.classList.remove('flex');
    emptyCart.classList.add('flex');
    cartItemQuant.classList.add('hidden');
  }
});

const cartDeleteButton = document.querySelector('.cart-delete-button');
cartDeleteButton.addEventListener('click', () => {
  fullCart.classList.add('hidden');
  emptyCart.classList.remove('hidden');
  fullCart.classList.remove('flex');
  emptyCart.classList.add('flex');
  cartItemQuant.classList.add('hidden');
});

//onclick handler on all elements which have thumbnail class
//when clicked, change the src of the main image to the src of the thumbnail
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src;
    //get parent div of thumbnail
    const parent = thumbnail.parentElement;
    const currentActiveImage = document.querySelector('.active-image-div');
    currentActiveImage.classList.remove('active-image-div');
    parent.classList.add('active-image-div');
  });
});

const cartPopup = document.querySelector('.cart-popup');
const mainCart = document.querySelector('.main-cart');
mainCart.addEventListener('click', () => {
  cartPopup.classList.toggle('hidden');
  cartPopup.classList.toggle('flex');
});

const activNav = document.querySelector('.active-nav');
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const currentActiveLink = document.querySelector('.active-nav');
    currentActiveLink.classList.remove('active-nav');
    link.classList.add('active-nav');
  });
});

// Create an array of image links
const mobileImageLinks = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg',
];

const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
nextButton.addEventListener('click', () => {
  const currentActiveImage = document.querySelector('.mobile-image');
  const currentImage = currentActiveImage.getAttribute('data-image');
  const currentImageNumber = parseInt(currentImage);
  newImageNumber = (currentImageNumber + 1)%4;
  currentActiveImage.src = mobileImageLinks[newImageNumber];
  currentActiveImage.setAttribute('data-image', newImageNumber);
});