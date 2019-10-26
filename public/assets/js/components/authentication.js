let baseUrl = 'http://localhost:3000';

const authenticateUser = async (login_email, login_password) => {
    let data = {
        'emailId': login_email,
        'password': login_password
    };

    let options = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(data)
    };

    try {
        let response = await fetch(baseUrl + '/auth/login', options);
        let jsonResponse = await response.json();

        return jsonResponse;
    }
    catch (err) {
        console.log(err);
        return null;
    }
};

const registerUser = async (register_username, register_password, register_email) => {
    let data = {
        'username': register_username,
        'emailId': register_email,
        'password': register_password
    };

    let options = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(data)
    };

    try {
        let response = await fetch(baseUrl + '/auth/register', options);
        let jsonResponse = await response.json();

        return jsonResponse;
    }
    catch (err) {
        console.log(err);
        return null;
    }

};

const login = async () => {
    let login_email = $("#login-email").val();
    let login_password = $("#login-password").val();

    if(login_email.length === 0 || login_password===0) {
        alert("Login Password or Email-id cannot be empty");
    }
    else {
        console.log(login_email + "  " + login_password);

        let response = await authenticateUser(login_email, login_password);
        console.log(response);

        let message = response.message;
        let error = response.error;

        if(message === "User Authenticated Successfully"){
            let localData = {
                userId: response.data.userId,
                token: response.data.token
            };
            localStorage.removeItem("userData");
            localStorage.setItem("userData", JSON.stringify(localData));
            alert(message);
            window.location = "index.html";
        }
        else if(message === "Passwords do not match" && error===null) {
            alert("Password is Incorrect, Please try again");
            $("#login-email").val(null);
            $("#login-password").val(null);
        } else if(message === "No such user exists" && error===null) {
            alert(message);
            $("#login-email").val(null);
            $("#login-password").val(null);
        }
    }
};

const register = async () => {
    let register_username = $("#register-username").val();
    let register_email = $("#register-email").val();
    let register_password = $("#register-password").val();
    let confirm_password = $("#register-confirm").val();

    if(confirm_password !== register_password) {
        alert("Passwords do not match!!!");
    }
    else if(register_email.includes("@") === false) {
        alert("Email-Id is Invalid, Enter a valid email-Id");
    }
    else if(register_password.length < 8) {
        alert("Password should be of size at least 8");
    }
    else if(register_username.length===0 || register_password.length===0 || register_email.length===0) {
        alert("Input field cannot be empty");
    }
    else {
        console.log(register_username + "   " + register_password + "    " + register_email);
        let response = await registerUser(register_username, register_password, register_email);

        console.log(response);
        if(response.message === "User Created Successfully") {
            let localData = {
                userId: response.data.userId,
                token: response.data.token
            };
            localStorage.removeItem("userData");
            localStorage.setItem("userData", JSON.stringify(localData));
            alert(response.message);
            window.location = "home.html";
        }
    }

};

$('#login-submit').click(function () {
    login();
});

$('#register-submit').click(function () {
    register();
});

$(document).ready(() => {
    if(localStorage.getItem("userData") !== null && localStorage.getItem("userData") !== undefined)
    {
        window.location = "home.html";
    }
});
