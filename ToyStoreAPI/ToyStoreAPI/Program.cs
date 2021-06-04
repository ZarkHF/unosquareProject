using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyStoreAPI.Models;

namespace ToyStoreAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // CreateHostBuilder(args).Build().Run();

            var host = CreateHostBuilder(args).Build();

            using (var scope = host.Services.CreateScope())
            {
                var db_Data = scope.ServiceProvider.GetService<ItemContext>();

                db_Data.Inventory.AddRange(entities: new List<Item>
                {
                    new Item()
                    {
                        Id = 1,
                        Name = "Barbie Developer",
                        MaxAge = 12,
                        Price = 25.99M,
                        Company = "Mattel",
                        Description = ""
                    },
                    new Item()
                    {
                        Id = 2,
                        Name = "xyc",
                        MaxAge = 4,
                        Price = 75.5M,
                        Company = "Marvel",
                        Description = ""
                    },
                    new Item()
                    {
                        Id = 3,
                        Name = "abc",
                        MaxAge = 18,
                        Price = 99.99M,
                        Company = "Nintendo",
                        Description = ""
                    }
                });
                db_Data.SaveChanges();
            }
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
