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
    public class MessagesApiController : ApiController
    {
        private MessagesLogic logic = new MessagesLogic();

        [HttpGet]
        [Route("messages")]
        public HttpResponseMessage GetAllMessages()
        {
            try
            {
                List<MessageModel> messages = logic.GetAllMessages();
                return Request.CreateResponse(HttpStatusCode.OK, messages);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpPost]
        [Route("messages")]
        public HttpResponseMessage AddMessage(MessageModel messageModel)
        {
            try
            {
                // if validation faild:
                if (!ModelState.IsValid)
                {
                    List<PropErrors> errorList = ErrorExtractor.ExtractErrors(ModelState);
                    return Request.CreateResponse(HttpStatusCode.BadRequest, errorList);
                }

                MessageModel mm = logic.AddMessage(messageModel);
                return Request.CreateResponse(HttpStatusCode.Created, mm);
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