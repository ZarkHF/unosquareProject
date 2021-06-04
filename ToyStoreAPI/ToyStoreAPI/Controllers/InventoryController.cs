using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyStoreAPI.Models;

namespace ToyStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryController : Controller
    {
        private readonly ItemContext _itemContext;

        public InventoryController(ItemContext itemContext)
        {
            _itemContext = itemContext;
        }

        [HttpGet("Inventory")]
        public async Task<ActionResult<IEnumerable<Item>>> GetInventory()
        {
            return await _itemContext.Inventory.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItem(int id)
        {
            var item = await _itemContext.Inventory.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        [HttpPost("Item")]
        public async Task<ActionResult<Item>> NewItem(Item item)
        {
            _itemContext.Inventory.Add(item);
            await _itemContext.SaveChangesAsync();

            return CreatedAtAction("GetItem", new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateItem(Item item)
        {
            _itemContext.Entry(item).State = EntityState.Modified;

            try
            {
                await _itemContext.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!ItemExist(item.Id))
                {
                    return NotFound();
                } 
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var paymentDetail = await _itemContext.Inventory.FindAsync(id);
            if (paymentDetail == null)
            {
                return NotFound();
            }

            _itemContext.Inventory.Remove(paymentDetail);
            await _itemContext.SaveChangesAsync();

            return NoContent();
        }

        private bool ItemExist(int id)
        {
            return _itemContext.Inventory.Any(e => e.Id == id);
        }
    }
}
