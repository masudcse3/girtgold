//Increment and decrement fields

//Select the element with id
let IncrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");
let fieldText = document.getElementById("fieldText");
let priceField = document.getElementById("price-amount");

IncrementBtn.addEventListener("click", () => {
  let quantity = parseInt(fieldText.value);
  fieldText.value = quantity + 1;
  priceField.innerText = parseInt(fieldText.value) * 4;
});

decrementBtn.addEventListener("click", () => {
  let quantity = parseInt(fieldText.value);
  if (quantity <= 0) {
    alert("Negative value not allowed!");
  } else {
    fieldText.value = quantity - 1;
    priceField.innerText = parseInt(fieldText.value) * 4;
  }
});
//Increment and decrement fields

// const fieldText = document.getElementById('fieldText');

fieldText.addEventListener("input", (event) => {
  event.preventDefault();
  const quantity = event.target.value;
  if (!quantity) {
    priceField.innerText = 0;
  } else if (quantity < 0) {
    priceField.innerText = 0;
    alert("Negative value is not acceptable!");
  } else {
    priceField.innerText = parseInt(fieldText.value) * 4;
  }
});

//tab buttons click then fire the text field
let firstBtn = document.getElementById("firstBtn");
let secondBtn = document.getElementById("secondBtn");
let thirdBtn = document.getElementById("thirdBtn");
let fourthBtn = document.getElementById("fourthBtn");
//server details id selected
let serverId = document.getElementById("server-id");
let delivery = document.getElementById("delivery");
let amount = document.getElementById("amount");

//add event listeners on the buttons
firstBtn.addEventListener("click", () => {
  serverId.innerText = "Season 1 -Softcore";
  delivery.innerText = "Face To Face";
  amount.innerText = `${priceField.innerText} M`;
});

secondBtn.addEventListener("click", () => {
  serverId.innerText = "Season 1 -Hardcore";
  delivery.innerText = "Online To camera";
  amount.innerText = `${priceField.innerText} M`;
});

thirdBtn.addEventListener("click", () => {
  serverId.innerText = "Eternal  -Softcore";
  delivery.innerText = "Live Show";
  amount.innerText = `${priceField.innerText} M`;
});
fourthBtn.addEventListener("click", () => {
  serverId.innerText = "Eternal  -Hardcore";
  delivery.innerText = "Face To Face";
  amount.innerText = `${priceField.innerText} M`;
});



// Setting styles for the active sub-filter buttons like 20M, 100M, 50M.
const subCategories = document.querySelectorAll('.sub-category');
subCategories[0].classList.add('bg-[#51c18b]');

for(let i=0; i<subCategories.length; i++) {
  subCategories[i].addEventListener('click', (event) => {
    // Clearing all other items background that are not active
    subCategories.forEach((item) => {
      item.classList.remove("bg-[#51c18b]");
    });  
    // Setting the clicked items background color.
    event.currentTarget.classList.add('bg-[#51c18b]');
  })
}


//button active
function addAnchor(
  goldId,
  silverId,
  silverId2,
  goldTitle,
  silverTitle1,
  SilverTitle2
) {
  document.getElementById(
    goldId
  ).innerHTML = `<a href="#" class="p-2 py-3 text-[10px] md:w-[120px] h-[44px] text-center rounded-[300px] md:p-[11px] lg:px-[17px] lg:py-[11px] md:text-[13px] leading-[22px] bg-[#FCAB00] font-bold text-[#27213C]">${goldTitle}</a>`;
  document.getElementById(
    silverId
  ).innerHTML = `<a href="#" class="p-2 py-3 text-[10px] md:w-[120px] h-[44px] text-center rounded-[300px] md:p-[11px] lg:px-[17px] lg:py-[11px] md:text-[13px] leading-[22px] bg-[#FFFFFF33] font-bold text-[#FFFFFF]">${silverTitle1}</a>`;
  document.getElementById(
    silverId2
  ).innerHTML = `<a href="#" class="p-2 py-3 text-[10px] md:w-[120px] h-[44px] text-center rounded-[300px] md:p-[11px] lg:px-[17px] lg:py-[11px] md:text-[13px] leading-[22px] bg-[#FFFFFF33] font-bold text-[#FFFFFF]">${SilverTitle2}</a>`;
}
//card buttons tab functionality
const buttons = document.querySelectorAll(".btns");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("bg-[#51c18b]"); // Remove the active background color
      btn.classList.remove("text-black");
      btn.classList.add("bg-[#27284A]"); // Remove the active text color
    });

    button.classList.add("bg-[#51c18b]"); // Add the active background color
    button.classList.add("text-black"); // Add the active text color
  });
});

let million20 = document.getElementById("20million");
let million50 = document.getElementById("50million");
let million100 = document.getElementById("100million");
let million200 = document.getElementById("200million");
let million300 = document.getElementById("300million");
let million500 = document.getElementById("500million");


million20.addEventListener("click", () => {
  amount.innerText = "20 M";
  priceField.innerText = 20 * 4;
});
million50.addEventListener("click", () => {
  amount.innerText = "50 M";
  priceField.innerText = 50 * 4;
});
million100.addEventListener("click", () => {
  amount.innerText = "100 M";
  priceField.innerText = 100 * 4;
});
million200.addEventListener("click", () => {
  amount.innerText = "200 M";
  priceField.innerText = 200 * 4;
});
million300.addEventListener("click", () => {
  amount.innerText = "300 M";
  priceField.innerText = 300 * 4;
});
million500.addEventListener("click", () => {
  amount.innerText = "500 M";
  priceField.innerText = 500 * 4;
});
