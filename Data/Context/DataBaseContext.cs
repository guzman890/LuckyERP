using Entity.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Context
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options)
            : base(options)
        {
        }

        public DbSet<TbAsignatura> TbAsignaturas { get; set; }
        public DbSet<TbLibro> TbLibros { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<TbAsignatura>(entity =>
            {
                entity.HasKey(e => e.IdAsig)
                    .HasName("PK__TB_Asign__E6E667064827C30F");

                entity.ToTable("TB_Asignatura");

                entity.Property(e => e.IdAsig).HasColumnName("Id_asig");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");

                entity.Property(e => e.Estado).HasColumnName("estado");
            });

            modelBuilder.Entity<TbLibro>(entity =>
            {
                entity.HasKey(e => e.IdLibro)
                    .HasName("PK__TB_Libro__D27DCC8CBBD803A2");

                entity.ToTable("TB_Libro");

                entity.Property(e => e.IdLibro).HasColumnName("Id_libro");

                entity.Property(e => e.Asignatura).HasColumnName("asignatura");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");

                entity.Property(e => e.Stock).HasColumnName("stock");

                entity.HasOne(d => d.AsignaturaNavigation)
                    .WithMany(p => p.TbLibros)
                    .HasForeignKey(d => d.Asignatura)
                    .HasConstraintName("FK__TB_Libro__asigna__38996AB5");
            });

        }

    }
}
