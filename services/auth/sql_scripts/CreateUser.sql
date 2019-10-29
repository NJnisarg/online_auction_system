CREATE PROCEDURE `CreateUser`(IN arg_username varchar(256), IN arg_emailId varchar(512), IN arg_hash varchar(512))
begin
    declare arg_userId int default 0;

    insert into User(username, emailId, password) values (arg_username, arg_emailId, arg_hash);
    set arg_userId = (select userId from User where username = arg_username and emailId = arg_emailId);

    insert into Profile(userId) values (arg_userId);

    select * from User U inner join Profile P on U.userId = P.userId where U.userId = arg_userId;
end