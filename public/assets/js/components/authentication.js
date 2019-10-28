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

let getAuctionCategories = async () => {
    let options = {
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseUrl + '/auction/getAuctionCategories', options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse.data;
    }catch(err){
        console.log(err);
        return null;
    }

};

const login = async () => {
    let login_email = $("#login-email").val();
    let login_password = $("#login-password").val();

    if(login_email.length === 0 || login_password===0) {
        iziToast.show({
            title: 'Error',
            message: 'Login Password or Email-id cannot be empty',
            titleColor: 'black',
            backgroundColor: 'yellow'
        });
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
            iziToast.show({
                timeout: 1500,
                title: 'Success',
                message: message,
                titleColor: 'black',
                backgroundColor: 'green',
                onClosing: () => {
                    window.location = "home.html"
                }
            });
        }
        else if(message === "Passwords do not match" && error===null) {
            iziToast.show({
                title: 'Error',
                message: 'Password is Incorrect, Please try again',
                titleColor: 'black',
                backgroundColor: 'yellow'
            });
            $("#login-email").val(null);
            $("#login-password").val(null);
        } else if(message === "No such user exists" && error===null) {
            iziToast.show({
                title: 'Error',
                message: message,
                titleColor: 'black',
                backgroundColor: 'yellow'
            });
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
        iziToast.show({
            title: 'Error',
            message: 'Passwords do not match!!!',
            titleColor: 'black',
            backgroundColor: 'yellow'
        });
    }
    else if(register_email.includes("@") === false) {
        iziToast.show({
            title: 'Error',
            message: 'Passwords do not match!!!',
            titleColor: 'black',
            backgroundColor: 'yellow'
        });
    }
    else if(register_password.length < 8) {
        iziToast.show({
            title: 'Error',
            message: 'Password should be of size at least 8',
            titleColor: 'black',
            backgroundColor: 'yellow'
        });
    }
    else if(register_username.length===0 || register_password.length===0 || register_email.length===0) {
        iziToast.show({
            title: 'Error',
            message: 'Input field cannot be empty',
            titleColor: 'black',
            backgroundColor: 'yellow'
        });
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
            iziToast.show({
                timeout: 1500,
                title: 'Success',
                message: response.message,
                titleColor: 'black',
                backgroundColor: 'green',
                onClosing: () => {
                    window.location = "home.html"
                }
            });
        }
    }

};

let generateRightMenu = async () => {

    let categories = await getAuctionCategories();
    console.log(categories);

    categories.map((element,index) => {

        let liElem = '<li>\n' +
            '                        <a href="products.html">\n' +
            '                            <span>' + element.title + '</span> <!--img src="assets/images/icons/living.svg" alt=""-->\n' +
            '                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
            '                                 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n' +
            '                                <g>\n' +
            '                                    <g>\n' +
            '                                        <path d="M458.667,0H53.333C23.893,0.035,0.035,23.893,0,53.333v405.333C0.035,488.107,23.893,511.965,53.333,512h405.333\n' +
            '                                                 c29.441-0.035,53.298-23.893,53.333-53.333V53.333C511.965,23.893,488.107,0.035,458.667,0z M490.667,458.667\n' +
            '                                                 c0,17.673-14.327,32-32,32H53.333c-17.673,0-32-14.327-32-32V53.333c0-17.673,14.327-32,32-32h405.333c17.673,0,32,14.327,32,32\n' +
            '                                                 V458.667z"/>\n' +
            '                                    </g>\n' +
            '                                </g>\n' +
            '                                <g>\n' +
            '                                    <g>\n' +
            '                                        <rect x="245.333" y="42.667" width="21.333" height="352"/>\n' +
            '                                    </g>\n' +
            '                                </g>\n' +
            '                                <g>\n' +
            '                                    <g>\n' +
            '                                        <path d="M320,181.333h-21.333v21.333H320V224h-21.333v21.333H320c0.295,0.006,0.589,0.006,0.884,0\n' +
            '                                                 c11.538-0.244,20.693-9.795,20.449-21.333v-21.333c0.006-0.295,0.006-0.589,0-0.884C341.089,190.245,331.538,181.089,320,181.333z\n' +
            '                                                 "/>\n' +
            '                                    </g>\n' +
            '                                </g>\n' +
            '                                <g>\n' +
            '                                    <g>\n' +
            '                                        <path d="M213.333,202.667v-21.333H192c-0.295-0.006-0.589-0.006-0.884,0c-11.538,0.244-20.693,9.795-20.449,21.333V224\n' +
            '                                                 c-0.006,0.295-0.006,0.589,0,0.884c0.244,11.538,9.795,20.693,21.333,20.449h21.333V224H192v-21.333H213.333z"/>\n' +
            '                                    </g>\n' +
            '                                </g>\n' +
            '                                <g>\n' +
            '                                    <g>\n' +
            '                                        <rect x="42.667" y="384" width="426.667" height="21.333"/>\n' +
            '                                    </g>\n' +
            '                                </g>\n' +
            '                                <g>\n' +
            '                                    <g>\n' +
            '                                        <rect x="234.667" y="437.333" width="42.667" height="21.333"/>\n' +
            '                                    </g>\n' +
            '                                </g>\n' +
            '                            </svg>                </a>\n' +
            '                    </li>';
        $('#rightCategoryMenu').append(liElem);
    });
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
    generateRightMenu();
});
