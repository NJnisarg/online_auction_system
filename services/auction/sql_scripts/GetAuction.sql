CREATE PROCEDURE `GetAuction`(IN arg_auctionId int)
begin
    select *, (select count(id) from Participation where auctionId = arg_auctionId) as numBids from Auction A inner join Product P on A.auctionId = P.auctionId where A.auctionId = arg_auctionId;
end