
function sendMail() {
    Email.send({
        // SecureToken: "ca19a799-1b49-413b-89df-8e0f797646ef",
        Host : "smtp.gmail.com",
        Username : "ganeshramc0703@gmail.com",
        Password : "ejto titj nell qfqg",
        To: 'ganeshramc0703@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Enquiry Form",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email:" + document.getElementById("email").value +
            "<br> Number:" + document.getElementById("phone").value +
            "<br> Message:" + document.getElementById("msg").value
    }).then(
        message => {
            console.log(message);
            alert("Message has been sent successfully");
        },
        error => {
            console.error(error);
            alert("Error sending the message. Please try again later.");
        }
    );
}

var sidenav = document.querySelector(".hamburger")

function showNav() {
    sidenav.style.left = "0%"
}

function closeNav() {
    sidenav.style.left = "-50%"
}



