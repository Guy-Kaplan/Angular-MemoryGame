using System.Collections.Generic;
using System.Web.Http.ModelBinding;

namespace JohnBryce
{
    public static class ErrorExtractor
    {
        public static List<PropErrors> ExtractErrors(ModelStateDictionary modelState)
        {
            List<PropErrors> errorList = new List<PropErrors>();

            //אלו כל המאפיינים שלא עברו ולידציה - modelState-ריצה על כל המאפיינים שיש ב
            foreach (var item in modelState)
            {
                PropErrors propErrors = new PropErrors();

                propErrors.property = item.Key; // Property Name.

                // ריצה על כל השגיאות של המאפיין הנ"ל
                foreach (var err in item.Value.Errors)
                {
                    propErrors.errors.Add(err.ErrorMessage); // תאור השגיאה
                }

                errorList.Add(propErrors);
            }

            return errorList;
        }
    }
}