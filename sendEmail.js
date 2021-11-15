// Your code to validate your form and send the email will go here!
// All Fields are required for submission
// Make sure the Password and Confirm Password Match

//const { EmailJSResponseStatus } = require("emailjs-com");

//const emailjs = new EmailJSResponseStatus();
//emailjs.init("user_8hFzw0k1iISoNnw3xTAa2")
// Let the user know if the passwords to not match
// Also let the user know when the email has been successfully sent

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault()
    const serviceID = 'default_service';
    const templateID = 'template_u6ye0qt';

    const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let fname = document.forms["submit-form"]["first-name"].value;
    let lname = document.forms["submit-form"]["last-name"].value;
    let email = document.forms["submit-form"]["email"].value;
    let p1 = document.forms["submit-form"]["password"].value;
    let p2 = document.forms["submit-form"]["password2"].value;

    let allWarnings = document.querySelectorAll(".form-group span")
    for(warning of allWarnings)
            warning.innerHTML = "";

    if (fname == "") {
        //alert("You gotta enter your full name please!");
        let warningSpan = document.querySelector(".first-name span");
        warningSpan.innerHTML = "Please enter a first name!";
    }
    else if(lname == "")
    {
        let warningSpan = document.querySelector(".last-name span");
        warningSpan.innerHTML = "Please enter a last name!";
    }
    else if (!emailRE.test(email)) {
        let warningSpan = document.querySelector(".email span");
        warningSpan.innerHTML = "Please enter a valid email!";
    }
    else if(p1 == "")
    {
        let warningSpan = document.querySelector(".password span");
        warningSpan.innerHTML = "Please enter a password!"
    }
    else if (p1 != p2) {
        let warningSpan = document.querySelector(".password2 span");
        warningSpan.innerHTML = "Passwords do not match!"
    }
    else {
        emailjs.sendForm(serviceID, templateID, document.forms["submit-form"])
            .then(() => {
                //btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                //btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    }

});



function validateForm() {
    //console.log(document.forms["submit-form"]["first-name"].value);
    const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let fname = document.forms["submit-form"]["first-name"].value;
    let lname = document.forms["submit-form"]["last-name"].value;
    let email = document.forms["submit-form"]["email"].value;
    let p1 = document.forms["submit-form"]["password"].value;
    let p2 = document.forms["submit-form"]["password2"].value;

    if (fname == "" || lname == "") {
        console.log("You gotta enter your full name fammm");
    }
    if (!emailRE.test(email)) {
        console.log("you gotta enter a valid email!");
    }
    if (p1 != p2) {
        console.log("your passwords do not match!");
    }
    else {
        emailjs.sendForm(serviceID, templateID, document.forms["submit-form"])
            .then(() => {
                //btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                //btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    }


    const serviceID = 'default_service';
    const templateID = 'template_u6ye0qt';

    emailjs.sendForm(serviceID, templateID, document.forms["submit-form"])
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
}

