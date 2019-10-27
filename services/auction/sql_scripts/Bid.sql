create procedure Bid(IN arg_userId INT, IN arg_auctionId int, IN arg_bidAmt int)
begin
	insert into Participation(userId,auctionId, bidAmt) values (arg_userId,arg_auctionId,arg_bidAmt);
    update Product set currentBid = arg_bidAmt, closingBid = arg_bidAmt where auctionId = arg_auctionId;
end