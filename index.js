// --------- Category Menu in large device ----------- Category Menu in large device -----------//
// ----- Start ---------- Start ---------- Start ------------- Start ----------- Start ------- //

// ---------------------- Selecting category when clicked for large devices  ------------------ //
const categoryItems = document.querySelectorAll(".category-item");
categoryItems[0].classList.add("selected-category");
categoryItems[0].parentNode.classList.add("border-opacity-0");

for (let i = 0; i < categoryItems.length; i++) {
  categoryItems[i].addEventListener("click", (event) => {
    // removing selected class from other elements
    categoryItems.forEach((item) => {
      item.parentNode.classList.remove("border-opacity-0");
      item.parentNode.classList.add("border-opacity-10");
      item.classList.remove("selected-category");
    });
    // Add the "selected-category" class to the clicked element
    event.currentTarget.classList.add("selected-category");
    event.currentTarget.parentNode.classList.remove("border-opacity-10");
    event.currentTarget.parentNode.classList.add("border-opacity-0");
  });
}

// ---------------------- Selecting category when clicked for mobile devices  ------------------ //
const categoryItemsMobile = document.querySelectorAll(".category-item-mobile");
categoryItemsMobile[0].classList.add("selected-category-mobile");
categoryItemsMobile[0].parentNode.classList.add("border-opacity-0");
// Toggling Category menus under Enjoy Dragonflight Season 2!
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

for (let i = 0; i < categoryItemsMobile.length; i++) {
  categoryItemsMobile[i].addEventListener("click", (event) => {
    // removing selected class from other elements
    categoryItemsMobile.forEach((item) => {
      item.parentNode.classList.remove("border-opacity-0");
      item.parentNode.classList.add("border-opacity-10");
      item.classList.remove("selected-category-mobile");
    });
    
    // Add the "selected-category" class to the clicked element
    event.currentTarget.classList.add("selected-category-mobile");
    event.currentTarget.parentNode.classList.remove("border-opacity-10");
    event.currentTarget.parentNode.classList.add("border-opacity-0");

    // Hiding the menu when clicked
    mobileMenu.classList.toggle("hidden");
  });
}
// --------- Category Menu in large device ----------- Category Menu in large device -----------//
// ----- END ---------- END ---------- END ------------- END ----------- END ------- //

// ------------------------------------------------------------------------------------------- //

// --------- Filter Menu in large device ----------- Filter Menu in large device -----------//
// ----- Start ---------- Start ---------- Start ------------- Start ----------- Start ------- //

const cardsSection = document.getElementById("cards-section");
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons[0].classList.add("selected");
for (let i = 0; i < filterButtons.length; i++) {
    console.log(filterButtons[i]);
  filterButtons[i].addEventListener("click", (event) => {
    // Remove the "selected" class from all elements with class "filter-btn"
    filterButtons.forEach((btn) => btn.classList.remove("selected"));

    // Add the "selected" class to the clicked element
    event.currentTarget.classList.add("selected");
    const text = event.target.innerText.toString();
  });
}


// --------- Filter Menu in large device ----------- Filter Menu in large device -----------//
// ----- END ---------- END ---------- END ------------- END ----------- END ------- //

// Settings for Reviews Slider
$(document).on("ready", function () {
  $(".regular").slick({
    centerMode: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".prev-arrow"),
    nextArrow: $(".next-arrow"),
    responsive: [
      {
        breakpoint: 1900, // Large devices breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400, // Large devices breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900, // Medium devices breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Settings for Blogs Slider
$(document).on("ready", function () {
  $(".blogs").slick({
    centerMode: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1900, // Large devices breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400, // Large devices breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900, // Medium devices breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Reviews Sections arrow icons functionality

const arrows = document.querySelectorAll(".arrows");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (event) => {
    arrows.forEach((item) => item.classList.add("opacity-40"));
    event.currentTarget.classList.toggle("opacity-40");
  });
}

// Featured boxes Slider and Image changes Functionality


const featuredImages = [
  "./assets/Rectangle-11.png",
  "./assets/featured-iamge-2.webp",
  "./assets/Rectangle-11.png",
];

const featuredImageElement = document.getElementById("featured-image");
const featureBoxes = document.querySelectorAll(".feature-box");
let elementIndex = 0;

// Selecting active featured box based on user clicked;
for (let i = 0; i < featureBoxes.length; i++) {
  featureBoxes[i].addEventListener("click", () => {
    elementIndex = i;
    activeFeatureBox(featureBoxes[i], elementIndex);
  });
}

function selectActiveFeatureBox() {
  if (elementIndex > 2) {
    elementIndex = 0;
    activeFeatureBox(featureBoxes[elementIndex], elementIndex);
    elementIndex++;
  } else {
    activeFeatureBox(featureBoxes[elementIndex], elementIndex);
    elementIndex++;
  }
}

selectActiveFeatureBox();
setInterval(() => selectActiveFeatureBox(), 3200);

function activeFeatureBox(featureBox, elementIndex) {
  clearClasses();
  featuredImageElement.setAttribute("src", featuredImages[elementIndex]);
  featureBox.classList.remove("feature-box-bg-not-active");
  featureBox.classList.add("feature-box-bg-active");
  const innerBox = featureBox.querySelector("#feature-inner-box");
  innerBox.classList.remove("feature-box-border");
  innerBox.classList.add("feature-box-loader");
  featureBox.querySelector('.description').classList.remove('hidden');
}

function clearClasses() {
  featureBoxes.forEach((box) => {
    box.classList.remove("feature-box-bg-active");
    box.classList.add("feature-box-bg-not-active");
    const innerBox = box.querySelector("#feature-inner-box");
    innerBox.classList.remove("feature-box-loader");
    innerBox.classList.add("feature-box-border");
    box.querySelector('.description').classList.add('hidden');
  });
}
