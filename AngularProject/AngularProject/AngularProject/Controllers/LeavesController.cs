using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularProject.Models;

namespace AngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeavesController : ControllerBase
    {
        private readonly EmployeeDbContext _context;

        public LeavesController(EmployeeDbContext context)
        {
            _context = context;
        }

        // GET: api/Leaves
        [HttpGet]
        public IEnumerable<Leave> Getleave()
        {
            return _context.leave;
        }

        // GET: api/Leaves/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetLeave([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leave = await _context.leave.FindAsync(id);

            if (leave == null)
            {
                return NotFound();
            }

            return Ok(leave);
        }

        // PUT: api/Leaves/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeave([FromRoute] int id, [FromBody] Leave leave)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != leave.EmployeeNumber)
            {
                return BadRequest();
            }

            _context.Entry(leave).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeaveExists(id))
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

        // POST: api/Leaves
        [HttpPost]
        public async Task<IActionResult> PostLeave([FromBody] Leave leave)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.leave.Add(leave);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeave", new { id = leave.EmployeeNumber }, leave);
        }

        // DELETE: api/Leaves/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLeave([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leave = await _context.leave.FindAsync(id);
            if (leave == null)
            {
                return NotFound();
            }

            _context.leave.Remove(leave);
            await _context.SaveChangesAsync();

            return Ok(leave);
        }

        private bool LeaveExists(int id)
        {
            return _context.leave.Any(e => e.EmployeeNumber == id);
        }
    }
}