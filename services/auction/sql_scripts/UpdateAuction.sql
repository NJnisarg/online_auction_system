create procedure UpdateAuction(IN arg_auctionId int, IN arg_title varchar(256), IN arg_description varchar(512), IN arg_imgUrl varchar(512) ,IN arg_startDate varchar(128), IN arg_endDate varchar(128), IN arg_categoryId int, IN arg_startingBid int)
begin
    update Auction set title = coalesce(arg_title, title), description = coalesce(arg_description, description), imgUrl = coalesce(arg_imgUrl, imgUrl), startDate = coalesce(arg_startDate, startDate), endDate = coalesce(arg_endDate, endDate) where auctionId = arg_auctionId;
    update Product set title = coalesce(arg_title, title), description = coalesce(arg_description, description), imgUrl = coalesce(arg_imgUrl, imgUrl), startingBid = coalesce(arg_startingBid, startingBid), categoryId = coalesce(arg_categoryId, categoryId) where auctionId = arg_auctionId;

    select * from Auction A inner join Product P on A.auctionId = P.auctionId where A.auctionId = arg_auctionId;
end