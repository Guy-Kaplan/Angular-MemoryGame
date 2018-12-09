using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace JohnBryce
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api")]
    public class GameResultsApiController : ApiController
    {
        private GameResultsLogic logic = new GameResultsLogic();

        [HttpGet]
        [Route("game-results")]
        public HttpResponseMessage GetAllGameResults()
        {
            try
            {
                List<GameResultModel> gameResults = logic.GetAllGameResults();
                return Request.CreateResponse(HttpStatusCode.OK, gameResults);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpPost]
        [Route("game-results")]
        public HttpResponseMessage AddGameResult(GameResultModel gameResultModel)
        {
            try
            {
                // if validation faild:
                if (!ModelState.IsValid)
                {
                    string error = "{\"message\": \"Bad Request\"}";
                    return Request.CreateResponse(HttpStatusCode.BadRequest, error);
                }
                GameResultModel grm = logic.AddGameResult(gameResultModel);
                return Request.CreateResponse(HttpStatusCode.Created, grm);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing); // release controller's resources

            logic.Dispose(); // release our resources
        }
    }
}