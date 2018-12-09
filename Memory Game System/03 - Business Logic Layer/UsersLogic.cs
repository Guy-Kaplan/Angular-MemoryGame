using System.Collections.Generic;
using System.Linq;

namespace JohnBryce
{
    public class UsersLogic : BaseLogic
    {
        public List<UserModel> GetAllUsers()
        {
            var query = from u in DB.Users
                        select new UserModel
                        {
                            id = u.UserID,
                            fullName = u.FullName,
                            userName = u.UserName,
                            password = u.Password,
                            email = u.Email,
                            birthDate = u.BirthDate
                        };

            return query.ToList();
        }

        public UserModel AddUser(UserModel userModel)
        {
            User user = new User
            {
                FullName = userModel.fullName,
                UserName = userModel.userName,
                Password = userModel.password,
                Email = userModel.email,
                BirthDate = userModel.birthDate,
            };

            DB.Users.Add(user);
            DB.SaveChanges();

            userModel.id = user.UserID;
            return userModel;
        }
    }
}
