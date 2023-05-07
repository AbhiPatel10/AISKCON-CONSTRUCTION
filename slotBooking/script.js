const apiEndpoint = 'http://localhost:3000';

// Navbar start
document.querySelector('#services').addEventListener('mouseover', ()=>{
    document.querySelector('#services i').setAttribute('class', 'fas fa-chevron-circle-up');
});
document.querySelector('#services').addEventListener('mouseout', ()=>{
    document.querySelector('#services i').setAttribute('class', 'fas fa-chevron-circle-down');
});

document.querySelector('#repair').addEventListener('mouseover', ()=>{
    document.querySelector('#repair i').setAttribute('class', 'fas fa-chevron-circle-up');
});
document.querySelector('#repair').addEventListener('mouseout', ()=>{
    document.querySelector('#repair i').setAttribute('class', 'fas fa-chevron-circle-down');
});

document.querySelector('#bt2 button').addEventListener('click', ()=>{
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
// Navbar end

// Slot Booking start

// eslint-disable-next-line
const validateForm=(e)=>{
    let validate=(index)=>{
        let parent = arr[index].parentElement;
        arr[index].style.border = '1.5px solid red';
        let sibling = parent.previousElementSibling;
        sibling.firstElementChild.style.visibility = 'visible';
        arr[index].nextElementSibling.style.display = 'block';
    };
    let arr = document.getElementById('slotForm').elements;
    let notSubmit = 0;
    
    for(let i = 0; i < document.getElementById('slotForm').elements.length - 1; i++)
    {
        let val = arr[i].value;
        if ((val == '' || val == null) && i != 0 && i != 1 && i != 2 && i != 7) {
            validate(i);
            notSubmit = 1;
        }
        else
        arr[i].nextElementSibling.style.display = 'none';
    }

    let nameFormat = /^[A-Z a-z]+$/;
    if((arr[0].value == '' || arr[0].value == null) || (!document.getElementById('slotForm').elements[0].value.match(nameFormat))){
        validate(0);
        notSubmit = 1;
    }
    else
        document.getElementById('slotForm').elements[0].nextElementSibling.style.display = 'none';
    // eslint-disable-next-line
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if((arr[1].value == '' || arr[1].value == null) || !document.getElementById('slotForm').elements[1].value.match(mailFormat)){
        validate(1);
        notSubmit = 1;
    }
    else
        document.getElementById('slotForm').elements[1].nextElementSibling.style.display = 'none';

    let phoneFormat = /^\d{10}$/;
    if((arr[2].value == '' || arr[2].value == null) || !document.getElementById('slotForm').elements[2].value.match(phoneFormat)){
        validate(2);
        notSubmit = 1;
    }
    else
        document.getElementById('slotForm').elements[2].nextElementSibling.style.display = 'none';

    let pinFormat = /^\d{6}$/;
    if((arr[7].value == '' || arr[7].value == null) || !document.getElementById('slotForm').elements[7].value.match(pinFormat)){
        validate(7);
        notSubmit = 1;
    }
    else
        document.getElementById('slotForm').elements[7].nextElementSibling.style.display = 'none';

    if(notSubmit == 0){
        const formData = new FormData(document.getElementById("slotForm"));
        const formDataJson = JSON.stringify(Object.fromEntries(formData));
        submitForm(formDataJson);
    } 
    else return false
};

let inBoxes = document.querySelectorAll('.form-input input, .form-input select, .form-input textarea');
inBoxes.forEach((element)=>{
    element.addEventListener('click', ()=>{
        element.style.border = '2px solid rgb(48, 61, 203)';
        inBoxes.forEach((ele)=>{
            if(ele != element)
                ele.style.border = '1px solid #d2d2d2';
        });
    });
});
// Slot Booking end

if(document.querySelector('.footer-copyright')){
    let year = new Date();
    year = year.getFullYear();
    document.querySelector('.footer-copyright').innerHTML = 'Copyright &#169; ' + year + ' <a href="/">Aiskcon</a>, All Right Reserved';
}

const submitForm = (userJSON)=>{
    console.log(userJSON)
    fetch(apiEndpoint+"/email", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: userJSON
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
};