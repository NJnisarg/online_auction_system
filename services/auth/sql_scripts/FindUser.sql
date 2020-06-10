CREATE PROCEDURE `FindUser`(IN arg_emailId varchar(512))
begin
    select U.*, P.*, group_concat(PM.permissionName) as Permissions, group_concat(R.roleName) as Roles from User U 
    inner join Profile P on U.userId = P.userId 
    inner join UserRole UR on UR.userId = U.userId
    inner join Role R on R.roleId = UR.roleId
    inner join RolePermission RP on RP.roleId = R.roleId
    inner join Permission PM on PM.permissionId = RP.permissionId 
    where emailId = arg_emailId
    group by U.userId;
end