using ContactListApi.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactListApi.Data
{
    public static class AddDbSeeder
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDbContext>();

                if (!context.ContactList.Any())
                {
                    context.ContactList.AddRange(
                        new ContactItem()
                        {
                            Name = "Criss Bret",
                            Email = "criss@gmail.com",
                            Phone = "+ 068-542-125-7884",
                            Status = "Friend",
                            Gender = "man",
                            Image = "78",                        
                        },
                        new ContactItem()
                        {
                            Name = "Tony Start",
                            Email = "tony@gmail.com",
                            Phone = "+ 068-455-777-2543",
                            Status = "Work",
                            Gender = "man",
                            Image = "55",
                        },
                        new ContactItem()
                        {
                            Name = "Angelina",
                            Email = "angelina@gmail.com",
                            Phone = "+ 068-564-778-1122",
                            Status = "Private",
                            Gender = "woman",
                            Image = "62",
                        }
                    );
                    context.SaveChanges();
                }
            }
        }
    }
}
