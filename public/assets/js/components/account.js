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
        '                <span class="achievement-title">Next Achievement</span>\n' +
        '                <div class="count">\n' +
        '                    24/150\n' +
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
        '                            <span class="label-value">Elie</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Email</span>\n' +
        '                            <span class="label-value">eliedaniels@gmail.com</span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <div class="column is-6">\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Last Name</span>\n' +
        '                            <span class="label-value">Daniels</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Phone</span>\n' +
        '                            <span class="label-value">+1 555 623 568</span>\n' +
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
        '                            <span class="label-text">Number</span>\n' +
        '                            <span class="label-value">23, Block C2</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">City</span>\n' +
        '                            <span class="label-value">Los Angeles</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">State</span>\n' +
        '                            <span class="label-value">CA</span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <div class="column is-6">\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Street</span>\n' +
        '                            <span class="label-value">Church Street</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Postal Code</span>\n' +
        '                            <span class="label-value">100065</span>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div class="info-block">\n' +
        '                            <span class="label-text">Country</span>\n' +
        '                            <span class="label-value">United States</span>\n' +
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

    getUserProfile().then((profile) => {
        console.log(profile);
        viewProfile(profile);

    }).catch(err => {
        console.log(err);
    });
});