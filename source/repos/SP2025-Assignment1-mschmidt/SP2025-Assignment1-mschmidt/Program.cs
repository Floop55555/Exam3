namespace SP2025_Assignment1_mschmidt
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();

            app.MapGet("/", () => "Hello, World!");

            app.Run();
        }
    }
}
