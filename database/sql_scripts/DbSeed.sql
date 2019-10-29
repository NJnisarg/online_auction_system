CREATE PROCEDURE `DbSeed`()
begin
    set foreign_key_checks = 0;
    truncate table Auction;
    truncate table Category;
    truncate table Invoice;
    truncate table Participation;
    truncate table Product;
    truncate table Profile;
    truncate table User;
    set foreign_key_checks = 1;

    insert into User
        (username, emailId, password)
    values
        ("YashA", "YashA@gmail.com", "$2a$08$A8PjI5j6GOcsAmdIH9tpauqyp5iFB1CT.B1MGUSFuZ.HWQYDdZUcq"),
        ("NJnisarg", "NJnisarg@gmail.com", "$2a$08$A8PjI5j6GOcsAmdIH9tpauqyp5iFB1CT.B1MGUSFuZ.HWQYDdZUcq"),
        ("yashyash","yash786@gmail.com","$2a$08$A8PjI5j6GOcsAmdIH9tpauqyp5iFB1CT.B1MGUSFuZ.HWQYDdZUcq");

    insert into Profile
        (userId, name, imgUrl, houseNo, street, city, country, age, dob, sex, wallet)
    values
        (1, "Yash Agarwal", "assets/images/backend/profile1.jpg", "B-53","Shushil park society", "Vadodara", "India",20, '1999-08-22', "M",1000),
        (2, "Nisarg Joshi", "assets/images/backend/profile2.jpg", "D-36","Jyoti park society", "Vadodara", "India", 20, '1999-02-10', "M",500),
        (3, "Yash Manoj", "assets/images/backend/profile3.jpg", "D-36","Jyoti park society", "Vadodara", "India", 20, '1999-02-10', "M",500);

    insert into Category
        (title, description)
    values
        ("Electronics", "Vintage electronics have become an area of interest to collectors in recent years. Some collectors enjoy finding electronic devices that they used when the devices were new."),
        ("Kitchen", "A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment. A modern middle-class residential kitchen is typically equipped with a stove, a sink with hot and cold running water, a refrigerator, and worktops and kitchen cabinets arranged according to a modular design."),
        ("Home Decor", "Home accessories are furniture items which are easy to replace and easy to move, and include almost any items that are not strictly functionally necessary in a decorated space. These accessories include such items as curtains, sofa sets, cushions, tablecloths and decorative craft products, decorative wrought iron, and so on."),
        ("Fashion", "Fashion is a popular aesthetic expression in a certain time and context, especially in clothing, footwear, lifestyle, accessories, makeup, hairstyle and body proportions.[1] Whereas, a trend often connotes a very specific aesthetic expression, and often lasting shorter than a season, fashion is a distinctive and industry-supported expression traditionally tied to the fashion season and collections"),
        ("Sports", "Sport includes all forms of competitive physical activity or games which,[1] through casual or organised participation, aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators.[2] Hundreds of sports exist, from those between single contestants");

    /*
     * Status 0: Inactive, 1: Active
     */

    insert into Auction
        (userId, title, imgUrl, status, description, startDate, endDate)
    values
        (1, "Luxury Guitar", "assets/images/backend/guitar.jpg", 1, "The Slowhand Series Acoustic series, finely crafted guitar to give complete tonal control. Designed in premium gloss finish Mahogany body. Fret board and bridge made of Indian Rosewood thus, ensuring great sound quality. Built with Zebra top and equipped with an in-built equalizer.", '2019-10-25', '2019-11-02'),
        (1, "Jersy 07", "assets/images/backend/jersey.jpg", 1, "Ronaldo's epic graphic tee in active Black colour. Our t-shirts and denim were made for each other. Our collection of graphic tees; vintage-inspired and modern styles to wear with your favourite jeans are made with soft jersey for extra comfort.", '2019-10-25', '2019-11-01'),
        (2, "Monalisa Painting", "assets/images/backend/painting.jpg", 1, "Interio Crafts certificate frame well display your favorite achievements and keepsakes. These document frames are perfect enhancement for your award, certificate, prized achievements, school diplomas, photographs and treasured memorabilia.", '2019-10-25', '2019-11-02'),
        (2, "Usain Bolt Shoes", "assets/images/backend/shoes.jpg", 1, "The Nike Domain 2 Unisex Cricket Shoe delivers lightweight cushioning and superb grip on the field with a Phylon midsole and aggressive traction pattern.Displaying a minimalistic, low-ankle silhouette, these white ‘Domain 2’ men’s cricket shoes from Nike", '2019-09-10', '2019-11-01'),
        (1, "Vintage Fridge", "assets/images/backend/fridge.jpg", 1, "Keep your veggies and edibles fresh with this Croma refrigerator. The single door refrigerator is perfect for contemporary kitchen spaces and comes with innovative additions that will make you go wow.", '2019-10-25', '2019-10-30'),
        (2, "Madonna's Nail Polish", "assets/images/backend/nail_polish.jpg", 1, "A cool gift for ladies.This display has a total of 6 separate compartments, ideal for displaying Lipsticks 6 compartments for lipsticks, nail paints. Made from High Quality Clear Acrylic.", '2019-10-25', '2019-10-27'),
        (2, "Marshian cooker by Elon", "assets/images/backend/cooker.jpg", 1, "At Dynamic Cookwares, we believe in producing products of the utmost quality. Every product that flows through our manufacturing line is cared for and polished to perfection.", '2019-10-25', '2019-10-27');

    insert into Product
        (title, imgUrl, description, startingBid, currentBid, closingBid, categoryId, auctionId)
    values
        ("Luxury Guitar", "assets/images/backend/guitar.jpg", "The Slowhand Series Acoustic series, finely crafted guitar to give complete tonal control. Designed in premium gloss finish Mahogany body. Fret board and bridge made of Indian Rosewood thus, ensuring great sound quality. Built with Zebra top and equipped with an in-built equalizer.", 10000,10000,10000,1,1),
        ("Jersy 07", "assets/images/backend/jersey.jpg", "Ronaldo's epic graphic tee in active Black colour. Our t-shirts and denim were made for each other. Our collection of graphic tees; vintage-inspired and modern styles to wear with your favourite jeans are made with soft jersey for extra comfort.",5000,5000,5000,5,2),
        ("Monalisa Painting", "assets/images/backend/painting.jpg", "Interio Crafts certificate frame well display your favorite achievements and keepsakes. These document frames are perfect enhancement for your award, certificate, prized achievements, school diplomas, photographs and treasured memorabilia.", 12000,12000,12000,3,3),
        ("Usain Bolt Shoes", "assets/images/backend/shoes.jpg", "The Nike Domain 2 Unisex Cricket Shoe delivers lightweight cushioning and superb grip on the field with a Phylon midsole and aggressive traction pattern.Displaying a minimalistic, low-ankle silhouette, these white ‘Domain 2’ men’s cricket shoes from Nike", 4000,5000,5000,5,4),
        ("Vintage Fridge", "assets/images/backend/fridge.jpg", "Keep your veggies and edibles fresh with this Croma refrigerator. The single door refrigerator is perfect for contemporary kitchen spaces and comes with innovative additions that will make you go wow.", 70000,80000,80000,1,5),
        ("Madonna's Nail Polish", "assets/images/backend/nail_polish.jpg", "A cool gift for ladies.This display has a total of 6 separate compartments, ideal for displaying Lipsticks 6 compartments for lipsticks, nail paints. Made from High Quality Clear Acrylic.", 1500,1700,1700,4,6),
        ("Marshian cooker by Elon", "assets/images/backend/cooker.jpg", "At Dynamic Cookwares, we believe in producing products of the utmost quality. Every product that flows through our manufacturing line is cared for and polished to perfection.", 19000,20000,20000,2,7);


    insert into Participation
        (userId, auctionId, bidAmt)
    values
        (2,5,80000),
        (1,7,19500),
        (1,6,1600),
        (3,6,1700),
        (3,7,20000),
        (3,5,75000),
        (3,4,5000);

    insert into Invoice(txnNo,txnDate,amount,userId,productId) values (1,'2019-10-27',20000,3,7);
end