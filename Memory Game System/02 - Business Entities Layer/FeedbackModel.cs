using System.ComponentModel.DataAnnotations;
using System;

namespace JohnBryce
{
    public class FeedbackModel
    {
        public int id { get; set; }
        public int userID { get; set; }
        public DateTime dateAdded { get; set; }

        // makes sure feedback is not all blank.
        [RegularExpression(@"\w.*", ErrorMessage = "Invalid feedback.")]
        [Required(ErrorMessage = "Missing feedback.")]
        public string feedback { get; set; }
    }
}
