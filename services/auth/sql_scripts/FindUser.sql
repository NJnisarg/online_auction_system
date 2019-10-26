create procedure FindUser(IN arg_emailId varchar(512))
begin
    select * from User where emailId = arg_emailId;
end