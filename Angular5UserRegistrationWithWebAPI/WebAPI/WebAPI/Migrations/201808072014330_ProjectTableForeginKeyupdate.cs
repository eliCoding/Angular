namespace WebAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProjectTableForeginKeyupdate : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Projects", "UserId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Projects", "UserId", c => c.Int());
        }
    }
}
