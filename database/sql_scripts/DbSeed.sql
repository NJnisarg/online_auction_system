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
        ("NJnisarg", "NJ@gmail.com", "test@3121"),
        ("mario", "mario@gmail.com", "test@423"),
        ("jenny", "jenn@gmail.com", "test@574"),
        ("olivia", "olive@gmail.com", "test@5243");

    insert into Profile
        (userId, name, imgUrl, address, age, dob, sex)
    values
        (1, "Yash Agarwal", "", "Vadodara", 20, '1999-08-22', "M"),
        (2, "Nisarg Joshi", "", "Bangalore", 20, '1999-02-10', "M"),
        (3, "Mario Matic", "", "Italy", 31, '1988-11-13', "M"),
        (4, "Jenny Cherry", "", "Los Angeles", 21, '1998-03-30', "F"),
        (5, "Olivia Lee", "", "Spain", 24, '1995-04-12', "F");

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
        (1, "Music Auction", "", 1, "Music memorabilia of pop and roll collectibles", '2019-10-10', '2019-11-11'),
        (1, "Vintage Auction", "", 0, "Vintage Fashion collection of 90s era", '2019-10-27', '2019-11-27'),
        (2, "Art Auction", "", 2, "Fine art auction of 17th Century", '2019-08-11', '2019-09-11'),
        (2, "Sports Auction", "", 1, "Authentic Wears of Legendry athletics", '2019-10-10', '2019-11-11');

    insert into Product
        (title, description, imgUrl, startingBid, currentBid, closingBid, categoryId, auctionId)
    values
        ("Luxury Guitar", "Fingering will bring Harmony", "", 10000, 10000, NULL, 1, 1),
        ("Jersy 07", "Dress worn by Dhoni in 2011 WC final", "", 2000000, 2000000, NULL, 4, 2),
        ("Monalisa Painting", "Art work of a fammous artisians", "", 10000, 10000, NULL, 3, 3),
        ("Usain Bolt Shoes", "Shoes worn by Usain Bolt in 2012 Olymics", "", 50000, 50000, NULL, 5, 4);

    insert into Participation
        (userId, auctionId)
    values
        (2, 1),
        (3, 1),
        (4, 1),
        (5, 1),
        (2, 2),
        (3, 2),
        (4, 2),
        (5, 2),
        (1, 3),
        (3, 3),
        (4, 3),
        (5, 3),
        (1, 4),
        (3, 4),
        (4, 4),
        (5, 4);
end