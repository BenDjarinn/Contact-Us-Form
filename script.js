const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const gen = document.forms["myForm"]["gender"]
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event)=> {

    event.preventDefault();

    if (fullName.value.trim() == '') {
        error (fullName, 'Fullname can not be empty');
    }
    else {
        success(fullName)
    }

    if (email.value.trim() == '') {
        error (email, 'Email can not be empty');
    }
    else {
        success(email)
    }

    if (gen[0].checked == false && gen[1].checked == false) {
        errorGender (gen, 'Please select your gender');
    }


    
});

function error(element, msg) {
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';
}

function success(element) {
    element.style.border = '3px green solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';
}





  

