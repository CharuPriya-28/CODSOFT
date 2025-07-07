const cells = document.querySelectorAll('[data-cell]');
const confetti = document.getElementById('confetti');
const popup = document.getElementById('popup');
const winMessage = document.getElementById('winMessage');
const resetBtn = document.getElementById('resetBtn');

const X_CLASS = 'X';
const O_CLASS = 'O';
let oTurn;

startGame();

function startGame() {
  oTurn = false;
  popup.style.display = 'none';
  confetti.innerHTML = '';

  cells.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(O_CLASS);
    cell.textContent = '';
    cell.addEventListener('click', handleClick, { once: true });
  });
}

resetBtn.addEventListener('click', startGame);

function handleClick(e) {
  const cell = e.target;
  if (oTurn) return;
  placeMark(cell, X_CLASS);
  const winCombo = checkWin(X_CLASS);
  if (winCombo) {
    endRound('You');
  } else if (isDraw()) {
    endRound('No one');
  } else {
    oTurn = true;
    setTimeout(aiMove, 500);
  }
}

function aiMove() {
  let move = findBestMove();
  if (!move) {
    const available = [...cells].filter(c => !c.classList.contains(X_CLASS) && !c.classList.contains(O_CLASS));
    move = available[Math.floor(Math.random() * available.length)];
  }
  placeMark(move, O_CLASS);
  const winCombo = checkWin(O_CLASS);
  if (winCombo) {
    endRound('AI');
  } else if (isDraw()) {
    endRound('No one');
  } else {
    oTurn = false;
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
  cell.textContent = currentClass === X_CLASS ? '❌' : '⭕';
}

function checkWin(currentClass) {
  const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const combo of WINNING_COMBINATIONS) {
    if (combo.every(index => cells[index].classList.contains(currentClass))) {
      return combo;
    }
  }
  return null;
}

function isDraw() {
  return [...cells].every(cell =>
    cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
  );
}

function endRound(winner) {
  showConfetti();
  winMessage.textContent = `${winner} wins!`;
  popup.style.display = 'flex';
}

function findBestMove() {
  if (Math.random() < 0.55) {
    const combos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (const combo of combos) {
      let [a,b,c] = combo;
      let cellsArr = [...cells];
      let marks = [cellsArr[a], cellsArr[b], cellsArr[c]].map(c => c.className);
      if (marks.filter(m => m.includes(O_CLASS)).length === 2 && marks.includes('')) {
        return cellsArr[combo[marks.indexOf('')]];
      }
    }
    for (const combo of combos) {
      let [a,b,c] = combo;
      let cellsArr = [...cells];
      let marks = [cellsArr[a], cellsArr[b], cellsArr[c]].map(c => c.className);
      if (marks.filter(m => m.includes(X_CLASS)).length === 2 && marks.includes('')) {
        return cellsArr[combo[marks.indexOf('')]];
      }
    }
  }
  return null;
}

function showConfetti() {
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.appendChild(particle);
  }
  setTimeout(() => {
    confetti.innerHTML = '';
  }, 2000);
}
