create procedure DeleteAuction(IN arg_auctionId int)
begin
    update Auction set status = 0 where auctionId = arg_auctionId;
end