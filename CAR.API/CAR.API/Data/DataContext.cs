using Microsoft.EntityFrameworkCore;

namespace CAR.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        public DbSet<Car> Cars =>Set<Car>();
    }
}
