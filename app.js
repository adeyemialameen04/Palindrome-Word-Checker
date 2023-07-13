const inputText = document.querySelector('.input');
const btn = document.querySelector('.btn');
let result = document.querySelector('.result');


function palindrome(str) {
  let reg = /[\W_]/g;

  let smallStr = str.toLowerCase().replace(reg, "");

  let reversed = smallStr.split('').reverse().join('');

  viewResults(smallStr, reversed);

  return smallStr;
}

const viewResults = (smallStr, reversed) => {
  if (reversed == smallStr) {
    result.innerHTML = `Yes, <span>'${inputText.value}'</span> is a palindrome`;
  } else {
    result.innerHTML = `NO, <span>'${inputText.value}'</span> isn't a palindrome`;;
  }

  inputText.addEventListener('keydown', () => {
    if (smallStr) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
};

inputText.addEventListener('keyup', (e) => {
  palindrome(inputText.value);
});

btn.addEventListener('click', () => {
  palindrome(inputText.value);
});