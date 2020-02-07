const baseball = document.querySelector('#baseball-selector');
const basketball = document.querySelector('#basketball-selector');
const football = document.querySelector('#football-selector');

const allSports = document.querySelectorAll('.sport-selector');

// function highlighted (e) {
//     this.classList.add('selected');
// }

// selectedSport.forEach(sport => sport.addEventListener('click', highlighted));

function baseballSelected(e) {
	baseball.classList.add('selected');
	basketball.classList.remove('selected');
	football.classList.remove('selected');
}

function basketballSelected(e) {
	basketball.classList.add('selected');
	football.classList.remove('selected');
	baseball.classList.remove('selected');
}

function footballSelected(e) {
	football.classList.add('selected');
	baseball.classList.remove('selected');
	basketball.classList.remove('selected');
}

function addSelected(e) {
	// Remove all other selected div's.
	allSports.forEach(sport => {
		sport.classList.remove('selected');
	});
	// Add selected class to the clicked sport.
	this.classList.add('selected');
}

baseball.addEventListener('click', addSelected);
basketball.addEventListener('click', addSelected);
football.addEventListener('click', addSelected);
