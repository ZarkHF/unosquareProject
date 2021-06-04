using Microsoft.EntityFrameworkCore;
using System;
using ToyStoreAPI.Models;

namespace Models
{
    public class ItemContext : DbContext
    {
        public DbSet<Item> Inventory { get; set; }

        public ItemContext(DbContextOptions<ItemContext> options) : base(options)
        {

        }
    }
}