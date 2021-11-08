using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace LegoFinal.Models
{
    public partial class LegoContext : DbContext
    {
        public LegoContext()
        {
        }

        public LegoContext(DbContextOptions<LegoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetRoleClaim> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRole> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUserToken> AspNetUserTokens { get; set; }
        public virtual DbSet<Collection> Collections { get; set; }
        public virtual DbSet<DeviceCode> DeviceCodes { get; set; }
        public virtual DbSet<LegoSet> LegoSets { get; set; }
        public virtual DbSet<PersistedGrant> PersistedGrants { get; set; }
        public virtual DbSet<WishList> WishLists { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=legomaniaserver.database.windows.net;Database=Lego;User Id=LegoServerAdmin;Password=Lego123!;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AspNetRole>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName, "RoleNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedName] IS NOT NULL)");

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetRoleClaim>(entity =>
            {
                entity.HasIndex(e => e.RoleId, "IX_AspNetRoleClaims_RoleId");

                entity.Property(e => e.RoleId).IsRequired();

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetUser>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail, "EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName, "UserNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedUserName] IS NOT NULL)");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserClaim>(entity =>
            {
                entity.HasIndex(e => e.UserId, "IX_AspNetUserClaims_UserId");

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogin>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.HasIndex(e => e.UserId, "IX_AspNetUserLogins_UserId");

                entity.Property(e => e.LoginProvider).HasMaxLength(128);

                entity.Property(e => e.ProviderKey).HasMaxLength(128);

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserRole>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.HasIndex(e => e.RoleId, "IX_AspNetUserRoles_RoleId");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserToken>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

                entity.Property(e => e.LoginProvider).HasMaxLength(128);

                entity.Property(e => e.Name).HasMaxLength(128);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserTokens)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<Collection>(entity =>
            {
                entity.Property(e => e.CollectionId).HasColumnName("CollectionID");

                entity.Property(e => e.SetId).HasColumnName("SetID");

                entity.Property(e => e.SetName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.SetNumber)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.UserId)
                    .HasMaxLength(450)
                    .HasColumnName("UserID");

                entity.HasOne(d => d.Set)
                    .WithMany(p => p.Collections)
                    .HasForeignKey(d => d.SetId)
                    .HasConstraintName("FK__Collectio__SetID__778AC167");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Collections)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Collectio__UserI__787EE5A0");
            });

            modelBuilder.Entity<DeviceCode>(entity =>
            {
                entity.HasKey(e => e.UserCode);

                entity.HasIndex(e => e.DeviceCode1, "IX_DeviceCodes_DeviceCode")
                    .IsUnique();

                entity.HasIndex(e => e.Expiration, "IX_DeviceCodes_Expiration");

                entity.Property(e => e.UserCode).HasMaxLength(200);

                entity.Property(e => e.ClientId)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Data).IsRequired();

                entity.Property(e => e.Description).HasMaxLength(200);

                entity.Property(e => e.DeviceCode1)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("DeviceCode");

                entity.Property(e => e.SessionId).HasMaxLength(100);

                entity.Property(e => e.SubjectId).HasMaxLength(200);
            });

            modelBuilder.Entity<LegoSet>(entity =>
            {
                entity.HasKey(e => e.SetId)
                    .HasName("PK__LegoSets__7E08473D76AF157B");

                entity.Property(e => e.SetId).HasColumnName("SetID");

                entity.Property(e => e.SetName)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Setnumber)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PersistedGrant>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.HasIndex(e => e.Expiration, "IX_PersistedGrants_Expiration");

                entity.HasIndex(e => new { e.SubjectId, e.ClientId, e.Type }, "IX_PersistedGrants_SubjectId_ClientId_Type");

                entity.HasIndex(e => new { e.SubjectId, e.SessionId, e.Type }, "IX_PersistedGrants_SubjectId_SessionId_Type");

                entity.Property(e => e.Key).HasMaxLength(200);

                entity.Property(e => e.ClientId)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Data).IsRequired();

                entity.Property(e => e.Description).HasMaxLength(200);

                entity.Property(e => e.SessionId).HasMaxLength(100);

                entity.Property(e => e.SubjectId).HasMaxLength(200);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<WishList>(entity =>
            {
                entity.ToTable("WishList");

                entity.Property(e => e.WishListId).HasColumnName("WishListID");

                entity.Property(e => e.Qauntity).HasColumnName("qauntity");

                entity.Property(e => e.SetId).HasColumnName("SetID");

                entity.Property(e => e.SetName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.SetNumber)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.UserId)
                    .HasMaxLength(450)
                    .HasColumnName("UserID");

                entity.HasOne(d => d.Set)
                    .WithMany(p => p.WishLists)
                    .HasForeignKey(d => d.SetId)
                    .HasConstraintName("FK__WishList__SetID__7B5B524B");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.WishLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__WishList__UserID__7C4F7684");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
