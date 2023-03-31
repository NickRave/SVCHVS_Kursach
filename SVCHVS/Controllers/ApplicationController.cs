using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SVCHVS.Models;

namespace SVCHVS.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {

        private readonly DataContext _context;

        public ApplicationController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]  
        public async Task<ActionResult<List<Application>>> Get()
        {
            return Ok(await _context.Applications.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Application>> Get(int id)
        {
            var student = await _context.Applications.FindAsync(id);
            if (student == null)
                return BadRequest("Baggage not found.");
            return Ok(student);
        }

        [HttpPost]
        public async Task<ActionResult<List<Application>>> AddBaggage(Application application)
        {
            _context.Applications.Add(application);
            await _context.SaveChangesAsync();
            return Ok(await _context.Applications.ToListAsync());
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<Application>>> UpdateBaggage(Application request, int id)
        {
            var baggage = await _context.Applications.FindAsync(id);
            if (baggage == null)
                return BadRequest("Baggage not found.");
            
            baggage.Username = request.Username;
            baggage.Name_Pacckage = request.Name_Pacckage;
            baggage.Size = request.Size;
            baggage.Priority = request.Priority;
            baggage.Safety = request.Safety;

            await _context.SaveChangesAsync();

            return Ok(await _context.Applications.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Application>>> DeleteStudent(int id)
        {
            var student = await _context.Applications.FindAsync(id);
            if (student == null)
                return BadRequest("Baggage not found.");

            _context.Applications.Remove(student);
            await _context.SaveChangesAsync();
            return Ok(await _context.Applications.ToListAsync());
        }

    }
}
