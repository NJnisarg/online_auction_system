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

const editUserProfile = async (editRequest) => {
    let userData = localStorage.getItem('userData');
    userData = JSON.parse(userData);
    editRequest['userId'] = userData.userId;
    let options = {
        headers : {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + userData.userId
        },
        method: 'PUT',
        body: JSON.stringify(editRequest)
    };

    try {
        let response = await fetch(baseUrl + '/auth/editProfile', options);
        let jsonResponse = await response.json();

        console.log(jsonResponse);
        return jsonResponse;
    } catch (err) {
        console.log(err);
        return null
    }
};

let viewEditProfile = profile => {
    let first_name = profile[0].name;
    let last_name = profile[0].name;
    let profileEditDetail = '<div class="column is-4">\n' +
        '                                    <!-- Upload Avatar -->\n' +
        '                                    <div class="flat-card upload-card is-auto">\n' +
        '                                        <div class="card-body">\n' +
        '                                            <!-- Avatar form -->\n' +
        '                                            <div id="avatar-upload" class="avatar-wrapper has-simple-popover" data-content="Change profile picture" data-placement="top">\n' +
        '                                                <img class="profile-pic" src="https://image.ibb.co/b04PYv/placeholder_w.jpg" alt="">\n' +
        '                                                <div class="upload-button">\n' +
        '                                                    <i class="upload-icon" data-feather="plus" aria-hidden="true"></i>\n' +
        '                                                </div>\n' +
        '                                                <input class="file-upload" type="file" accept="image/*"/>\n' +
        '                                            </div>\n' +
        '                                            <!-- /Avatar form -->\n' +
        '        \n' +
        '                                            <!-- User -->\n' +
        '                                            <div class="username has-text-centered">\n' +
        '                                                <span>' + profile[0].name + '</span>\n' +
        '                                                <span>' + profile[0].emailId + '</span>\n' +
        '                                            </div>\n' +
        '        \n' +
        '                                            <div id="edit-profile-submit" class="has-text-centered">\n' +
        '                                                <button class="button feather-button secondary-button">\n' +
        '                                                    Save data\n' +
        '                                                </button>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <!-- /Upload Avatar -->\n' +
        '\n' +
        '                                    <!-- Wallet -->\n' +
        '                                    <div class="flat-card profile-info-card is-auto" style="margin-top: 20px">\n' +
        '                                        <!-- Title -->\n' +
        '                                        <div class="card-title">\n' +
        '                                            <h3>Payment Info</h3>\n' +
        '                                        </div>\n' +
        '                                        <div class="card-body">\n' +
        '                                            <div class="columns">\n' +
        '                                                <div class="column is-12">\n' +
        '                                                    <!-- Form group -->\n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <div id="edit-wallet" class="username has-text-centered">Wallet</div>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input type="number" class="input is-default" value="' + profile[0].wallet + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <!-- /Wallet -->\n' +
        '                                </div>\n' +
        '                                <div class="column is-8">\n' +
        '                                    <!-- Edit contact Info -->\n' +
        '                                    <div class="flat-card profile-info-card is-auto">\n' +
        '                                        <!-- Title -->\n' +
        '                                        <div class="card-title">\n' +
        '                                            <h3>Contact info</h3>\n' +
        '                                        </div>\n' +
        '                                        <div class="card-body">\n' +
        '                                            <div class="columns">\n' +
        '                                                <div class="column is-6">\n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">First Name</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-first-name" type="text" class="input is-default" value="' + first_name + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '        \n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">Email</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-emailId" type="email" class="input is-default" value="' + profile[0].emailId + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '\n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">Sex</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-sex" type="text" class="input is-default" value="' + profile[0].sex + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '        \n' +
        '                                                <div class="column is-6">\n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">Last Name</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-last-name" type="text" class="input is-default" value="' + last_name + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '        \n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">Phone</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-phone-no" type="text" class="input is-default" value="+1 555 623 568">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '\n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">Age</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-age" type="number" class="input is-default" value="' + profile[0].age + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <!-- /Edit contact Info -->\n' +
        '        \n' +
        '                                    <!-- Edit BIlling Address -->\n' +
        '                                    <div class="flat-card profile-info-card is-auto has-overflow">\n' +
        '                                        <!-- Title -->\n' +
        '                                        <div class="card-title">\n' +
        '                                            <h3>Billing Address</h3>\n' +
        '                                        </div>\n' +
        '                                        <div class="card-body">\n' +
        '                                            <div class="columns">\n' +
        '                                                <div class="column is-6">\n' +
        '                                                    <!-- Form group -->\n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">House Number</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-house-no" type="text" class="input is-default" value="' + profile[0].houseNo + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                    <!-- Form group -->\n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">City</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-city" type="text" class="input is-default" value="' + profile[0].city + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '        \n' +
        '                                                <div class="column is-6">\n' +
        '                                                    <!-- Form group -->\n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">Street</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-street" type="text" class="input is-default" value="' + profile[0].street + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                    <!-- Form group -->\n' +
        '                                                    <div class="info-block">\n' +
        '                                                        <span class="label-text">Country</span>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-country" type="text" class="input is-default" value="' + profile[0].country + '">\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <!-- /Edit Billing Address -->\n' +
        '                                </div>';

    $('#edit-account-details').append(profileEditDetail);
    $('#edit-profile-submit').click(function () {
        edit();
    });
};

const edit = async () => {

    let editRequest = {
        name: $("#edit-first-name").val() + " " + $("#edit-last-name").val(),
        emailId: $("#edit-emailId").val(),
        sex: $("#edit-sex").val(),
        age: $("#edit-age").val(),
        houseNo: $("#edit-house-no").val(),
        street: $("#edit-street").val(),
        city: $("#edit-city").val(),
        country: $("#edit-country").val(),
        wallet: $("#edit-wallet").val()
    };
    console.log(editRequest);

    let response = await editUserProfile(editRequest);

    console.log(response);
    if(response.message === "Profile Updated Successfully") {
        alert(response.message);
        window.location = "account.html";
    }
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
        viewEditProfile(profile);

    }).catch(err => {
        console.log(err);
    });
});