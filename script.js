function script() {
    let fullName = document.getElementById("fullName").value.trim()
    let email = document.getElementById("email").value.trim()
    let komen = document.getElementById("komen").value.trim()

    if(fullName == ""){
        alert("Full name is required!")
        return false
    }

    if(fullName.length <= 3) {
        alert("Please Enter More Than 3 Characters")
        return false;
    }

    if(email == ""){
        alert("Email is required!")
        return false
    }

    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        alert("Email must contain '@' and '.com'");
        return false;
    }

    
    if(komen.split(/\s+/).length < 3) {
        alert("Message must have at least 3 words")
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}

