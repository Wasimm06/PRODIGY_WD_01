document.addEventListener("DOMContentLoaded", function () {
	const navbar = document.querySelector("header");
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll("header nav a");
	const menuIcon = document.getElementById('menu-icon');
	const navLinksContainer = document.getElementById('nav-links');
	const shopNowButton = document.getElementById('shop-now-button');

	
	// const colors = [
	// 	"linear-gradient(45deg, #003049, #004d7a)",  // Dark Teal to Light Teal
	// 	"linear-gradient(45deg, #023e8a, #0077b6)"   // Dark Blue to Light Blue
	// ];

	menuIcon.addEventListener('click', function () {
		navLinksContainer.classList.toggle('active');
	});

	window.addEventListener("scroll", function () {
		let current = "";

		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			if (scrollY >= sectionTop - 60) {
				current = section.getAttribute("id");
			}
		});

		navLinks.forEach(link => {
			link.classList.remove("active");
			if (link.getAttribute("href").includes(current)) {
				link.classList.add("active");
				const index = Array.from(sections).findIndex(section => section.id === current);
				const colorIndex = index % colors.length; // Alternate between the two colors
				navbar.style.background = colors[colorIndex];
			}
		});
	});

	window.onscroll = () => {
		sections.forEach(sec => {
			let top = window.scrollY;
			let offset = sec.offsetTop - 150;
			let height = sec.offsetHeight;
			let id = sec.getAttribute('id');
			if (top >= offset && top < offset + height) {
				navLinks.forEach(links => {
					links.classList.remove('active');
					document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
				});
			}
		});
	};
});