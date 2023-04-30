import { questions } from './questions.js';
import show_result from './result.js';
var choose1 = 0;
var choose2 = 0;
var choose3 = 0;
var choose4 = 0;
var ch1 = document.getElementById('ch1');
var ch2 = document.getElementById('ch2');
var i = 0;

var descriptions_1 = questions.map((a) => {
  return a[0];
}); //1번 질문

var descriptions_2 = questions.map((a) => {
  return a[1];
}); //2번 질문

var amounts = questions.map((a) => {
  return a[2];
}); //더해지는 요소

var amounts2 = questions.map((a) => {
  return a[3];
}); //더해지는 요소2

ch1.addEventListener('click', function () {
  if (amounts[i - 1] == 'choose1') {
    choose1 = choose1 + 1;
    console.log(choose1);
  } else if (amounts[i - 1] == 'choose3') {
    choose3 = choose3 + 1;
    console.log(choose3);
  } //가중치 더하기
  ch1.textContent = '';
  ch2.textContent = '';
  var p1 = document.createElement('p');
  p1.append(descriptions_1[i]);
  ch1.append(p1);
  var p2 = document.createElement('p');
  p2.append(descriptions_2[i]);
  ch2.append(p2); //다음 질문 표시
  if (i == questions.length) {
    ch1.textContent = '';
    ch2.textContent = '';
    ch1.style.visibility = 'hidden';
    ch2.style.visibility = 'hidden';
    show_result();
  }
  i++;
});

ch2.addEventListener('click', function () {
  if (amounts2[i - 1] == 'choose2') {
    choose2 = choose2 + 1;
    console.log(choose2);
  } else if (amounts2[i - 1] == 'choose4') {
    choose4 = choose4 + 1;
    console.log(choose4);
  } //가중치 빼기
  ch1.textContent = '';
  ch2.textContent = '';
  var p1 = document.createElement('p');
  p1.append(descriptions_1[i]);
  ch1.append(p1);
  var p2 = document.createElement('p');
  p2.append(descriptions_2[i]);
  ch2.append(p2);
  if (i == questions.length) {
    ch1.textContent = '';
    ch2.textContent = '';
    ch1.style.visibility = 'hidden';
    ch2.style.visibility = 'hidden';
    show_result();
  }
  i++;
});
