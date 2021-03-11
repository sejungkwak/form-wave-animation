const email = document.querySelector('.email');
const password = document.querySelector('.password');

document.querySelector('.input-email').addEventListener('click', () => {
    
    email.innerHTML = email.textContent.replace(/\S/g, `<span>$&</span>`);

    var letters = document.querySelectorAll('span');

    for (var index = 0; index <= letters.length; index++) {
        letters[index].style = `--i:${index}`;
    }

})

document.querySelector('.input-password').addEventListener('click', () => {
    
    password.innerHTML = password.textContent.replace(/\S/g, `<span>$&</span>`);

    var letters = document.querySelectorAll('span');

    for (var index = 0; index <= letters.length; index++) {
        letters[index].style = `--i:${index}`;
    }

})