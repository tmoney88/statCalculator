const baseball = document.querySelector('#baseball-selector');
const basketball = document.querySelector('#basketball-selector');
const football = document.querySelector('#football-selector');
const allSports = document.querySelectorAll('.sport-selector');
const baseballForm = document.querySelector('#baseball-form');
const basketballForm = document.querySelector('#basketball-form');
const footballForm = document.querySelector('#football-form');

//baseball
const hits = document.querySelector('#hits');
const atBats = document.querySelector('#atBats');
const battingAverage = document.querySelector('#batting-average');

//basketball
const fgMade = document.querySelector('#fgm');
const fgAttempt = document.querySelector('#fga');
const fgPercentage = document.querySelector('#fg-percentage');

function addSelected(e) {
	// Remove all other selected div's.
	allSports.forEach(sport => {
		sport.classList.remove('selected');
	});
	// Add selected class to the clicked sport.
	this.classList.add('selected');
}

function calculateAverage(e) {
	e.preventDefault();
	const numHits = hits.value;
	const numAtBats = atBats.value;
	let average = (numHits / numAtBats).toFixed(3);
	average = average.replace(/^0+/, '');
	battingAverage.textContent = average;
}

function calculateFgPercentage(e) {
	e.preventDefault();
	const madeFg = fgMade.value;
	const attemptedFg = fgAttempt.value;
	let percentage = ((madeFg / attemptedFg) * 100).toFixed(3);
	fgPercentage.textContent = `${percentage}%`;
}

baseball.addEventListener('click', addSelected);
basketball.addEventListener('click', addSelected);
football.addEventListener('click', addSelected);
baseballForm.addEventListener('submit', calculateAverage);
basketballForm.addEventListener('submit', calculateFgPercentage);
