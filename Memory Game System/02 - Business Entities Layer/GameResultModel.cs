using System;

namespace JohnBryce
{
    public class GameResultModel
    {
        public int id { get; set; }
        public int userID { get; set; }
        public DateTime dateAdded { get; set; }
        public TimeSpan timeSpan { get; set; }
        public int steps { get; set; }
    }
}
