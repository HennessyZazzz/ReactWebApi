using ContactListApi.Data;
using ContactListApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactListApi.Services
{
    public class ContactListService
    {
        private readonly AppDbContext _db;
        public ContactListService(AppDbContext db)
        {
            _db = db;
        }

        public List<ContactItem> GetContactList()
        {
            return _db.ContactList.ToList();
        }

        public ContactItem AddNewContact([FromBody] ContactItem contact)
        {
            _db.ContactList.Add(contact);
            _db.SaveChanges();
            return contact;
        }

        public bool RemoveContact(string Id)
        {
            if (Id is not null)
            {
                var contact = _db.ContactList.FirstOrDefault(f => f.Id == Guid.Parse(Id));
                if (contact is not null)
                {
                    _db.ContactList.Remove(contact);
                    _db.SaveChanges();
                    return true;
                }
            }
            return false;
        }

        public object UpdateContact(string Id, ContactItem editcontact)
        {
            if (Id is not null)
            {
                if (editcontact is not null)
                {
                    var contact = _db.ContactList.FirstOrDefault(f => f.Id == Guid.Parse(Id));
                    if (contact is not null)
                    {
                        contact.Name = editcontact.Name;
                        contact.Email = editcontact.Email;
                        contact.Phone = editcontact.Phone;
                        contact.Image = editcontact.Image;
                        contact.Gender = editcontact.Gender;
                        contact.Status = editcontact.Status;

                        _db.ContactList.Update(contact);
                        _db.SaveChanges();
                        return contact;
                    }
                    return "Edit contact not found";
                }
                return editcontact;
            }
            return "Id doesnt normal";
        }

        public bool ChangeStatusContact(string Id, string status)
        {
            if (Id is not null)
            {
                var contact = _db.ContactList.FirstOrDefault(f => f.Id == Guid.Parse(Id));
                if (contact is not null)
                {
                    contact.Status = status;
                    _db.ContactList.Update(contact);
                    _db.SaveChanges();
                    return true;
                }
            }
            return false;
        }
    } 
}
