// Opening shipping charge box
const openShippingChargeBoxIcon = document.getElementById(
  "open-shipping-charge-box"
);

openShippingChargeBoxIcon.addEventListener("click", () => {
  toggleShippingChargeBox();
});



// Shipping categories
const regularShippingCharge = 5;
const standardShippingCharge = 8;
const fastShippingCharge = 10;

// const shippingCategoryItems = document.querySelectorAll(".shipping-category");
const shippingCategory = document.getElementById('shipping-category');
const shippingCharge = document.getElementById('shipping-charge');
const regularCategory = document.getElementById('regular-category');
const standardCategory = document.getElementById('standard-category');
const fastCategory = document.getElementById('fast-category');

// Regular Delivery Category
regularCategory.addEventListener('click', () => {
  shippingCategory.innerText = 'Regular Delivery';
  shippingCharge.innerText = regularShippingCharge.toFixed(2);
  toggleShippingChargeBox();
  calculateCartsGrandTotal();
})

// Standard Delivery Category
standardCategory.addEventListener('click', () => {
  shippingCategory.innerText = 'Standard Delivery';
  shippingCharge.innerText = standardShippingCharge.toFixed(2);
  toggleShippingChargeBox();
  calculateCartsGrandTotal();
})

// Fast Delivery Category
fastCategory.addEventListener('click', () => {
  shippingCategory.innerText = 'Fast Delivery';
  shippingCharge.innerText = fastShippingCharge.toFixed(2);
  toggleShippingChargeBox();
  calculateCartsGrandTotal();
})



function toggleShippingChargeBox() {
  const shippingChargeBox = document.getElementById("shipping-charge-box");
  shippingChargeBox.classList.toggle("hidden");
}


// Increasing cart items and calculating sub-total and total price
const minusIconButtons = document.querySelectorAll(".minus-icon");
const plusIconButtons = document.querySelectorAll(".plus-icon");
const itemQuantityFields = document.querySelectorAll(".item-quantity");
const itemsPrice = document.querySelectorAll(".single-item-price");
const itemTotal = document.querySelectorAll(".item-price-total");

// For Cart Minus Button
for (let i = 0; i < minusIconButtons.length; i++) {
  minusIconButtons[i].addEventListener("click", (event) => {
    const currentBtn = event.currentTarget;
    const buttonsParentBox = currentBtn.parentNode;
    const theItemCard = buttonsParentBox.parentNode.parentNode;
    const singleItemPrice = parseInt(
      theItemCard.querySelector(".single-item-price").innerText
    );
    const itemTotalPriceField = theItemCard.querySelector(".item-price-total");
    const itemTotalPrice = parseInt(itemTotalPriceField.innerText);
    const itemQuantityField = theItemCard.querySelector(".item-quantity");
    const itemQuantity = parseInt(itemQuantityField.value);
    if (itemQuantity > 0) {
      itemQuantityField.value = itemQuantity - 1;
      itemTotalPriceField.innerText = itemTotalPrice - singleItemPrice;
      calculateCartsTotal();
      calculateCartsGrandTotal();
    } else {
      alert("Can't be reduced");
    }
  });
}

// For Cart Plus Button
for (let i = 0; i < plusIconButtons.length; i++) {
  plusIconButtons[i].addEventListener("click", (event) => {
    const currentBtn = event.currentTarget;
    const buttonsParentBox = currentBtn.parentNode;
    const theItemCard = buttonsParentBox.parentNode.parentNode;
    const singleItemPrice = parseInt(
      theItemCard.querySelector(".single-item-price").innerText
    );
    const itemTotalPriceField = theItemCard.querySelector(".item-price-total");
    const itemTotalPrice = parseInt(itemTotalPriceField.innerText);
    const itemQuantityField = theItemCard.querySelector(".item-quantity");
    const itemQuantity = parseInt(itemQuantityField.value);
    // Updating the value
    itemQuantityField.value = itemQuantity + 1;
    itemTotalPriceField.innerText = itemTotalPrice + singleItemPrice;
    calculateCartsTotal();
    calculateCartsGrandTotal();
  });
}

// For input field
for (let i = 0; i < itemQuantityFields.length; i++) {
  itemQuantityFields[i].addEventListener("input", (event) => {
    const quantity = event.target.value;
    if (quantity < 0) {
      alert("Negative value is not acceptable!");
      event.target.value = 0;
    } else {
      const currentBtn = event.currentTarget;
      const buttonsParentBox = currentBtn.parentNode;
      const theItemCard = buttonsParentBox.parentNode.parentNode;
      const singleItemPrice = parseInt(
        theItemCard.querySelector(".single-item-price").innerText
      );
      const itemTotalPriceField =
        theItemCard.querySelector(".item-price-total");
      itemTotalPriceField.innerText = quantity * singleItemPrice;
      calculateCartsTotal();
      calculateCartsGrandTotal();
    }
  });
}

// Calculating Total
function calculateCartsTotal() {
  const cartsTotalFields = document.querySelectorAll(".carts-total");
  const cartItems = document.querySelectorAll(".item-card");

  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const itemTotalPrice = parseInt(
      cartItems[i].querySelector(".item-price-total").innerText
    );
    total += itemTotalPrice;
  }
  cartsTotalFields.forEach((item) => {
    item.innerText = total;
  });
}

// Calculating SubTotal
function calculateCartsGrandTotal() {
  const grandTotalFields = document.querySelectorAll(".carts-grand-total");
  const cartsTotalField = document.querySelector(".carts-total");
  const cartsTotalPrice = parseInt(cartsTotalField.innerText);
  if (cartsTotalPrice > 0) {
    const shippingChargeField = document.getElementById("shipping-charge");
    const shippingChargePrice = parseInt(shippingChargeField.innerText);

    const grandTotal = cartsTotalPrice + shippingChargePrice;
    grandTotalFields.forEach((item) => {
      item.innerText = grandTotal;
    });
  } else {
    grandTotalFields.forEach((item) => {
      item.innerText = 0;
    });
  }
}
