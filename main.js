// const baseball = document.querySelector('#baseball-selector');
// const basketball = document.querySelector('#basketball-selector');
// const football = document.querySelector('#football-selector');


const selectedSport = document.querySelectorAll('.sport-selector');

function highlighted (e) {
    this.classList.add('selected');
}

selectedSport.forEach(sport => sport.addEventListener('click', highlighted));