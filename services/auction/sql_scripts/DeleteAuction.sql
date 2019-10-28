create procedure DeleteAuction(IN arg_auctionId int)
begin
    delete from Invoice where productId = (select productId from Product where auctionId = arg_auctionId);
   delete from Product where auctionId = arg_auctionId;
   delete from Participation where auctionId = arg_auctionId;
   delete from Auction where auctionId = arg_auctionId;
end