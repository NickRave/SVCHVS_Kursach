using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SVCHVS.Models;

namespace SVCHVS.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CreatingApplicationController : ControllerBase
    {

        private readonly DataContext _context;

        public CreatingApplicationController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]  
        public async Task<ActionResult<List<CreatingApplication>>> Get()
        {
            return Ok(await _context.CreatingApplications.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CreatingApplication>> Get(int id)
        {
            var student = await _context.CreatingApplications.FindAsync(id);
            if (student == null)
                return BadRequest("Automaton not found.");
            return Ok(student);
        }

        [HttpPost]
        public async Task<ActionResult<List<CreatingApplication>>> AddAutomaton(CreatingApplication creatingApplication)
        {
            _context.CreatingApplications.Add(creatingApplication);
            await _context.SaveChangesAsync();
            return Ok(await _context.CreatingApplications.ToListAsync());
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<CreatingApplication>>> UpdateAutomaton(CreatingApplication request, int id)
        {
            var automaton = await _context.CreatingApplications.FindAsync(id);
            if (automaton == null)
                return BadRequest("Automaton not found.");

            automaton.Name_Pacckage = request.Name_Pacckage;
            automaton.Size = request.Size;
            automaton.Priority = request.Priority;
            automaton.Safety = request.Safety;

            await _context.SaveChangesAsync();

            return Ok(await _context.CreatingApplications.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<CreatingApplication>>> DeleteStudent(int id)
        {
            var student = await _context.CreatingApplications.FindAsync(id);
            if (student == null)
                return BadRequest("student not found.");

            _context.CreatingApplications.Remove(student);
            await _context.SaveChangesAsync();
            return Ok(await _context.CreatingApplications.ToListAsync());
        }

    }
}
