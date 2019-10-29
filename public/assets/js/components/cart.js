let baseUrl = 'http://localhost:3000';

const getMyBiddings = async () => {
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
        let response = await fetch(baseUrl + '/auction/getMyBids', options);
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

let viewMyBiddings = biddings => {
    biddings.map((element, index) => {
        let elem = '<a href="product-carousel.html?auctionId=' + element.auctionId + '"> <div class="column is-12">\n' +
            '                                    <!-- Product -->\n' +
            '                                    <div class="flat-card is-auto cart-card">\n' +
            '                                        <ul class="cart-content">\n' +
            '                                            <li>\n' +
            '                                                <img src="' + element.imgUrl +'" alt="">\n' +
            '                                                <span class="product-info">\n' +
            '                                                    <span>' + element.title + '</span>\n' +
            '                                                    <span>' + element.categoryName + '</span>\n' +
            '                                                </span>\n' +
            '                                                <span style="margin:20px">\n' +
            '                                                    <span>Current</span>\n' +
            '                                                    <span>&#8377 ' + element.currentBid + '</span>\n' +
            '                                                </span>\n' +
            '                                                <span>\n' +
            '                                                    <span>My Bid</span>\n' +
            '                                                    <span>&#8377 ' + element.bidAmt + '</span>\n' +
            '                                                </span>\n' +
            '                                            </li>\n' +
            '                                        </ul>\n' +
            '                                    </div>\n' +
            '                                </div> </a>';
        $("#my-bid-list").append(elem);
    });
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

    getMyBiddings().then((biddings) => {
        console.log(biddings);
        viewMyBiddings(biddings);
    }).catch(err => {
        console.log(err);
    });

    generateRightMenu();
});