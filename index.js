const userName = document.getElementById('userName');
const startCount = document.getElementById('start').addEventListener('click', validateName);
const bestRez = document.getElementById('bestRez').addEventListener('click', () => {
    alert(`best result is: ${bestRezClicks}`)
});
const bestRezAll = document.getElementById('bestRezAll').addEventListener('click', () => {
  alert(`Best result for the whole time is: ` +
    `${ localStorage.getItem('bestRezAllClicks') } by ${ localStorage.getItem('userBestRezName') }`)
})

const clr = document.getElementById('clr').addEventListener('click', clrPressed)

function clrPressed() {
  bestRezClicks = 0;
  alert('Best result is cleared')
}
 
const clrAll = document.getElementById('clrAll').addEventListener('click', clrAllPressed);

function clrAllPressed(){
  localStorage.setItem('bestRezAllClicks', 0);
  localStorage.setItem('userBestRezName', null);
  alert('Best result for the whole time is cleared')
}

const clickMe = document.getElementById('clickMe').addEventListener('click', clicker);

function validateName() {
  try {
    if (userName.value !== '') {
      setTimeout(calculateClicks, 5000);
    } else {
      throw 'empty nickname';
    }
  } catch (error) {
    alert(error);
  }
}

let click = 0;
function clicker() {
  click +=1;
}

let bestRezClicks = 0;

function calculateClicks() {
  alert(`you clicked ${click} times`);
  localStorage.setItem('click', [click]);
  if (bestRezClicks < click) {
    bestRezClicks = click;
  }
  if (localStorage.getItem(['bestRezAllClicks']) < bestRezClicks) {    
    localStorage.setItem('bestRezAllClicks', [bestRezClicks]);
    localStorage.setItem('userBestRezName', [userName.value]);
  }
  click = 0;
}

