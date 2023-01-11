// События Native JS. Классная работа
// ! Все HTML элементы которыми нужно манипулировать пропишите отдельно в файле index.html

// Задание №1
// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// w - white;
// SHIFT + B - black;
// SHIFT + G - gray;

// let div = document.querySelector('#app');

//Решение 1
// document.addEventListener('keydown', (e) => {
//     console.log(e)
//   switch (true) {
//     case (e.key == 'r' && e.shiftKey == false):
//       div.style.backgroundColor = 'red';
//       break;
//     case (e.key == 'g' && e.shiftKey == false):
//       div.style.backgroundColor = 'green';
//       break;
//     case (e.shiftKey == false && e.key == 'b'):
//       div.style.backgroundColor = 'blue';
//       break;
//     case (e.shiftKey == false && e.key == 'w'):
//       div.style.backgroundColor = 'white';
//       break;
//     case (e.shiftKey == true && e.key == 'B'):
//         div.style.backgroundColor = 'black';
//         break;
//     case (e.shiftKey == true && e.key == 'G'):
//         div.style.backgroundColor = 'gray';
//   }
// });

//Решение 2
// document.addEventListener('keydown', (e) => {
//     console.log(e)
//   switch (true) {
//     case (e.code == 'KeyR' && e.shiftKey == false):
//       div.style.backgroundColor = 'red';
//       break;
//     case (e.code == 'KeyG' && e.shiftKey == false):
//       div.style.backgroundColor = 'green';
//       break;
//     case (e.shiftKey == false && e.code == 'KeyB'):
//       div.style.backgroundColor = 'blue';
//       break;
//     case (e.shiftKey == false && e.code == 'KeyW'):
//       div.style.backgroundColor = 'white';
//       break;
//     case (e.shiftKey == true && e.code == 'KeyB'):
//         div.style.backgroundColor = 'black';
//         break;
//     case (e.shiftKey == true && e.code == 'KeyG'):
//         div.style.backgroundColor = 'gray';
//   }
// });

//Решение 3
// document.addEventListener('keydown', function (event) {
//   switch (event.key) {
//     case 'r':
//       div.style.backgroundColor = 'red';
//       break;
//     case 'g':
//       div.style.backgroundColor = 'green';
//       break;
//     case 'b':
//       div.style.backgroundColor = 'blue';
//       break;
//     case 'w':
//       div.style.backgroundColor = 'white';
//       break;
//     case 'B':
//       div.style.backgroundColor = 'black';
//       break;
//     case 'G':
//       div.style.backgroundColor = 'gray';
//       break;
//   }
// });

// Задание №2
// Создайте переменную let i=0, по нажатию
// на кнопку выводите в консоль переменную i
// и увеличивайте её в 2 раза;

// let button = document.querySelector('button');
// let i = 0;

// button.addEventListener('click', (e) => {
//   if (i === 0) {
//     i = i + 2;
//     console.log(i);
//   } else {
//     i = i * 2;
//     console.log(i);
//   }
// });


// Задание №3
// Создайте div размером 500px * 500px,
// по нажатию на неё выводите в консоль
// позицию места куда вы нажали
// относительно div- а;

// let div2 = document.querySelector('.div-2');

// div2.addEventListener('mousedown', (e) => {
//   console.log(e.clientX, e.clientY);
// });

// Задание №4
// Создайте input type color.
// При изменении инпута меняйте цветWWWWF                    
// заднего фона body на значение
// из этого инпута

// let inp = document.querySelector('input')
// let body = document.querySelector('body')

// inp.addEventListener('input', e => {
//     console.log(e.target.value); 
//     body.style.backgroundColor = e.target.value
// });