const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
const about = document.querySelector('.about');
btns.forEach((btn) => {
	btn.addEventListener('click', function() {
		btn.classList.add('active');
		contents.forEach((item) => {
			if (item.getAttribute('id') === btn.getAttribute('data-id')) {
				item.classList.add('active');
			} else if (item.classList.contains('active')) {
				item.classList.remove('active');
			}
		});
	});
});
about.addEventListener('click', function(e) {
	for (let i = 0; i < btns.length; i++) {
		if (btns[i].getAttribute('data-id') !== e.target.getAttribute('data-id')) {
			btns[i].classList.remove('active');
		}
	}
});
