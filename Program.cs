var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
    app.UseHttpsRedirection();
}
else
{
    // In development, only use HTTPS redirection if HTTPS is configured
    var httpsPort = app.Configuration["ASPNETCORE_HTTPS_PORT"];
    if (!string.IsNullOrEmpty(httpsPort))
    {
        app.UseHttpsRedirection();
    }
}

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();

