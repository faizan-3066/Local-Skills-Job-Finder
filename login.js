let selectedRole = "";
function selectRole(role) {
    selectedRole = role;
    document.getElementById("customer").classList.remove("active");
    document.getElementById("provider").classList.remove("active");
    if (role == "Customer") {
        document.getElementById("customer").classList.add("active");
    }
    else {
        document.getElementById("provider").classList.add("active");
    }
}
function login(event) {

    event.preventDefault();

    if (selectedRole == "") {
        alert("Please select Customer or Service Provider");
    }
    else {
        alert("Login as " + selectedRole);
    }
}
