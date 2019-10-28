let baseUrl = 'http://localhost:3000';

const getUserProfile = async () => {
    let userData = localStorage.getItem('userData');
    userData = JSON.parse(userData);
    let options = {
        headers : {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + userData.userId
        },
        method: 'GET'
    };

    try {
        let response = await fetch(baseUrl + '/auth/getProfile', options);
        let jsonResponse = await response.json();

        console.log(jsonResponse);
        return jsonResponse.data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

let viewProfile = profile => {
    let first_name = profile[0].name;
    let last_name = profile[0].name;
    let profileDetails = '<div class="column is-5">\n' +
        '        <!-- User card -->\n' +
        '        <div class="flat-card profile-card is-auto">\n' +
        '            <div class="card-body">\n' +
        '                <div class="profile-image">\n' +
        '                    <img src="assets/images/avatars/elie.jpg" alt="">\n' +
        '                </div>\n' +
        '                <div class="username has-text-centered">\n' +
        '                    <span>' + profile[0].name + '</span>\n' +
        '                    <small>Member since Sep 23 2017</small>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="profile-footer has-text-centered">\n' +
        '                <span class="achievement-title">Wallet</span>\n' +
        '                <div class="count">\n' +
        '                    &#8377 ' + profile[0].wallet +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '\n' +
        '    <!-- Details -->\n' +
        '    <div class="column is-7">\n' +
        '        <div class="flat-card profile-info-card is-auto">\n' +
        '            <!-- Title -->\n' +
        '            <div class="card-title">\n' +
        '                <h3>Account details</h3>\n' +
        '\n' +
        '                <div class="edit-account has-simple-popover popover-hidden-mobile" data-content="Edit Account"\n' +
        '                     data-placement="top">\n' +
        '                    <a href="account-edit.html"><i class="feather-icons" data-feather="settings"></i></a>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <!-- Contact Info -->\n' +
        '            <div class="card-body">\n' +
        '                <div class="columns">\n' +
        '                    <div class="column is-6">\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">First Name</span>\n' +
        '                            <span class="label-value">' + first_name + '</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Email</span>\n' +
        '                            <span class="label-value">' + profile[0].emailId + '</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Sex</span>\n' +
        '                            <span class="label-value">' + profile[0].sex + '</span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <div class="column is-6">\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Last Name</span>\n' +
        '                            <span class="label-value">' + last_name + '</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Phone</span>\n' +
        '                            <span class="label-value">+1 555 623 568</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Age</span>\n' +
        '                            <span class="label-value">' + profile[0].age + '</span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <!-- Background Nephos Icon -->\n' +
        '            <img class="card-bg" src="assets/images/logo/nephos-greyscale.svg" alt="">\n' +
        '        </div>\n' +
        '\n' +
        '        <!-- Address Info -->\n' +
        '        <div class="flat-card profile-info-card is-auto">\n' +
        '            <!-- Title -->\n' +
        '            <div class="card-title">\n' +
        '                <h3>Billing address</h3>\n' +
        '                <!-- Cog Button -->\n' +
        '                <div class="edit-account is-vhidden">\n' +
        '                    <a href="account-edit.html"><i class="feather-icons" data-feather="settings"></i></a>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '            <!-- Billing Address -->\n' +
        '            <div class="card-body">\n' +
        '                <div class="columns">\n' +
        '                    <div class="column is-6">\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">House Number</span>\n' +
        '                            <span class="label-value">' + profile[0].houseNo + '</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">State</span>\n' +
        '                            <span class="label-value">' + profile[0].state + '</span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <div class="column is-6">\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Street</span>\n' +
        '                            <span class="label-value">' + profile[0].street + '</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Country</span>\n' +
        '                            <span class="label-value">' + profile[0].country + '</span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <!-- /Address Form -->\n' +
        '        </div>\n' +
        '    </div>';

    $('#account-details').append(profileDetails);
};

$(document).ready(() => {

    if(localStorage.getItem('userData') === undefined || localStorage.getItem('userData') === null) {
        window.location = "authentication.html";
    }
    else{
        let logOutBtn = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>';
        $('#logOutBtn').append(logOutBtn);
        $('#logOutBtn').click(() => {
            localStorage.clear();
            iziToast.show({
                timeout: 1500,
                title: 'Success',
                message: "User logged out successfully",
                titleColor: 'black',
                backgroundColor: 'green',
                onClosing: () => {
                    window.location = "authentication.html"
                }
            });
        });
    }

    getUserProfile().then((profile) => {
        console.log(profile);
        viewProfile(profile);

    }).catch(err => {
        console.log(err);
    });
});