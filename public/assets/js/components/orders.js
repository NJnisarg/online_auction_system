let baseUrl = 'http://localhost:3000';

const getMyPurchases = async () => {
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
        let response = await fetch(baseUrl + '/auction/getAllAuctions?createdByUserId=' + userData.userId, options);
        let jsonResponse = await response.json();

        console.log(jsonResponse);
        return jsonResponse.data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

let viewMyPurchases = purchases => {
    purchases.map((element, index) => {
        let elem = '<div class="column is-4">\n' +
            '                                    <div class="flat-card order-card has-popover-top">\n' +
            '\n' +
            '                                        <div class="order-info">\n' +
            '                                            <span style="font-family: \'Raleway\', sans-serif;font-weight: 600;font-size: .9rem;">' + element.title + '</span>\n' +
            '                                            <span class="tag is-success">Amount paid</span>\n' +
            '                                        </div>\n' +
            '                                        <div style="margin-top: -20px">\n' +
            '                                            <img style="display: block; margin-left: auto; margin-right: auto" src="assets/images/products/office7.gif" width="180" height="100" >\n' +
            '                                        </div>\n' +
            '                                        <div class="order-info">\n' +
            '                                            <span style="font-size: 75%;font-weight: 500;text-transform: uppercase;color: #828282;">' + element.description + '</span>\n' +
            '                                        </div>\n' +
            '\n' +
            '                                    </div>\n' +
            '        \n' +
            '                                    <!-- Order 46895 Popover -->\n' +
            '                                    <div class="webui-popover-content">\n' +
            '                                        <!-- Popover Block -->\n' +
            '                                        <div class="popover-flex-block">\n' +
            '                                            <img class="staff-avatar" src="assets/images/avatars/janet.jpg" alt="">\n' +
            '                                            <div class="content-block">\n' +
            '                                                <label>Product Sold by</label>\n' +
            '                                                <span>Jane Smith</span>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <!-- Popover Block -->\n' +
            '                                        <div class="popover-flex-block">\n' +
            '                                            <div class="icon-block">\n' +
            '                                                <i data-feather="clock"></i>\n' +
            '                                            </div>\n' +
            '                                            <div class="content-block">\n' +
            '                                                <label>Sold date</label>\n' +
            '                                                <span>mar 23th 2018</span>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <!-- Popover Block -->\n' +
            '                                        <div class="popover-flex-block">\n' +
            '                                            <div class="icon-block">\n' +
            '                                                <i data-feather="dollar-sign"></i>\n' +
            '                                            </div>\n' +
            '                                            <div class="content-block">\n' +
            '                                                <label>Bidding Amount</label>\n' +
            '                                                <span>378,85</span>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                </div>';
        $('#my-purchases').append(elem);
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

    getMyPurchases().then((purchases) => {
        console.log(purchases);
        viewMyPurchases(purchases);
    }).catch(err => {
        console.log(err);
    });

});