create procedure UpdateProfile(IN arg_userId int, IN arg_name varchar(256), IN arg_address varchar(512), IN arg_age int, IN arg_dob date, IN arg_sex varchar(3))
begin
    update Profile set name = coalesce(arg_name, name), address = coalesce(arg_address, address), age = coalesce(arg_age, age), dob = coalesce(arg_dob, dob), sex = coalesce(arg_sex, sex)
    where userId = arg_userId;

    select * from User natural join Profile where userId = arg_userId;
end