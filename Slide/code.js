const slides = document.querySelectorAll('.slide')

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
