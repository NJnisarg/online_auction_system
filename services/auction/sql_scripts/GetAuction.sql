create procedure GetAuction(IN arg_auctionId int)
begin
    select * from Auction A inner join Product P on A.auctionId = P.auctionId where A.auctionId = arg_auctionId;
end