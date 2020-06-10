using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Models
{
    public class EmployeeDbContext : DbContext
    {

        public EmployeeDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Register> register { get; set; }
        public DbSet<Leave> leave { get; set; }
    }
}
