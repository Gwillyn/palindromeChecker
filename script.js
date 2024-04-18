const input = document.querySelector('#text-input');
const button = document.querySelector('#check-btn');
const result = document.querySelector('#result');

button.addEventListener('click', checking);

function clickPress(event) {
    if (event.key == "Enter") {checking()}
}

function checking() {
  const base = input.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()
  const checker = input.value.split("").reverse().join("").replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  console.log(checker)
  if (base === "") {
    alert('Please input a value')
  } else {
    if (checker === base) {
      result.innerHTML = `<span class="bold">${input.value}</span> is a palindrome!`
    } else {
      result.innerHTML = `<span class="bold">${input.value}</span> is <span class="bold">not</span> a palindrome!`
    }
    result.style.display = 'block'
  }
}

