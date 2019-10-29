CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAuctionCategories`()
begin
    select C.categoryId, C.title as title, C.description as description, count(P.categoryId) as productCount from Category C inner join Product P on C.categoryId = P.categoryId inner join Auction A on A.auctionId = P.auctionId where A.endDate > now() group by C.categoryId;
end