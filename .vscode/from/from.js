function mailSend(){
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    emailjs.send("service_qe5hbep","template_ek2em98",parms).then(alert("email send!!"));
}