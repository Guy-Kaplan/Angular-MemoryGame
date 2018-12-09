using System;
using System.ComponentModel.DataAnnotations;

namespace JohnBryce
{
    public class MessageModel
    {
        public int id { get; set; }

        public DateTime dateAdded { get; set; }

        [RegularExpression(@"^\+?[\d-]+$", ErrorMessage = "Invalid phone number.")]
        public string phone { get; set; }

        [RegularExpression(@"^\w+@\w+\.\w+(\.\w+)*", ErrorMessage = "Invalid email.")]
        public string email { get; set; }

        // makes sure message is not all blank.
        [RegularExpression(@"\w.*", ErrorMessage = "Invalid message.")]
        [Required(ErrorMessage = "Missing message.")]
        public string message { get; set; }
    }
}
