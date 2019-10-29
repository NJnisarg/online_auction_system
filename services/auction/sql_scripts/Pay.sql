create procedure Pay(IN arg_auctionId int, IN buyerId int)
begin
	declare sellerId int default 0;
    declare amt int default 0;

	declare exit handler for sqlexception
	begin
		rollback;
	end;

	declare exit handler for sqlwarning
	begin
		rollback;
	end;

    set sellerId = (select userId from Auction where auctionId = arg_auctionId);
    set amt = (select closingBid from Auction A inner join Product P on A.auctionId = P.auctionId where A.auctionId = arg_auctionId);

    start transaction;
		update Profile set wallet = wallet - amt where userId = buyerId;
		update Profile set walltet = wallet + amt where userId = sellerId;
	commit;
end