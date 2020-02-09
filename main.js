const baseball = document.querySelector('#baseball-selector');
const basketball = document.querySelector('#basketball-selector');
const football = document.querySelector('#football-selector');
const allSports = document.querySelectorAll('.sport-selector');

const hits = document.querySelector('#hits');
const atBats = document.querySelector('#atBats');
const calculatedAverage = document.querySelector('.calculatedAverage');

function addSelected(e) {
	// Remove all other selected div's.
	allSports.forEach(sport => {
		sport.classList.remove('selected');
	});
	// Add selected class to the clicked sport.
	this.classList.add('selected');
}

function battingAverage(e) {
	e.preventDefault();
	const numHits = hits.value;
	const numAtBats = atBats.value;
	let average = (numHits / numAtBats).toFixed(3);
	average = average.replace(/^0+/, '');
	calculatedAverage.textContent = average;
}

baseball.addEventListener('click', addSelected);
basketball.addEventListener('click', addSelected);
football.addEventListener('click', addSelected);
baseballButton.addEventListener('click', battingAverage);
