const paraButtons = document.querySelectorAll(".para-btn");

paraButtons[0].classList.add("para-active");

for (let i = 0; i < paraButtons.length; i++) {
  paraButtons[i].addEventListener("click", (event) => {
    paraButtons.forEach((btn) => btn.classList.remove("para-active"));
    event.currentTarget.classList.add("para-active");
  });
}

// Softcore category buttons.

const softcoreButtons = document.querySelectorAll(".softcore-btn");
softcoreButtons[0].classList.add("active-tab");

for (let i = 0; i < softcoreButtons.length; i++) {
  softcoreButtons[i].addEventListener("click", (event) => {
    softcoreButtons.forEach((btn) => btn.classList.remove("active-tab"));
    event.currentTarget.classList.add("active-tab");
  });
}

// JS Code for reviews section

const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

let count = 0;
// const reviews = [
//   `<h2>Awesome guy</h2>
// <p>Good guy, took care of business</p>
// <h5>Robert Lockar...1 hour ago</h5>`,
//   `<h2>Brillient guy</h2>
// <p>Good guy, took care of business</p>
// <h5>Peter Parker...3 hour ago</h5>`,
//   `<h2>Tallented guy</h2>
// <p>Good guy, took care of business</p>
// <h5>Nice Lockar...5 hour ago</h5>`,
//   `<h2>Awesome guy</h2>
// <p>Good guy, took care of business</p>
// <h5>Robert Jonas...6 hour ago</h5>`,
//   `<h2>Excellent guy</h2>
// <p>Good guy, took care of business</p>
// <h5>Robert Lockar...1 hour ago</h5>`,
// ];

const reviews = [
  {
    header: "Awesome Guy",
    desc: "Good guy, took care of business",
    reviewer: "Robert Lockar...1 hour ago",
  },
  {
    header: "Brilliant guy",
    desc: "Good guy, took care of business",
    reviewer: "Peter Parker...3 hour ago",
  },
  {
    header: "Awesome guy",
    desc: "Good guy, took care of business",
    reviewer: "Robert Jonas...6 hour ago",
  },
  {
    header: "Tallented guy",
    desc: "Good guy, took care of business",
    reviewer: "Nice Lockar...5 hour ago",
  },
  {
    header: "Excellent guy",
    desc: "Good guy, took care of business",
    reviewer: "Robert Lockar...1 hour ago",
  },
];
const reviewHeader = document.getElementById("review-header");
const reviewDesc = document.getElementById("review-desc");
const reviewer = document.getElementById("reviewer");

const sliderCount = document.querySelectorAll(".slider-count");

const reviewBox = document.getElementById("review-box");

prevArrow.addEventListener("click", () => {
  if (count > 0) {
    count--;
    // reviewBox.innerHTML = reviews[count];
    reviewHeader.innerText = reviews[count]?.header;
    reviewDesc.innerText = reviews[count]?.desc;
    reviewer.innerText = reviews[count]?.reviewer;
    setActive(count);
  } else {
    count = 4;
    // reviewBox.innerHTML = reviews[count];
    reviewHeader.innerText = reviews[count]?.header;
    reviewDesc.innerText = reviews[count]?.desc;
    reviewer.innerText = reviews[count]?.reviewer;
    setActive(count);
  }
});

nextArrow.addEventListener("click", () => {
  if (count == 4) {
    count = 0;
    // reviewBox.innerHTML = reviews[count];
    reviewHeader.innerText = reviews[count]?.header;
    reviewDesc.innerText = reviews[count]?.desc;
    reviewer.innerText = reviews[count]?.reviewer;
    setActive(count);
  } else {
    count++;
    // reviewBox.innerHTML = reviews[count];
    reviewHeader.innerText = reviews[count]?.header;
    reviewDesc.innerText = reviews[count]?.desc;
    reviewer.innerText = reviews[count]?.reviewer;
    setActive(count);
  }
});

function setActive(num) {
  sliderCount.forEach((count) => {
    count.classList.remove("swipperCircle");
    count.classList.add("swipperCircleFill");
  });
  sliderCount[num].classList.remove("swipperCircleFill");
  sliderCount[num].classList.add("swipperCircle");
}
