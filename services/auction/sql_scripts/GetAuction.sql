CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAuction`(IN arg_auctionId int)
begin
    select A.*, P.*, C.title as categoryName, (select count(id) from Participation where auctionId = arg_auctionId) as numBids from Auction A inner join Product P on A.auctionId = P.auctionId inner join Category C on P.categoryId = C.categoryId where A.auctionId = arg_auctionId;
end