using System.Collections.Generic;

namespace JohnBryce
{
    // אחד ויחיד property מחלקה המחזיקה את השגיאות השונות שהתרחשו עבור
    public class PropErrors
    {
        // property-שם ה
        public string property { get; set; }

        // property כל השגיאות של אותו
        public List<string> errors { get; set; } = new List<string>();
    }
}