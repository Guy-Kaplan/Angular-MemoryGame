using System.ComponentModel.DataAnnotations;
using System;

namespace JohnBryce
{
    public class UserModel
    {
        public int id { get; set; }

        // makes sure full name is valid.
        [RegularExpression(@"[a-z A-Z]{1,20}", ErrorMessage = "Invalid full name.")]
        [Required(ErrorMessage = "Missing full name.")]
        public string fullName { get; set; }

        // makes sure user name is valid.
        [RegularExpression(@"[^\W_]{3,20}", ErrorMessage = "Invalid user name.")]
        [Required(ErrorMessage = "Missing user name.")]
        public string userName { get; set; }

        // makes sure password is valid.
        [RegularExpression(@"\S{4,20}", ErrorMessage = "Invalid password.")]
        [Required(ErrorMessage = "Missing password.")]
        public string password { get; set; }

        // makes sure email is valid.
        [RegularExpression(@"\w{1,10}\.?\w{1,10}@\w{1,10}\.\w{1,10}(\.\w{1,10}){0,3}", ErrorMessage = "Invalid email.")]
        public string email { get; set; }

        public DateTime? birthDate { get; set; }
    }
}
