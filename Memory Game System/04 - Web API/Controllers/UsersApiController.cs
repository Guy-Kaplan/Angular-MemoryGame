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
    public class UsersApiController : ApiController
    {
        private UsersLogic logic = new UsersLogic();

        [HttpGet]
        [Route("users")]
        public HttpResponseMessage GetAllUsers()
        {
            try
            {
                List<UserModel> users = logic.GetAllUsers();
                return Request.CreateResponse(HttpStatusCode.OK, users);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpPost]
        [Route("users")]
        public HttpResponseMessage AddUser(UserModel userModel)
        {
            try
            {
                // if validation faild:
                if (!ModelState.IsValid)
                {
                    List<PropErrors> errorList = ErrorExtractor.ExtractErrors(ModelState);
                    return Request.CreateResponse(HttpStatusCode.BadRequest, errorList);
                }

                UserModel um = logic.AddUser(userModel);
                return Request.CreateResponse(HttpStatusCode.Created, um);
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