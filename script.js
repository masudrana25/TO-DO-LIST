const submit = document.querySelector('#submit');
const ul = document.querySelector('#ul');
const remove = document.querySelector('.main-body ul');

submit.addEventListener('click', function () {
  const input = document.querySelector('#input').value;
  const li = document.createElement('li');
  li.innerHTML = `<span class="remove">x</span> ${input}`;
  ul.appendChild(li);
});

remove.addEventListener('click', function (e) {
  if (e.target.tagName === 'SPAN') {
    e.target.parentNode.remove();
  }
  console.log(e.target.tagName);
})
