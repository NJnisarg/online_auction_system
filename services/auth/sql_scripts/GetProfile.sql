create procedure GetProfile(IN arg_userId int)
begin
    select * from User natural join Profile where userId = arg_userId;
end