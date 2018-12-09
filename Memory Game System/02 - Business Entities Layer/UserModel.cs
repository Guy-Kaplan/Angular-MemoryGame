using System.ComponentModel.DataAnnotations;
using System;

namespace JohnBryce
{
    public class UserModel
    {
        public int id { get; set; }

        // makes sure full name is not all blank.
        [RegularExpression(@"\w.*", ErrorMessage = "Invalid full name.")]
        [Required(ErrorMessage = "Missing full name.")]
        public string fullName { get; set; }

        // makes sure user name is not all blank.
        [RegularExpression(@"\w.*", ErrorMessage = "Invalid user name.")]
        [Required(ErrorMessage = "Missing user name.")]
        public string userName { get; set; }

        // makes sure password is not all blank.
        [RegularExpression(@"\w.*", ErrorMessage = "Invalid password.")]
        [Required(ErrorMessage = "Missing password.")]
        public string password { get; set; }

        [RegularExpression(@"\w+@\w+\.\w+(\.\w+)*", ErrorMessage = "Invalid email.")]
        public string email { get; set; }

        public DateTime? birthDate { get; set; }
    }
}
