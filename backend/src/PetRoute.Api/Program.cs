var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails();
builder.Services.AddOpenApi();

var frontendOrigin = builder.Configuration["Frontend:Origin"] ?? "http://localhost:3000";
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy.WithOrigins(frontendOrigin)
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseExceptionHandler();
// En desarrollo usamos HTTP local para simplificar la conexión desde Next.js.
// En producción, terminar TLS en el reverse proxy/plataforma de hosting.
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseCors("Frontend");

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapGet("/api/v1/health", () => Results.Ok(new
{
    status = "ok",
    service = "PetRoute.Api",
    timestampUtc = DateTimeOffset.UtcNow
}))
.WithName("GetApiHealth")
.WithTags("Health")
.WithSummary("Verifica que la API esté disponible.");

app.Run();

public partial class Program
{
}
