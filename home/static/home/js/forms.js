var INPUT_GROUP_SELECTOR = ".input-group"
var LABEL_SELECTOR = ".input-group__label"
var INPUT_SELECTOR = ".input-group__input"
var HAS_INPUT_CLASS = "input-group--nonempty"

window.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(INPUT_GROUP_SELECTOR).forEach(function (node) {
		const label = node.querySelector(LABEL_SELECTOR);
		const input = node.querySelector(INPUT_SELECTOR);

		input.addEventListener("keyup", function () {
			const hasInputClassPresent = node.classList.contains(HAS_INPUT_CLASS)
			if (this.value !== "" && !hasInputClassPresent) {
				node.classList.add(HAS_INPUT_CLASS)
			} else if (this.value === "" && hasInputClassPresent) {
				node.classList.remove(HAS_INPUT_CLASS)
			}
		})
	})
});

const modal = document.querySelector('#success-modal');

document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const parsed = [...document.querySelectorAll(INPUT_SELECTOR)].reduce((acc,curr) => `${acc}&${curr.name}=${encodeURI(curr.value)}`, '').substr(1);
	document.querySelector('form button[type="submit"]').classList.add('loading');
	document.querySelector('form button[type="submit"]').disabled = true;
	fetch(`https://script.google.com/macros/s/AKfycbzdS-TeaOUAOUmsZjgXMiiyA7cjaCJn7-EI5ET4PK9n59DxIH5h/exec?${parsed}`)
		.then(res => res.json())
		.then(() => {
			modal.classList.add("modal--open");
			document.querySelector('form button[type="submit"]').classList.remove('loading');
			document.querySelector('form button[type="submit"]').disabled = false;
		});
});

document.getElementById('close-success-modal').addEventListener("click", function () {
	modal.classList.remove("modal--open");
});