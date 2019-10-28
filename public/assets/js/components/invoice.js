let baseUrl = 'http://localhost:3000';

const getMyProfile = async () => {
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

let getInvoice = async (auctionId) => {

    let userData = JSON.parse(localStorage.getItem("userData"));

    let options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token ' + userData.token
        },
        method: 'GET'
    };
    try{
        let response = await fetch(baseUrl + '/auction/getInvoice?auctionId=' + auctionId, options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse.data;
    }catch(err){
        console.log(err);
        return null;
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

let generateInvoice = async () => {


    let winUrl = window.location.href;
    let auctionId = winUrl.split('?auctionId=')[1];
    let invoiceData = await getInvoice(auctionId);
    if(invoiceData === null || invoiceData===undefined || invoiceData.length===0)
        window.location = "orders.html";

    invoiceData = invoiceData[0];

    let selfProfile = await getMyProfile();
    selfProfile = selfProfile[0];

    let invoiceElem = '<!-- Invoice Layout -->\n' +
        '                    <div class="columns account-header">\n' +
        '                        <div class="column is-8 is-offset-2 invoice-wrap is-invoice-landscape-padded">\n' +
        '                            <!-- Invoice controls -->\n' +
        '                            <div class="invoice-controls">\n' +
        '                                <a href="orders.html" class="button feather-button is-bold primary-button raised">Back</a>\n' +
        '                            </div>\n' +
        '                            <!-- Invoice -->\n' +
        '                            <div class="invoice">\n' +
        '                                <div class="columns is-flex-mobile">\n' +
        '                                    <!-- Invoice Brand -->\n' +
        '                                    <div class="column is-7">\n' +
        '                                        <img src="assets/images/logo/nephos.svg" class="logo" alt="">\n' +
        '                                    </div>\n' +
        '                                    <!-- Invoice Meta -->\n' +
        '                                    <div class="column is-5">\n' +
        '                                        <p class="invoice-meta has-text-right">\n' +
        '                                            <span>Invoice No <small>' + invoiceData.invoiceId + '</small></span>\n' +
        '                                            <br>\n' +
        '                                            <span>Txn No <small>' + invoiceData.txnNo + '</small></span>\n' +
        '                                        </p>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="columns">\n' +
        '                                    <!-- Supplier Info -->\n' +
        '                                    <div class="column is-7">\n' +
        '                                        <p class="seller">\n' +
        '                                            <span>'+ invoiceData.name + '</span><br>\n' +
        '                                            ' + invoiceData.street + '<br>\n' +
        '                                            ' + invoiceData.city + '<br>\n' +
        '                                            ' + invoiceData.country + '<br>\n' +
        '                                        </p>\n' +
        '                                        <br>\n' +
        '                                        <!-- Invoice date -->\n' +
        '                                        <p class="invoice-meta has-text-left">\n' +
        '                                            <span>Bid Closed On : <small class="date">' + invoiceData.endDate + '</small></span>\n' +
        '                                        </p>\n' +
        '                                    </div>\n' +
        '                                    <!-- Customer Info -->\n' +
        '                                    <div class="column is-5">\n' +
        '                                        <p class="buyer has-text-right">\n' +
        '                                            <span>'+ selfProfile.name + '</span><br>\n' +
        '                                            ' + selfProfile.street + '<br>\n' +
        '                                            ' + selfProfile.city + '<br>\n' +
        '                                            ' + selfProfile.country + '<br>\n' +
        '                                        </p>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <br>\n' +
        '                                <br>\n' +
        '                                <!-- Row -->\n' +
        '                                <div class="columns">\n' +
        '                                    <div class="column">\n' +
        '                                        <!-- Purchased Products -->\n' +
        '                                        <table class="table table-striped responsive-table">\n' +
        '                                            <!-- Header -->\n' +
        '                                            <thead>\n' +
        '                                                <tr>\n' +
        '                                                    <th>Product</th>\n' +
        '                                                    <th class="has-text-centered">Quantity</th>\n' +
        '                                                    <th>Starting Bid</th>\n' +
        '                                                    <th>Closing Bid</th>\n' +
        '                                                </tr>\n' +
        '                                            </thead>\n' +
        '                                            <tbody>\n' +
        '                                                <!-- Product -->\n' +
        '                                                <tr>\n' +
        '                                                    <td>\n' +
        '                                                        <span class="product">' + invoiceData.title + '</span> \n' +
        '                                                        <br>\n' +
        '                                                        <span class="sku">' + invoiceData.description + '</span>\n' +
        '                                                    </td>\n' +
        '                                                    <td class="has-text-centered">\n' +
        '                                                        <span class="quantity">1</span>\n' +
        '                                                    </td>\n' +
        '                                                    <td class="text-right">\n' +
        '                                                        <span class="unit-price">' + invoiceData.startingBid + '</span>\n' +
        '                                                    </td>\n' +
        '                                                    <td class="text-right">\n' +
        '                                                        <span class="total-price">' + invoiceData.closingBid + '</span>\n' +
        '                                                    </td>\n' +
        '                                                </tr>\n' +
        '                                            </tbody>\n' +
        '                                        </table>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="columns">\n' +
        '                                    <div class="column is-7">\n' +
        '                                    </div>\n' +
        '                                    <!-- Total subtable -->\n' +
        '                                    <div class="column is-5">\n' +
        '                                        <table class="table table-sm sub-table text-right">\n' +
        '                                            <tr>\n' +
        '                                                <td><span class="total">Total</span></td>\n' +
        '                                                <td class="text-right"><span class="total-value">' + invoiceData.closingBid + '</span></td>\n' +
        '                                            </tr>\n' +
        '                                        </table>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <br>\n' +
        '                                <!-- Company Bank Account Info -->\n' +
        '                                <p class="bottom-page has-text-right">\n' +
        '                                    <span class="company">NEPHOS LTD</span> <br>\n' +
        '                                    <span class="id">ID° 80897753200015 NY</span><br>\n' +
        '                                    <span class="url">nephos.com/customers</span><br>\n' +
        '                                    <span class="code">IBAN FR76 1470 7034 0031 4211 7882 825</span><br> \n' +
        '                                    <span class="code">SWIFT CCBPFRPPMTZ</span>\n' +
        '                                </p>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>';

    $('#invoiceContainer').append(invoiceElem);
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

    generateRightMenu();
    generateInvoice();
});