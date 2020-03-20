/*! my-trillo v0.0.1 | (c) 2020 Selim Ensar Koksal | MIT License | https://github.com/selimensar?tab=repositories */
document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);