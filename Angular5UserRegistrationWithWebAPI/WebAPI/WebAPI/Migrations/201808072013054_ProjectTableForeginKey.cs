namespace WebAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProjectTableForeginKey : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Projects", "UserId", c => c.Int());
            AddColumn("dbo.Projects", "User_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Projects", "User_Id");
            AddForeignKey("dbo.Projects", "User_Id", "dbo.User", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Projects", "User_Id", "dbo.User");
            DropIndex("dbo.Projects", new[] { "User_Id" });
            DropColumn("dbo.Projects", "User_Id");
            DropColumn("dbo.Projects", "UserId");
        }
    }
}
