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
  ).innerHTML = `<a href="#" class="w-[120px] h-[44px] text-center rounded-[300px] border p-[11px] lg:px-[17px] lg:py-[11px] border-[#FCAB00] bg-[#FCAB00] text-[13px] leading-[22px] font-bold text-[#27213C]">${goldTitle}</a>`;
  document.getElementById(
    silverId
  ).innerHTML = `<a href="#" class="w-[120px] h-[44px] text-center rounded-[300px] p-[11px] lg:px-[17px] lg:py-[11px] bg-[#FFFFFF33] text-[#FFFFFF] text-[13px] leading-[22px] font-bold">${silverTitle1}</a>`;
  document.getElementById(
    silverId2
  ).innerHTML = `<a href="#" class="w-[120px] h-[44px] text-center rounded-[300px] p-[11px] lg:px-[17px] lg:py-[11px] bg-[#FFFFFF33] text-[#FFFFFF] text-[13px] leading-[22px] font-bold">${SilverTitle2}</a>`;
}

function languageChange(actual, previous, active, inactive, totalOffer) {
  document.getElementById(previous).removeAttribute('class');
  document
    .getElementById(previous)
    .setAttribute(
      'class',
      'w-[53px] h-[48px] py-[12px] pr-[27px] pl-[20px] justify-center items-center text-white text-[13px] font-bold leading-[22px]'
    );
  document.getElementById(actual).removeAttribute('class');
  document
    .getElementById(actual)
    .setAttribute(
      'class',
      'flex h-[46px] px-[17px] py-[11px] items-center rounded-[300px] border border-[#FCAB00] bg-[#FCAB00] text-[#27213C] text-[13px] font-bold leading-[22px]'
    );
  removeClassList(active, inactive);
  document.querySelector('.total-offer').innerHTML = totalOffer;
}

function changeClick(active, changeData, showData) {//TODO: no use, you can delete this function
  const imageElement = document.getElementById(active);
  document.getElementById(showData).classList.toggle('hidden');
  document.getElementById(changeData).classList.remove('hidden');

  // Toggle the "hidden" class on the image element
  imageElement.classList.toggle('hidden');

  // Get the parent span element of the image
  const spanElement = imageElement.parentElement;

  // Check if the image is visible (not hidden)
  if (!imageElement.classList.contains('hidden')) {
    // If the image is visible, set the span's background color to #FCAB00
    spanElement.style.backgroundColor = '#FCAB00';
  } else {
    // If the image is hidden, set the span's background color to another color
    // You can replace "#ANOTHER_COLOR" with the color code you want to use when the image is inactive
    spanElement.style.backgroundColor = '#FFD056';
  }
}

function changeFeaturedClick(active) {
  document.getElementById(active).classList.toggle('hidden');
}

// Feature Field JS Code
const featuredField = document.getElementById('featured-field');
const featuredItems = document.querySelectorAll('.featured-item');

featuredItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    featuredField.innerText = event.currentTarget.innerText;
    document.getElementById('dropdownFeaturedMenu').classList.add('hidden');
  });
});
//Banner Others Button Work
function removeClassList(active, inactive, optionalId, ownId) {
  const activeId = document.getElementById(active);
  const sectionHide = document.querySelectorAll(`.${inactive}`);
  for (let data of sectionHide) {
    data.classList.add('hidden');
  }
  activeId.classList.remove('hidden');
  activeId.classList.add('block');
  if (optionalId) {
    document.getElementById(optionalId).classList.remove('hidden');
    document.getElementById(ownId).classList.remove('block');
    document.getElementById(ownId).classList.add('hidden');
    console.log(ownId);
  }
}
