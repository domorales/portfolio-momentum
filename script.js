// DOM FUCTIONS
document.addEventListener('DOMContentLoaded', async () => {
	const $loader = document.querySelector('.loader-container');
	$loader.classList.remove('none');
	await createAllIdeas();
	$loader.classList.add('none');
});

// UTILS FUNCTIONS
const createAllIdeas = async () => {
	const $fragment = document.createDocumentFragment(),
		$ideas = document.getElementById('ideas-carousel'),
		$template = document.getElementById('idea-template').content,
		numberIdeas = 61;

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
};

const getImagePath = (name) => `./images/ideas/${name}.jpg`;
