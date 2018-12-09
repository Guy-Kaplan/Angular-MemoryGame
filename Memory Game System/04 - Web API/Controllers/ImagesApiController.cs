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
    public class ImagesApiController : ApiController
    {
        private ImagesLogic logic = new ImagesLogic();

        [HttpGet]
        [Route("images")]
        public HttpResponseMessage GetAllImages()
        {
            try
            {
                List<ImageModel> images = logic.GetAllImages();
                return Request.CreateResponse(HttpStatusCode.OK, images);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpPost]
        [Route("images")]
        public HttpResponseMessage AddImage(ImageModel imageModel)
        {
            try
            {
                // if validation faild:
                if (!ModelState.IsValid)
                {
                    string error = "{\"message\": \"Bad Request\"}";
                    return Request.CreateResponse(HttpStatusCode.BadRequest, error);
                }
                ImageModel im = logic.AddImage(imageModel);
                return Request.CreateResponse(HttpStatusCode.Created, im);
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