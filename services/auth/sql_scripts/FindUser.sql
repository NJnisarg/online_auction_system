CREATE PROCEDURE `FindUser`(IN arg_emailId varchar(512))
begin
    select * from User U inner join Profile P on U.userId = P.userId where emailId = arg_emailId;
end