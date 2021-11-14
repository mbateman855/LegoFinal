using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LegoFinal.Models;
using Microsoft.AspNetCore.Identity;

namespace LegoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishListsController : ControllerBase
    {
        private readonly LegoContext _context;

        private readonly UserManager<ApplicationUser> _userManager;

        public WishListsController(LegoContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;

            _userManager = userManager;
        }

        // GET: api/WishLists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WishList>>> GetWishLists()
        {
            return await _context.WishLists.ToListAsync();
        }

        // GET: api/WishLists/5
        [HttpGet("{userName}")]
        public async Task<ActionResult<IEnumerable<WishList>>> GetWishList(string userName)
        {

            var user = _userManager.Users.FirstOrDefault(x => x.UserName == userName);

            var wishList = _context.WishLists.Where(x => x.UserId == user.Id);

            if (wishList == null)
            {
                return NotFound();
                
            }
            return await wishList.ToListAsync();


        }

        // PUT: api/WishLists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWishList(int id, WishList wishList)
        {
            if (id != wishList.WishListId)
            {
                return BadRequest();
            }

            _context.Entry(wishList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WishListExists(id))
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

        // POST: api/WishLists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WishList>> PostWishList(WishListwithUserName wishList)
        {
            var user = _userManager.Users.First(x => x.UserName == wishList.userName);

                wishList.UserId = user.Id;

            _context.WishLists.Add(wishList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWishList", new { id = wishList.WishListId }, wishList);
        }

        // DELETE: api/WishLists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWishList(int id)
        {
            var wishList = await _context.WishLists.FindAsync(id);
            if (wishList == null)
            {
                return NotFound();
            }

            _context.WishLists.Remove(wishList);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WishListExists(int id)
        {
            return _context.WishLists.Any(e => e.WishListId == id);
        }
    }
}



    


