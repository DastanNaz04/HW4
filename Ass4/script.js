
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


function updateDice() {
  const dice1 = rollDice();
  const dice2 = rollDice();

  
  document.getElementById('dice1').src = `images/dice${dice1}.png`;
  document.getElementById('dice2').src = `images/dice${dice2}.png`;

  
  document.getElementById('result').textContent = `Результат: ${dice1 + dice2}`;
}


document.getElementById('rollButton').addEventListener('click', updateDice);
