# Developer Notes
## Starting Point
The starting point is the 10-part tutorial 
[Getting started with ASP.NET Core MVC and Entity Framework Core using Visual Studio](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/intro)

I then created a brand new solution in which the middle tier is an ASP.Net Core Web API,
which is hopefully RESTul enough to be called from an Angular 4.x front-end.

## Angular front end
The basic Angular 4.x front-end was created using Angular-CLI 1.2.0 and currently uses Angular 4.2.6.

I used varioud Angular-CLI commands to create the components, services and directives as needed.

Examples:
```
ng generate component About
```

Mads Kristensen's [NPM Task Runner](https://github.com/madskristensen/NpmTaskRunner) allows me to use a `build-watch` task defined in `package.json` running in the background to make the latest build of the Angular 4.x piece
available when I invoke the ASP.Net Core application via Visual Studio 2017's `Debug / Start without Debugging`. 
## Connection String
Inside `appSettings.json` I specified the following database connection information:to connect to a copy of a minimually populated Contoso University Azure SQL database:

```json
"ConnectionStrings": {
    "DefaultConnection": "Server=tcp:fpmcontosouniversityangular.database.windows.net,1433;Initial Catalog=ContosoUniversity;Persist Security Info=False;User ID=DevAdmin;Password={ask me};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
  }
```

## Database Migrations
I use the EF.Core PowerShell cmdlets to perform EF.Core database operations, not the ef command prompt since I'm on Windows already and Visual Studio 2017's Package Manager Console is available to run the
various EF.Core commands.

Example of using PowerShell cmdlets intead of ef cmd prompt to perform EF.Core database operations:

```powershell
$startProj = 'Data'
Add-Migration Initialize -StartupProject $startProj -Verbose
Update-Database -StartupProject $startProj
```

## Angular Routing

I use a separate Angular 4.x routing module since it allows me to perform lazy loading (if I feel so inclined).
