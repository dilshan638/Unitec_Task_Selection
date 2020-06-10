﻿using System;
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
    public class RegistersController : ControllerBase
    {
        private readonly EmployeeDbContext _context;

        public RegistersController(EmployeeDbContext context)
        {
            _context = context;
        }

        // GET: api/Registers
        [HttpGet]
        public IEnumerable<Register> Getregister()
        {
            return _context.register;
        }

        // GET: api/Registers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRegister([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var register = await _context.register.FindAsync(id);

            if (register == null)
            {
                return NotFound();
            }

            return Ok(register);
        }

        // PUT: api/Registers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRegister([FromRoute] int id, [FromBody] Register register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != register.EmployeeNumber)
            {
                return BadRequest();
            }

            _context.Entry(register).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegisterExists(id))
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

        // POST: api/Registers
        [HttpPost]
        public async Task<IActionResult> PostRegister([FromBody] Register register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.register.Add(register);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRegister", new { id = register.EmployeeNumber }, register);
        }

        // DELETE: api/Registers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRegister([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var register = await _context.register.FindAsync(id);
            if (register == null)
            {
                return NotFound();
            }

            _context.register.Remove(register);
            await _context.SaveChangesAsync();

            return Ok(register);
        }

        private bool RegisterExists(int id)
        {
            return _context.register.Any(e => e.EmployeeNumber == id);
        }
    }
}