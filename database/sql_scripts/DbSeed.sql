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
        ("YashA", "yash@gmail.com", "test@123"),
        ("NJnisarg", "NJ@gmail.com", "test@3121");

    insert into Profile
        (userId, name, imgUrl, houseNo,street,city,country, age, dob, sex, wallet)
    values
        (1, "Yash Agarwal", "", "B-53","Shushil park society", "Vadodara", "India",20, '1999-08-22', "M",1000),
        (2, "Nisarg Joshi", "", "D-36","Jyoti park society", "Vadodara", "India", 20, '1999-02-10', "M",500);

    insert into Category
        (title, description)
    values
        ("Electronics", "Entertainment devices"),
        ("Kitchen", "Common kitchen tasks products"),
        ("Home Decor", "Make your house a peaceful and beautiful home"),
        ("Fashion", "This festive season, fill life "),
        ("Sports", "Time to burn some calories");

    /*
     * Status 0: Inactive, 1: Active, 2: Cancel
     */

    insert into Auction
        (userId, title, imgUrl, status, description, startDate, endDate)
    values
        (1, "Luxury Guitar", "", 1, "Fingering will bring Harmony", '2019-09-10', '2019-11-15'),
        (1, "Jersy 07", "", 1, "Dress worn by Dhoni in 2011 WC final", '2019-09-30', '2019-11-25'),
        (2, "Monalisa Painting", "", 1, "Art work of a fammous artisians", '2019-09-11', '2019-11-11'),
        (2, "Usain Bolt Shoes", "", 1, "Shoes worn by Usain Bolt in 2012 Olymics", '2019-09-10', '2019-11-11');

    insert into Product
        (title, description, imgUrl, startingBid, currentBid, closingBid, categoryId, auctionId)
    values
        ("Luxury Guitar", "Fingering will bring Harmony", "", 10000, 10000, 10000, 1, 1),
        ("Jersy 07", "Dress worn by Dhoni in 2011 WC final", "", 200000, 200000, NULL, 4, 2),
        ("Monalisa Painting", "Art work of a fammous artisians", "", 10000, 10000, NULL, 3, 3),
        ("Usain Bolt Shoes", "Shoes worn by Usain Bolt in 2012 Olymics", "", 50000, 50000, NULL, 5, 4);
end