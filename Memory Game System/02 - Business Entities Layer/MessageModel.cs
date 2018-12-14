using System;
using System.ComponentModel.DataAnnotations;

namespace JohnBryce
{
    // for Contact Us page
    public class MessageModel
    {
        public int id { get; set; }

        public DateTime dateAdded { get; set; }

        // makes sure phone is valid.
        [RegularExpression(@"\+?[\d-]{3,20}", ErrorMessage = "Invalid phone number.")]
        public string phone { get; set; }

        // makes sure email is valid.
        [RegularExpression(@"\w{1,10}\.?\w{1,10}@\w{1,10}\.\w{1,10}(\.\w{1,10}){0,3}", ErrorMessage = "Invalid email.")]
        public string email { get; set; }

        // makes sure message is not all blank.
        [RegularExpression(@"\w.*", ErrorMessage = "Invalid message.")]
        [Required(ErrorMessage = "Missing message.")]
        public string message { get; set; }
    }
}
