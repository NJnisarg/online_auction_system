let baseUrl = 'http://localhost:3000';

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

let generateCenterCategories = async () => {
    let categories = await getAuctionCategories();
    console.log(categories);

    let child = [null,null,null];
    let parentTile = null;
    categories.map((elem,index) => {
        console.log(index);
        if((index+1)%3!==0){
            child[index%3] ='<a href="products.html"> <article class="tile is-child has-min-height has-background-image" data-background="assets/images/bg/house.jpeg" onClick="return true">\n' +
            '                                            <div class="tile-content">\n' +
            '                                                <h2 class="shop-category">' + elem.title + '</h2>\n' +
            '                                                <div class="divider"></div>\n' +
            '                                                <p>Description</p>\n' +
            '                                                <p class="is-italic">' + elem.description + '</p>\n' +
            '                                                <div class="products">\n' +
            '                                                    ' + elem.productCount + ' <span>Products</span>\n' +
            '                                                </div>\n' +
            '                                                <a href="products.html" class="action">\n' +
            '                                                    <span>Discover</span>\n' +
            '                                                    <i data-feather="chevron-right"></i>\n' +
            '                                                </a>\n' +
            '                                            </div>\n' +
            '                                            <!-- Overlay -->\n' +
            '                                            <div class="tile-overlay"></div>\n' +
            '                                        </article></a> ';
        }
        else{
            child[index%3] =' <a href="products.html"><article class="tile is-child has-min-height has-background-image" data-background="assets/images/bg/house.jpeg" onClick="return true">\n' +
                '                                            <div class="tile-content">\n' +
                '                                                <h2 class="shop-category">' + elem.title + '</h2>\n' +
                '                                                <div class="divider"></div>\n' +
                '                                                <p>Description</p>\n' +
                '                                                <p class="is-italic">' + elem.description + ' '+
                '                                                <div class="products">\n' +
                '                                                    ' + elem.productCount + ' <span>Products</span>\n' +
                '                                                </div>\n' +
                '                                                <a href="products.html" class="action">\n' +
                '                                                    <span>Discover</span>\n' +
                '                                                    <i data-feather="chevron-right"></i>\n' +
                '                                                </a>\n' +
                '                                            </div>\n' +
                '                                            <!-- Overlay -->\n' +
                '                                            <div class="tile-overlay"></div>\n' +
                '                                        </article> </a>';
            parentTile = '<div class="tile is-parent is-12" style="height:200px;">\n' + child[0] + child[1] + child[2] + '</div>';
            $('#centerCategoriesTile').append(parentTile);
            child[0] = null;
            child[1] = null;
            child[2] = null;
        }
    });
    parentTile = '<div class="tile is-parent is-12" style="height:200px;">\n' + (child[0]===null?"":child[0]) + (child[1]===null?"":child[1]) + (child[2]===null?"":child[2]) + '</div>';
    $('#centerCategoriesTile').append(parentTile);



};

$(document).ready(() => {

    if(localStorage.getItem('userData') === undefined || localStorage.getItem('userData') === null) {
        let guestUser = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
        $('#logOutBtn').append(guestUser);
        $('#logOutBtn').click(() => {
            window.location = "authentication.html";
        });
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
    generateCenterCategories();
});