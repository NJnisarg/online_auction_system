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

const getAuctionCategories = async () => {
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

let viewEditProfile = profile => {
    // let first_name = profile[0].name.split(' ')[0];
    // let last_name = profile[0].name.split(' ')[1];
    let first_name = "";
    let last_name = "";
    let profileEditDetail = '<div class="column is-4">\n' +
        '                                    <!-- Upload Avatar -->\n' +
        '                                    <div class="flat-card upload-card is-auto">\n' +
        '                                        <div class="card-body">\n' +
        '                                            <!-- Avatar form -->\n' +
                                                '<div class="avatar-upload">\n' +
        '                                            <div class="avatar-edit">\n' +
        '                                                <input type=\'file\' id="imageUpload" accept=".png, .jpg, .jpeg" />\n' +
        '                                                <label for="imageUpload"></label>\n' +
        '                                            </div>\n' +
        '                                            <div class="avatar-preview">\n' +
        '                                                <div id="imagePreview" style="background-image: url(http://i.pravatar.cc/500?img=7);">\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>' +
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
        '                                                        <div class="username has-text-centered">Wallet</div>\n' +
        '                                                        <div class="control">\n' +
        '                                                            <input id="edit-wallet" type="number" class="input is-default" value="' + profile[0].wallet + '">\n' +
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

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
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
        wallet: parseFloat($("#edit-wallet").val()),
        imgUrl: "assets/images/backend/" + document.getElementById("imageUpload").files[0].name
    };
    console.log(editRequest);

    let response = await editUserProfile(editRequest);

    console.log(response);
    if(response.message === "Profile Updated Successfully") {
        iziToast.show({
            timeout: 1500,
            title: 'Success',
            message: response.message,
            titleColor: 'black',
            backgroundColor: 'green',
            onClosing: () => {
                window.location = "account.html"
            }
        });
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

    generateRightMenu();
});