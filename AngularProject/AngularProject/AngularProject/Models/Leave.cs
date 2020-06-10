using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject.Models
{
    public class Leave
    {
        [Key]
        public int EmployeeNumber { get; set; }
        public DateTime AppliedDate { get; set; }
        public DateTime LeaveDate { get; set; }
        public int NumberOfDate { get; set; }
        public string reason { get; set; }
    }
}
