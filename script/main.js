const burgerIcon = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
burgerIcon.addEventListener('click', (e) => {
	if (e.target.closest('.header__burger')) {
		burgerIcon.classList.toggle('_active')
		document.body.classList.toggle('_lock');
		menu.classList.toggle('_active');
	}
})


