// DOM FUCTIONS
const $loader = document.querySelector('.loader-container');

document.addEventListener('DOMContentLoaded', () => {
	createAllIdeas();
});

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSectionId = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
            currentSectionId = section.getAttribute('id');
        }
    });

    if (currentSectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    }
});


// UTILS FUNCTIONS
const createAllIdeas = () => {
	const $fragment = document.createDocumentFragment(),
		$ideas = document.getElementById('ideas-carousel'),
		$template = document.getElementById('idea-template').content,
		numberIdeas = 61;
	$loader.classList.remove('none');
	for (let i = 1; i <= numberIdeas; i++) {
		let path = getImagePath(i);

		$template.querySelector('img').setAttribute('src', path);
		$template.querySelector('img').setAttribute('alt', `Idea ${i}`);
		$template.querySelector('h3').textContent = `Idea ${i}`;
		let $clone = document.importNode($template, true);
		if (i === 1) $clone.querySelector('.carousel-item').classList.add('active');
		$fragment.appendChild($clone);
	}

	$ideas.appendChild($fragment);
	$loader.classList.add('none');
};

const getImagePath = (name) => `./images/ideas/${name}.jpg`;
