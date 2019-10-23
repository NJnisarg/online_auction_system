create procedure GetAuctionCategories()
begin
    select C.title as title, C.description as description, count(P.categoryId) as productCount from Category C inner join Product P on C.categoryId = P.categoryId group by C.categoryId;
end