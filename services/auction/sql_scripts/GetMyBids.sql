create procedure GetMyBids(IN arg_userId int)
begin
	select A.*, Pr.*, P.*, C.categoryId, C.title as categoryName, (select count(*) from Participation where auctionId = A.auctionId) as bidCount from Participation P inner join Auction A on P.auctionId = A.auctionId inner join Product Pr on A.auctionId = Pr.auctionId inner join Category C on Pr.categoryId = C.categoryId where P.userId = 3 order by P.auctionId asc, P.bidAmt desc;
end