// NAV BAR
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// CART REMOVE Function
function removeItem(itemId) {
  var item = document.getElementById(itemId);
  item.parentNode.removeChild(item);
  updateSummary();
}

function updateSummary() {
  var items = document.querySelectorAll('.cart-item');
  var subtotal = 0;

  items.forEach(function(item) {
      var priceElement = item.querySelector('.cart-item-price');
      var quantityElement = item.querySelector('.quantity-input');
      var price = parseFloat(priceElement.textContent.replace('$', ''));
      var quantity = parseInt(quantityElement.value);
      subtotal += price * quantity;
  });

  var shipping = items.length > 0 ? 5.00 : 0;
  var total = subtotal + shipping;

  document.querySelector('.summary-item span').textContent = '$' + subtotal.toFixed(2);
  document.querySelector('.summary-total span').textContent = '$' + total.toFixed(2);
}
