CREATE PROCEDURE `OnlineAuctionSchema`()
begin
	drop table if exists Invoice;
    drop table if exists Profile;
    drop table if exists Product;
    drop table if exists Participation;
    drop table if exists Auction;
    drop table if exists User;
    drop table if exists Category;

    create table User(
		userId int primary key auto_increment,
        username varchar(256) unique not null,
        emailId varchar(512) unique not null,
        password varchar(512) not null
    );

    create table Auction(
		auctionId int primary key auto_increment,
        userId int not null,
        title varchar(256) not null,
        imgUrl varchar(512),
        status int default 1,
        description varchar(512),
        startDate date,
        endDate date,
        constraint foreign key(userId) references User(userId)
    );

    create table Participation(
		id int primary key auto_increment,
        userId int not null,
        auctionId int not null,
        constraint foreign key(userId) references User(userId),
        constraint foreign key(auctionId) references Auction(auctionId)

    );

    create table Category(
		categoryId int primary key auto_increment,
		title varchar(256) not null,
        description varchar(512)
    );

    create table Product(
		productId int primary key auto_increment,
        title varchar(256) not null,
        description varchar(512),
        imgUrl varchar(512),
        startingBid int default 0,
        currentBid int default 0,
        closingBid int default 0,
        categoryId int not null,
        auctionId int not null,
        constraint foreign key(categoryId) references Category(categoryId),
        constraint foreign key(auctionId) references Auction(auctionId)
    );

    create table Profile(
		id int primary key auto_increment,
        userId int not null unique,
        name varchar(256),
        imgUrl varchar(512),
        address varchar(512),
        age int default 18,
        dob date,
        sex varchar(3) default 'M',
		constraint foreign key(userId) references User(userId)

    );

    create table Invoice(
		invoiceId int primary key auto_increment,
        txnNo int not null,
        txnDate date,
        amount decimal not null,
        userId int not null,
        productId int not null,
        constraint foreign key(userId) references User(userId),
        constraint foreign key(productId) references Product(productId)
    );

end