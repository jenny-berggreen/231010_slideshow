/* ---------------------- description strings ------------------------ */
const descriptionStrings = 
["Image 1 description", 
"Image 2 description", 
"Image 3 description",
"Image 4 description",
"Image 5 description"]

/* ----------------------  ------------------------ */

let slideIndex = 0;

showSlide(slideIndex); // begin with showing image 1 (slides[0])

let previousButton = document.querySelector("#slideshow-button__previous");
let nextButton = document.querySelector("#slideshow-button__next");

// when previous or next button is clicked, call changeIndex with parameter -1 or 1 to decrease/increase slideIndex with 1
previousButton.addEventListener("click", () => changeIndex(-1)); 
nextButton.addEventListener("click", () => changeIndex(1));

function changeIndex(n) {
	showSlide(slideIndex += n); // decrease/increase slideIndex with 1
}

function showSlide(n) {
	let slides = document.querySelectorAll(".image");
	let description = document.querySelector(".image-description");

    slides.forEach(slide => slide.classList.remove("display-block")); // Remove visibility of all images

	// if previous button is pressed at slide 1, slideIndex should be 5
	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}

	// if next button is pressed at slide 5, slideIndex should be 1
	if (slideIndex > slides.length - 1) {
		slideIndex = 0;
	}

	slides[slideIndex].classList.add("display-block"); // add display block class to correct image
	description.innerText = descriptionStrings[slideIndex]; // show correct image description

}