// Navbar start
document.querySelector('#services').addEventListener('mouseover', () => {
  document
    .querySelector('#services i')
    .setAttribute('class', 'fas fa-chevron-circle-up');
});
document.querySelector('#services').addEventListener('mouseout', () => {
  document
    .querySelector('#services i')
    .setAttribute('class', 'fas fa-chevron-circle-down');
});

document.querySelector('#repair').addEventListener('mouseover', () => {
  document
    .querySelector('#repair i')
    .setAttribute('class', 'fas fa-chevron-circle-up');
});
document.querySelector('#repair').addEventListener('mouseout', () => {
  document
    .querySelector('#repair i')
    .setAttribute('class', 'fas fa-chevron-circle-down');
});

document.querySelector('#bt2 button').addEventListener('click', () => {
  document
    .getElementById('ser')
    .setAttribute('class', 'fas fa-chevron-circle-down');
  document
    .getElementById('rep')
    .setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop3').style.display = 'none';
  document.querySelector('.drop4').style.display = 'none';
  if (document.querySelector('.navBar2').style.display == 'block') {
    document.querySelector('.navBar2').style.display = 'none';
    document.querySelector('.navBar1').style.boxShadow = 'none';
  } else {
    document.querySelector('.navBar2').style.display = 'block';
    document.querySelector('.navBar1').style.boxShadow =
      '0px 24px 3px -24px gray';
  }
});

document.querySelector('#services2').addEventListener('click', () => {
  document
    .getElementById('rep')
    .setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop4').style.display = 'none';
  if (
    document
      .getElementById('ser')
      .getAttribute('class')
      .localeCompare('fas fa-chevron-circle-down') == 0
  )
    document
      .getElementById('ser')
      .setAttribute('class', 'fas fa-chevron-circle-up');
  else
    document
      .getElementById('ser')
      .setAttribute('class', 'fas fa-chevron-circle-down');
  if (document.querySelector('.drop3').style.display == 'block')
    document.querySelector('.drop3').style.display = 'none';
  else document.querySelector('.drop3').style.display = 'block';
});
document.querySelector('#repair2').addEventListener('click', () => {
  document
    .getElementById('ser')
    .setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop3').style.display = 'none';
  if (
    document
      .getElementById('rep')
      .getAttribute('class')
      .localeCompare('fas fa-chevron-circle-down') == 0
  )
    document
      .getElementById('rep')
      .setAttribute('class', 'fas fa-chevron-circle-up');
  else
    document
      .getElementById('rep')
      .setAttribute('class', 'fas fa-chevron-circle-down');
  if (document.querySelector('.drop4').style.display == 'block')
    document.querySelector('.drop4').style.display = 'none';
  else document.querySelector('.drop4').style.display = 'block';
});
document.querySelector('#services2').addEventListener('mouseover', () => {
  document.querySelector('#services2').style.cursor = 'pointer';
  document.querySelector('#services2').style.color = 'blue';
});
document.querySelector('#repair2').addEventListener('mouseover', () => {
  document.querySelector('#repair2').style.cursor = 'pointer';
  document.querySelector('#repair2').style.color = 'blue';
});
document.querySelector('#services2').addEventListener('mouseout', () => {
  document.querySelector('#services2').style.color = 'black';
});
document.querySelector('#repair2').addEventListener('mouseout', () => {
  document.querySelector('#repair2').style.color = 'black';
});

let items = document.querySelectorAll('.navBar2 a');
items.forEach((element) => {
  element.addEventListener('click', () => {
    document
      .getElementById('ser')
      .setAttribute('class', 'fas fa-chevron-circle-down');
    document
      .getElementById('rep')
      .setAttribute('class', 'fas fa-chevron-circle-down');
    document.querySelector('.drop3').style.display = 'none';
    document.querySelector('.drop4').style.display = 'none';
  });
});
// Navbar end

//Form starts
function fun() {
  const openFormBtn = document.getElementById('form-open');
  const formContainer = document.querySelector('.form-container');

  openFormBtn.addEventListener('click', function () {
    window.location.href = 'form.html';
    window.scrollTo(0, document.body.scrollHeight);
  });
}
//Form ends
