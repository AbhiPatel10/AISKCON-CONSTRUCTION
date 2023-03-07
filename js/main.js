const showDrop=(str)=>{
    document.querySelector(str).style.display = 'block';
};
const hideDrop=(str)=>{
    document.querySelector(str).style.display = 'none';
};

document.querySelector('#services').addEventListener('mouseover', ()=>{
    showDrop('.drop1');
    document.getElementById('services').innerHTML = 'Services <i class="fas fa-chevron-circle-up">';
    document.querySelector('#services').style.color = 'blue';
    document.querySelector('#services').style.cursor = 'pointer';
});
document.querySelector('.drop1').addEventListener('mouseover', ()=>{
    document.getElementById('services').innerHTML = 'Services <i class="fas fa-chevron-circle-up">';
    showDrop('.drop1');
    document.querySelector('#services').style.color = 'blue';
    document.querySelector('.drop1').style.cursor = 'pointer';
});
document.querySelector('.drop1').addEventListener('mouseout', ()=>{
    document.getElementById('services').innerHTML = 'Services <i class="fas fa-chevron-circle-down">';
    hideDrop('.drop1');
    document.querySelector('#services').style.color = 'black';
});
document.querySelector('#services').addEventListener('mouseout', ()=>{
    document.getElementById('services').innerHTML = 'Services <i class="fas fa-chevron-circle-down">';
    hideDrop('.drop1');
    document.querySelector('#services').style.color = 'black';
});

document.querySelector('#repair').addEventListener('mouseover', ()=>{
    showDrop('.drop2');
    document.getElementById('repair').innerHTML = 'Improvement & Repair <i class="fas fa-chevron-circle-up">';
    document.querySelector('#repair').style.color = 'blue';
    document.querySelector('#repair').style.cursor = 'pointer';
});
document.querySelector('.drop2').addEventListener('mouseover', ()=>{
    showDrop('.drop2');
    document.getElementById('repair').innerHTML = 'Improvement & Repair <i class="fas fa-chevron-circle-up">';
    document.querySelector('#repair').style.color = 'blue';
    document.querySelector('.drop2').style.cursor = 'pointer';
});
document.querySelector('.drop2').addEventListener('mouseout', ()=>{
    document.getElementById('repair').innerHTML = 'Improvement & Repair <i class="fas fa-chevron-circle-down">';
    hideDrop('.drop2');
    document.querySelector('#repair').style.color = 'black';
});
document.querySelector('#repair').addEventListener('mouseout', ()=>{
    document.getElementById('repair').innerHTML = 'Improvement & Repair <i class="fas fa-chevron-circle-down">';
    hideDrop('.drop2');
    document.querySelector('#repair').style.color = 'black';
});

document.querySelector('#bt2').addEventListener('click', ()=>{
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
    document.querySelector('.drop3').style.display = 'none';
    document.querySelector('.drop4').style.display = 'none';
    if(document.querySelector('.navBar2').style.display == 'block')
    {
        document.querySelector('.navBar2').style.display = 'none';
        document.querySelector('.navBar1').style.boxShadow = 'none';
    }
    else
    {
        document.querySelector('.navBar2').style.display = 'block';
        document.querySelector('.navBar1').style.boxShadow = '0px 24px 3px -24px gray';
    }
});

document.querySelector('#services2').addEventListener('click', ()=>{
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
    document.querySelector('.drop4').style.display = 'none';
    if(document.getElementById('ser').getAttribute('class').localeCompare('fas fa-chevron-circle-down') == 0)
        document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-up');
    else
        document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
    if(document.querySelector('.drop3').style.display == 'block')
        document.querySelector('.drop3').style.display = 'none';
    else
        document.querySelector('.drop3').style.display = 'block';
});
document.querySelector('#repair2').addEventListener('click', ()=>{
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
    document.querySelector('.drop3').style.display = 'none';
    if(document.getElementById('rep').getAttribute('class').localeCompare('fas fa-chevron-circle-down') == 0)
        document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-up');
    else
        document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
    if(document.querySelector('.drop4').style.display == 'block')
        document.querySelector('.drop4').style.display = 'none';
    else
        document.querySelector('.drop4').style.display = 'block';
});
document.querySelector('#services2').addEventListener('mouseover', ()=>{
    document.querySelector('#services2').style.cursor = 'pointer';
    document.querySelector('#services2').style.color = 'blue';
});
document.querySelector('#repair2').addEventListener('mouseover', ()=>{
    document.querySelector('#repair2').style.cursor = 'pointer';
    document.querySelector('#repair2').style.color = 'blue';
});
document.querySelector('#services2').addEventListener('mouseout', ()=>{
    document.querySelector('#services2').style.color = 'black';
});
document.querySelector('#repair2').addEventListener('mouseout', ()=>{
    document.querySelector('#repair2').style.color = 'black';
});

let items = document.querySelectorAll('.navBar2 a');
items.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
        document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
        document.querySelector('.drop3').style.display = 'none';
        document.querySelector('.drop4').style.display = 'none';
    });
});