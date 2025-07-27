
document.getElementById("contactForm").addEventListener("submit", function(event)
 {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "")
    {
        alert("Please fill all the fields!");
        return;
    }

    document.getElementById("responseMessage").innerText = `Thank you, ${name}! We will get back to you soon.`;
    this.reset(); // Clears the form fields
});



