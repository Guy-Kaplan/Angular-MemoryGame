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
    public class FeedbacksApiController : ApiController
    {
        private FeedbacksLogic logic = new FeedbacksLogic();

        [HttpGet]
        [Route("feedbacks")]
        public HttpResponseMessage GetAllFeedbacks()
        {
            try
            {
                List<FeedbackModel> feedbacks = logic.GetAllFeedbacks();
                return Request.CreateResponse(HttpStatusCode.OK, feedbacks);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpPost]
        [Route("feedbacks")]
        public HttpResponseMessage AddFeedback(FeedbackModel feedbackModel)
        {
            try
            {
                // if validation faild:
                if (!ModelState.IsValid)
                {
                    List<PropErrors> errorList = ErrorExtractor.ExtractErrors(ModelState);
                    return Request.CreateResponse(HttpStatusCode.BadRequest, errorList);
                }

                FeedbackModel fm = logic.AddFeedback(feedbackModel);
                return Request.CreateResponse(HttpStatusCode.Created, fm);
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