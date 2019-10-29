CREATE DEFINER=`root`@`localhost` PROCEDURE `GetMyAuctions`(IN arg_userId int, IN arg_categoryId int, IN arg_status int)
begin
    select *, (select count(id) from Participation where auctionId = A.auctionId) as numBids from Auction A inner join Product P on A.auctionId = P.auctionId where A.userId = coalesce(arg_userId, A.userId) and P.categoryId = coalesce(arg_categoryId, P.categoryId) and A.status = coalesce(arg_status, A.status);
end