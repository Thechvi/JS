

function slidesPlugin(activeSlide = 0) {
	const slides = document.querySelectorAll('.slide')

	slides[activeSlide].classList.add('action')

	for (const slide of slides) {
		slide.addEventListener('click', () => {
			clearActiveClasses();
			slide.classList.add('action')
		})
	}

	function clearActiveClasses() {
		slides.forEach((slide) => {
			slide.classList.remove('action')
		})
	}

}
slidesPlugin(1)