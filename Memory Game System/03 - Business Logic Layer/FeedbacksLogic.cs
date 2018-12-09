using System.Collections.Generic;
using System.Linq;
using System;

namespace JohnBryce
{
    public class FeedbacksLogic : BaseLogic
    {
        public List<FeedbackModel> GetAllFeedbacks()
        {
            var query = from f in DB.Feedbacks
                        select new FeedbackModel
                        {
                            id = f.FeedbackID,
                            userID = f.UserID,
                            dateAdded = f.DataAdded,
                            feedback = f.Feedback1,
                        };

            return query.ToList();
        }

        public FeedbackModel AddFeedback(FeedbackModel feedbackModel)
        {
            Feedback feedback = new Feedback
            {
                UserID = feedbackModel.userID,
                DataAdded = DateTime.Now,
                Feedback1 = feedbackModel.feedback,
            };

            DB.Feedbacks.Add(feedback);
            DB.SaveChanges();

            feedbackModel.id = feedback.FeedbackID;
            return feedbackModel;
        }
    }
}
