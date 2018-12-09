using System.Collections.Generic;
using System.Linq;

namespace JohnBryce
{
    public class ImagesLogic : BaseLogic
    {
        public List<ImageModel> GetAllImages()
        {
            var query = from i in DB.Images
                        select new ImageModel
                        {
                            id = i.ImageID,
                            imageFileName = i.ImageFileName
                        };

            return query.ToList();
        }

        public ImageModel AddImage(ImageModel imageModel)
        {
            Image image = new Image
            {
                ImageFileName = imageModel.imageFileName,
            };

            DB.Images.Add(image);
            DB.SaveChanges();

            imageModel.id = image.ImageID;
            return imageModel;
        }
    }
}



