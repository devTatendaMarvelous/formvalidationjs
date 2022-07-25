const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const passwordconfirm = document.getElementById('passwordconfirm')

form.addEventListener('submit', (e) => {
     e.preventDefault()
     checkInputs()
})
   
function checkInputs() {
    // get values
     const usernameValue = username.value.trim()
     const emailValue = email.value.trim()
     const passwordValue = password.value.trim()
     const phoneValue=phone.value.trim()
 const passwordconfirmValue = passwordconfirm.value.trim()
      
     if (usernameValue === '') {
          //show error
          setErrorFor(username, 'username Cannot be blank')
     } else {
          setSuccessFor(username)
     }
          if (phoneValue === '') {
          //show error
          setErrorFor(phone, 'phone Cannot be blank')
       } else if (!isPhone(phoneValue)) {
             setErrorFor(phone, 'phone is Invalid')
        }
       else {
          setSuccessFor(phone)
     }

       if (emailValue === '') {
          //show error
          setErrorFor(email, 'Email Cannot be blank')
       } else if (!isEmail(emailValue)) {
             setErrorFor(email, 'Email is Invalid')
        }
       else {
          setSuccessFor(email)
     }

         if (passwordValue === '') {
          //show error
          setErrorFor(password, 'Password Cannot be blank')
     } else {
          setSuccessFor(password)
     }

            if (passwordconfirmValue === '') {
          //show error
          setErrorFor(passwordconfirm, 'Password confirm Cannot be blank')
            } else if (passwordValue !== passwordconfirmValue) {
                  setErrorFor(passwordconfirm, 'Passwords do not match')
                 
     } else {
          setSuccessFor(passwordconfirm)
     }


}

function setErrorFor(input, message) {
     const formControl = input.parentElement
     const small = formControl.querySelector('small')
     small.innerText = message
     formControl.className = 'form-control error'

     
}

function setSuccessFor(input) {
     const formControl = input.parentElement
     formControl.className = 'form-control success'

     
}

function isEmail(email) {
     return  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

function isPhone(phone) {
     return  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)
}


 