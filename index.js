const form = document.getElementById('nature-form');
const name = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');

let nameRegEx = /^[a-zA-Z\s'-]+$/;
let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    //first presence validation
    const username = name.value.trim();
    const emailAddress = email.value.trim();
    const password = pass.value.trim();

    if(username === '' || username === null) {
        alert('name is required');
        return false;
    }
    //set limit
    if(username.length < 2 || username.length > 50) {
        alert('Name must be between 2 and 50 characters!');
        return
    }
    //character restrictions
    if(!nameRegEx.test(username)) {
        alert('Name can only contains letters, spaces, hyphens and apostrophes!');
        return
    }
    //presence of email address
    if(emailAddress === '' || emailAddress === null) {
        alert('Email is required');
        return
    }
    // email regEx
    if(!emailRegEx.test(emailAddress)) {
        alert('Enter a valid email address');
        return
    }
    //password presence
    if(password === '' || password === null) {
        alert('Enter password!');
        return
    }
    //strong password validation
    if(!passwordRegEx.test(password)) {
        alert('Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one number, and one special character.');
        return
    }
    // console.log(username);
    // console.log(emailAddress);
    // console.log(password);

    alert('"Form submitted successfully! Thank you!');

    //logging the data
    const getData = ((username, emailAddress, password) => {
        return { username, emailAddress, password }
    });
    console.log(getData(username, emailAddress, password));

    name.value = '';
    pass.value = '';
    email.value = '';

});
