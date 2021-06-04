using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ToyStoreAPI.Models
{
    public class Item
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Description { get; set; }

        public int MaxAge { get; set; }

        [Column(TypeName = "decimal(6,2)")]
        public decimal Price { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Company { get; set; }
        
    }
}
