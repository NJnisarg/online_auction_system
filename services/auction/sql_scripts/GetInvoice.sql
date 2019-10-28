create procedure GetInvoice(IN arg_auctionId int, IN arg_soldToUserId int)
begin
    select A.auctionId, A.userId as createdByUserId, A.status, A.startDate, A.endDate, P.title, P.description, P.productId, P.startingBid, P.currentBid, P.closingBid, P.categoryId, Pr.name, Pr.houseNo, Pr.street, Pr.city, Pr.country, I.invoiceId, I.txnNo, I.txnDate, I.amount as txnAmt from Auction A inner join Product P on A.auctionId = P.auctionId inner join Invoice I on I.productId = P.productId inner join Profile Pr on Pr.userId = A.userId where A.auctionId = arg_auctionId and I.userId = arg_soldToUserId;
end