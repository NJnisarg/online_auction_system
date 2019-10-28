create procedure GetMyPurchases(IN arg_userId int)
begin

	drop table if exists AuctionTable;
	create temporary table AuctionTable as (select auctionId, max(bidAmt) as maxBid from Participation where userId = arg_userId group by auctionId);

    select *, (select count(*) from Invoice where userId = arg_userId and productId = P.productId) as hasPaid from Auction A inner join AuctionTable ATBL on A.auctionId = ATBL.auctionId inner join Product P on A.auctionId = P.auctionId where A.endDate < now();

    drop table if exists AuctionTable;

end