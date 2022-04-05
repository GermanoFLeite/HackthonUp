using Microsoft.EntityFrameworkCore;

namespace PmenosLab.Models {
    public class ModelContext : DbContext {
        public ModelContext(DbContextOptions<ModelContext> options) : base(options) {

        }

        public DbSet<Comment> Comments { get; set; } = null;
        public DbSet<Subscription> Subscriptions { get; set; } = null;
    }
}