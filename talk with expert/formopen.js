function fun() {
  const openFormBtn = document.getElementById('form-open');
  const formContainer = document.querySelector('.form-container');

  openFormBtn.addEventListener('click', function () {
    //   formContainer.style.display = 'block';
    window.location.href = 'form.html';
    window.scrollTo(0, document.body.scrollHeight);
  });
}
