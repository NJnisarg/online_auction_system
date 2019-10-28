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
    if(localStorage.getItem("userData") === null || localStorage.getItem("userData") === undefined)
    {
        window.location = "home.html";
    }

    getMyBiddings().then((biddings) => {
        console.log(biddings);
        viewMyBiddings(biddings);
    }).catch(err => {
        console.log(err);
    });
});