const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
	slide.addEventListener('onclick', () => {
		clearActiveClasses()
		slide.addEventListener('click', () => {
			slide.classList.add('active')
		})
