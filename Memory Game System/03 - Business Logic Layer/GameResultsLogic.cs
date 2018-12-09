using System;
using System.Collections.Generic;
using System.Linq;

namespace JohnBryce
{
    public class GameResultsLogic : BaseLogic
    {
        public List<GameResultModel> GetAllGameResults()
        {
            var query = from gr in DB.GameResults
                        select new GameResultModel
                        {
                            id = gr.GameResultID,
                            userID = gr.UserID,
                            dateAdded = gr.DateAdded,
                            timeSpan = gr.TimeSpan,
                            steps = gr.Steps
                        };

            return query.ToList();
        }

        public GameResultModel AddGameResult(GameResultModel gameResultModel)
        {
            GameResult gameResult = new GameResult
            {
                UserID = gameResultModel.userID,
                DateAdded = DateTime.Now,
                TimeSpan = gameResultModel.timeSpan,
                Steps = gameResultModel.steps
            };

            DB.GameResults.Add(gameResult);
            DB.SaveChanges();

            gameResultModel.id = gameResult.GameResultID;
            return gameResultModel;
        }
    }
}

