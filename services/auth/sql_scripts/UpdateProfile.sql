create procedure UpdateProfile(IN arg_userId int, IN arg_name varchar(256), IN arg_emailId varchar(512), IN arg_sex varchar(3), IN arg_age int, IN arg_houseNo varchar(128), IN arg_street varchar(128), IN arg_city varchar(128), IN arg_country varchar(128), IN arg_wallet decimal(10,0))
begin
    update Profile set name = coalesce(arg_name, name), emailId = coalesce(arg_emailId, emailId), sex = coalesce(arg_sex, sex), age = coalesce(arg_age, age), houseNo = coalesce(arg_houseNo, houseNo), street = coalesce(arg_street, street), city = coalesce(arg_city, city), country = coalesce(arg_country, country), wallet = coalesce(arg_wallet, wallet)
    where userId = arg_userId;

    select * from User natural join Profile where userId = arg_userId;
end