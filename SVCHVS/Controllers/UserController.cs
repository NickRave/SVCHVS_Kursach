using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SVCHVS.Models;

namespace SVCHVS.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]  
        public async Task<ActionResult<List<User>>> Get()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(int id)
        {
            var student = await _context.Users.FindAsync(id);
            if (student == null)
                return BadRequest("User not found.");
            return Ok(student);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddBaggage(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<User>>> UpdateBaggage(User request, int id)
        {
            var baggage = await _context.Users.FindAsync(id);
            if (baggage == null)
                return BadRequest("Client not found.");

            baggage.Username = request.Username;
            baggage.Phone = request.Phone;
            baggage.Password = request.Password;

            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<User>>> DeleteStudent(int id)
        {
            var student = await _context.Users.FindAsync(id);
            if (student == null)
                return BadRequest("Carrier not found.");

            _context.Users.Remove(student);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }

    }
}
