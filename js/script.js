
function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("show");

}



const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");


        if (name === "" || email === "" || subject === "" || message === "") {

            formMessage.innerText = "Please fill all the fields.";

            return;
        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            formMessage.innerText = "Please enter a valid email address.";

            return ;
        }


        formMessage.innerText =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();

    });

}