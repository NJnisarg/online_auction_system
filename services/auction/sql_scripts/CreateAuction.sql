create procedure CreateAuction(IN arg_userId int, IN arg_title varchar(256), IN arg_description varchar(512), IN arg_imgUrl varchar(512) ,IN arg_startDate varchar(128), IN arg_endDate varchar(128), IN arg_categoryId int, IN arg_startingBid int)
begin
    declare arg_auctionId int default 0;

    insert into Auction(userId,title,description,imgUrl,startDate,endDate) values (arg_userId,arg_title,arg_description,arg_imgUrl,arg_startDate,arg_endDate);
    set arg_auctionId = (select auctionId from Auction where userId = arg_userId and title = arg_title);

    insert into Product(title,description,imgUrl,startingBid,currentBid,closingBid,categoryId,auctionId) values (arg_title,arg_description, arg_imgUrl,arg_startingBid,arg_startingBid,arg_startingBid,arg_categoryId,arg_auctionId);

    select * from Auction A inner join Product P on A.auctionId = P.auctionId where A.auctionId = arg_auctionId;
end