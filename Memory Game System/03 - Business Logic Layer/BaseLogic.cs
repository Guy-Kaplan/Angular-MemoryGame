using System;

namespace JohnBryce
{
    public class BaseLogic : IDisposable
    {
        protected MemoryGameEntities DB = new MemoryGameEntities();

        public void Dispose()
        {
            DB.Dispose();
        }
    }
}