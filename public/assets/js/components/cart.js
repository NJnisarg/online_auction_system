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

let viewMyBiddings = biddings => {
    biddings.map((element, index) => {
        let elem = '<a href="product-carousel.html?auctionId=' + element.auctionId + '"> <div class="column is-12">\n' +
            '                                    <!-- Product -->\n' +
            '                                    <div class="flat-card is-auto cart-card">\n' +
            '                                        <ul class="cart-content">\n' +
            '                                            <li>\n' +
            '                                                <img src="assets/images/products/office6.png" alt="">\n' +
            '                                                <span class="product-info">\n' +
            '                                                    <span>' + element.title + '</span>\n' +
            '                                                    <span>' + element.categoryName + '</span>\n' +
            '                                                </span>\n' +
            '                                                <span class="product-price">\n' +
            '                                                    <span>Current Price</span>\n' +
            '                                                    <span>' + element.currentBid + '</span>\n' +
            '                                                </span>\n' +
            '                                                <span class="product-price">\n' +
            '                                                    <span>My Bid</span>\n' +
            '                                                    <span>' + element.bidAmt + '</span>\n' +
            '                                                </span>\n' +
            '                                            </li>\n' +
            '                                        </ul>\n' +
            '                                    </div>\n' +
            '                                </div> </a>';
        $("#my-bid-list").append(elem);
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
});