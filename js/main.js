// Navbar start
document.querySelector('#services').addEventListener('mouseover', () => {
  document.querySelector('#services i').setAttribute('class', 'fas fa-chevron-circle-up');
});
document.querySelector('#services').addEventListener('mouseout', () => {
  document.querySelector('#services i').setAttribute('class', 'fas fa-chevron-circle-down');
});

document.querySelector('#repair').addEventListener('mouseover', () => {
  document.querySelector('#repair i').setAttribute('class', 'fas fa-chevron-circle-up');
});
document.querySelector('#repair').addEventListener('mouseout', () => {
  document.querySelector('#repair i').setAttribute('class', 'fas fa-chevron-circle-down');
});

document.querySelector('#bt2 button').addEventListener('click', () => {
  document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop3').style.display = 'none';
  document.querySelector('.drop4').style.display = 'none';
  if (document.querySelector('.navBar2').style.display == 'block')
   {
    document.querySelector('.navBar2').style.display = 'none';
    document.querySelector('.navBar1').style.boxShadow = 'none';
  } 
  else
   {
    document.querySelector('.navBar2').style.display = 'block';
    document.querySelector('.navBar1').style.boxShadow ='0px 24px 3px -24px gray';
  }
});

document.querySelector('#services2').addEventListener('click', () => {
  document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop4').style.display = 'none';
  if (document.getElementById('ser').getAttribute('class').localeCompare('fas fa-chevron-circle-down') == 0)
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-up');
  else
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  if (document.querySelector('.drop3').style.display == 'block')
    document.querySelector('.drop3').style.display = 'none';
  else 
    document.querySelector('.drop3').style.display = 'block';
});
document.querySelector('#repair2').addEventListener('click', () => {
  document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop3').style.display = 'none';
  if (document.getElementById('rep').getAttribute('class').localeCompare('fas fa-chevron-circle-down') == 0)
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-up');
  else
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
  if (document.querySelector('.drop4').style.display == 'block')
    document.querySelector('.drop4').style.display = 'none';
  else 
    document.querySelector('.drop4').style.display = 'block';
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
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
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

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.children[1];
    if (answer.style.display === 'block') {
      icon.setAttribute('class', 'fa-solid fa-plus fa-xl');
      answer.style.display = 'none';
    } else{
      icon.setAttribute('class', 'fa-solid fa-minus fa-xl');
      answer.style.display = 'block';
    }
  });
});

let faqQues = ['Why do I need an interior designer?', 'Why is Aiskcon perfect for your design?', 'What services are included under home interior design?', 'What will be the timelines for my project completion?', 'What are the trending interior design styles?'];

let faqAns = ['You can think of an interior designer as a film director. Their job is to monitor every minute detail from start to the final cut. From pre-production to the final edit, their perspective is responsible for shaping the final product. Similarly, interior designers are professionals who are able to gauge your needs and tastes to deliver your dream home. They assist you in getting custom-designed pieces that fit perfectly into your beautiful vision. From raw materials to finished products, they take care of everything!', 'Aiskcon is the perfect partner who can build your home interiors just the way you want! Our design experts customize designs as per your needs. They will listen to your ideas and suggest options. At Livspace, we incorporate advanced technology into our modular solutions to create flawless interiors and also to expedite the process of making your dream home a reality. So, book your consultation today with India\'s Most Trusted Home Interiors Brand, Livspace and talk to our designers about your project.', 'You can think of an interior designer as a film director. Their job is to monitor every minute detail from start to the final cut. From pre-production to the final edit, their perspective is responsible for shaping the final product. Similarly, interior designers are professionals who are able to gauge your needs and tastes to deliver your dream home. They assist you in getting custom-designed pieces that fit perfectly into your beautiful vision. From raw materials to finished products, they take care of everything!', 'You can think of an interior designer as a film director. Their job is to monitor every minute detail from start to the final cut. From pre-production to the final edit, their perspective is responsible for shaping the final product. Similarly, interior designers are professionals who are able to gauge your needs and tastes to deliver your dream home. They assist you in getting custom-designed pieces that fit perfectly into your beautiful vision. From raw materials to finished products, they take care of everything!', 'You can think of an interior designer as a film director. Their job is to monitor every minute detail from start to the final cut. From pre-production to the final edit, their perspective is responsible for shaping the final product. Similarly, interior designers are professionals who are able to gauge your needs and tastes to deliver your dream home. They assist you in getting custom-designed pieces that fit perfectly into your beautiful vision. From raw materials to finished products, they take care of everything!'];

if(document.querySelector('.faq-content')){
  faqQues.forEach((element, index)=>{
    document.querySelector('.faq-content').innerHTML += 
    '<div class="faq-block" id="block' + index + '">' +
    '<div class="faq-question">' +
      '<h2>' + (index+1) + '. ' +  element + '</h2>' + 
      '<i class="fa-solid fa-plus fa-xl" id="plusMinus' + index + '"></i>' + 
    '</div>' + 
    '<div class="faq-answer close" id="answer' + index + '">' + 
      '<p>' + faqAns[index] + '</p>' +
    '</div>' +
  '</div>';
  });
}

if(document.querySelector('.faq-question')){
  faqQues.forEach((element, index)=>{
    document.querySelector('#block' + index).addEventListener('click', ()=>{
      if(document.querySelector('#answer' + index).style.display == 'block')
      {
        document.querySelector('#plusMinus' + index).classList.replace('fa-minus', 'fa-plus');
        document.querySelectorAll('.faq-answer').forEach((element)=>{
          element.classList.replace('open', 'close');
        });
        setTimeout(()=>{
          document.querySelector('#answer' + index).style.display = 'none';
        }, 450);
      }
      else
      {
        document.querySelector('#answer' + index).style.display = 'block';
        document.querySelector('#plusMinus' + index).classList.replace('fa-plus', 'fa-minus');
        document.querySelectorAll('.faq-answer').forEach((element)=>{
          element.classList.replace('close', 'open');
        });
      }
    });
  });
}

if(document.querySelector('.faq-question')){
  document.querySelectorAll('.faq-block').forEach((element, index)=>{
    element.addEventListener('click', ()=>{
      document.querySelectorAll('.faq-answer').forEach((ele, ind)=>{
        if(index != ind){
          ele.style.display = 'none';
        }
      });
    });
  });
}