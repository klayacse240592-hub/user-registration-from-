function register(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Registration successful, " + name + "!");

    window.location.href = "success.html";
}
