var formTag = document.getElementById('FormTag')
let reee = document.getElementById('reee')
let userName = document.getElementById("userName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let p = document.getElementById(p1)



formTag.addEventListener('input', function (e) {
    console.log(e.target.id)

    switch (e.target.id) {
        case "userName":

            NameValidation(e.target)
            break;
        case "email":
            emailValidation(e.target)

            break
        case 'password':
            passwordValidation(e.target)

            break
    }
})
formTag.addEventListener('submit', (e) => {

    let massages = [];
    if (userName.value === '' || userName.value == null) {
        massages.push(' error. Please check and try again.')
    }
    // else massages.push('name is true.')

    if (email.value === '' || email.value == null) {
        massages.push(' error. Please check and try again.')
    }
    // else massages.push('email is true.')

    if (password.value === '' || password.value == null) {
        massages.push(' error. Please check and try again.')
    }
    // else massages.push('password is true.')


    if (massages.length > 0) {
        e.preventDefault()
        reee.innerText = massages.join(',')
    }


})
function NameValidation(input) {
    var inputValue = input.value.trim()
    console.log(inputValue.length);
    (inputValue.length < 3) ? showError(input, "enter at least 3 character") : removeError(input)
}

function showError(element, msg) {
    element.nextElementSibling.innerText = msg
    element.nextElementSibling.classList.add('text-danger')
}

function removeError(element) {
    element.nextElementSibling.innerText = ""
}
function emailValidation(input) {


    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var inputValue = input.value

    console.log(emailPattern.test(inputValue))
    if (emailPattern.test(inputValue) == false) showError(input, "enter a valid Email")
    else removeError(input)

}
function passwordValidation(input) {
    var inputValue = input.value
    var passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (passwordPattern.test(inputValue) == false) showError(input, "enter at least 1 capital character , 1 small character , 1 letter , 1 special character....")
    else removeError(input)
}
