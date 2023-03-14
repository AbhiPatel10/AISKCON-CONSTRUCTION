// eslint-disable-next-line
const validateForm=()=>{
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

    if(notSubmit == 1)
        return false;
};