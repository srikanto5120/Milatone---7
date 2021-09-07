const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search");
const sliderDiv = document.querySelector("#main");
const sliderImage = document.querySelector("#sliders");
const gallery = document.querySelector(".gallery");
const galleryHeader = document.querySelector(".gallery-header");
const duration = document.querySelector("#duration");

const createSlider = document.querySelector("#create-slider");
let imageArray = [];

const KEY = "15674931-a9d714b6e9d654524df198e00&q";

searchBtn.addEventListener("click", () => {
  if (searchInput.value === "") {
    sliderDiv.innerHTML = "";
    alert("Please enter valid input");
    location.reload();
  } else {
    const url = `https://pixabay.com/api/?key=${KEY}=${searchInput.value}&image_type=photo&pretty=true`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => sowImage(data.hits));
  }
  searchInput.value = "";
});
const sowImage = (images) => {
  if (images.length === 0) {
    alert("Please enter valid input");
  } else {
    galleryHeader.style.display = "block";
    galleryHeader.style.display = "flex";
    images.forEach((image) => {
      let div = document.createElement("div");
      div.className = "col-lg-3 col-md-4 col-xs-6 img-item mb-2";
      div.innerHTML = ` <img class="img-fluid img-thumbnail img-width  " onclick=selectItem(event,"${image.webformatURL}") src="${image.webformatURL}" alt="${image.tags}">`;
      gallery.appendChild(div);
    });
  }
};

const selectItem = (event, imageUrl) => {
  if (imageArray.includes(imageUrl)) {
    alert("This image is allredy has been selected");
  } else {
    event.target.parentElement.classList.add("selected");
    imageArray.push(imageUrl);
  }
};

createSlider.addEventListener("click", () => {
  document.querySelector(".main").classList.replace("d-none", "d-block");
  const time = Number(duration.value) || 500;
  duration.value = "";
  if (time >= 500) {
    gallery.innerHTML = "";
    if (imageArray.length >= 2) {
      let imageArrayLength = 0;
      setInterval(() => {
        if (!(imageArrayLength === imageArray.length)) {
          sliderImage.src = `${imageArray[imageArrayLength]}`;
          imageArrayLength++;
        } else {
          imageArrayLength = 0;
        }
      }, time);
    }
  } else {
    alert("Enter a number gater then 500");
  }
});
