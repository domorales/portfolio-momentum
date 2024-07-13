// DOM FUCTIONS
const $loader = document.querySelector('.loader-container');

document.addEventListener('DOMContentLoaded', () => {
	createAllIdeas();
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
