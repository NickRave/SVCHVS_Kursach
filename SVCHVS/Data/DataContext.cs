using Microsoft.EntityFrameworkCore;
using System;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using SVCHVS.Models;

namespace SVCHVS.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<CreatingApplication> CreatingApplications { get; set; }
        public DbSet<Application> Applications { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
