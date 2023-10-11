/* ---------------------- description strings ------------------------ */
const descriptionStrings = 
["Image 1 description", 
"Image 2 description", 
"Image 3 description",
"Image 4 description",
"Image 5 description"]

/* ----------------------  ------------------------ */

let slideIndex = 0;

showSlide(slideIndex);

function changeIndex(n) {
	showSlide(slideIndex += n);
}

function showSlide(n) {
	let slides = document.querySelectorAll(".image");
	console.log(slides.length); // 5
	let description = document.querySelector(".image-description");

	// if previous button is pressed at slide 1, slideIndex should be 5
	if (slideIndex < 0) {
		slideIndex === slides.length - 1;
	}

	// if next button is pressed at slide 5, slideIndex should be 1
	if (slideIndex > slides.length - 1) {
		slideIndex === 0;
	}

	slides[slideIndex].classList.add("display-block");
	description.innerText = descriptionStrings[slideIndex];

}