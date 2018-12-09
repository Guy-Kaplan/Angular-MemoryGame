using System;
using System.Collections.Generic;
using System.Linq;

namespace JohnBryce
{
    public class MessagesLogic : BaseLogic
    {
        public List<MessageModel> GetAllMessages()
        {
            var query = from m in DB.Messages
                        select new MessageModel
                        {
                            id = m.MessageID,
                            dateAdded = m.DateAdded,
                            phone = m.Phone,
                            email = m.Email,
                            message = m.Message1
                        };

            return query.ToList();
        }

        public MessageModel AddMessage(MessageModel messageModel)
        {
            Message message = new Message
            {
                DateAdded = DateTime.Now,
                Phone = messageModel.phone,
                Email = messageModel.email,
                Message1 = messageModel.message,
            };

            DB.Messages.Add(message);
            DB.SaveChanges();

            messageModel.id = message.MessageID;
            return messageModel;
        }
    }
}

