'use strict';
document.querySelector('.guess').value = 16;
let secretenumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;
// document.querySelector('.number').textContent = secretenumber;
document.querySelector('.check').addEventListener('click', function () {
  const guessnumber = Number(document.querySelector('.guess').value);
  console.log(guessnumber);
  if (!guessnumber) {
    document.querySelector('.message').textContent = '😕no number!';
  }
  //low
  else if (secretenumber > guessnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose The Game!😕';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
  //high
  else if (secretenumber < guessnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose The Game!😕';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
    //win
  } else if (secretenumber === guessnumber) {
    document.querySelector('.message').textContent = '🥇correct answer!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretenumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
