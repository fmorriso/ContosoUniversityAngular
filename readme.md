# Developer Notes
## Starting Point
The starting point is the 10-part tutorial 
[Getting started with ASP.NET Core MVC and Entity Framework Core using Visual Studio](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/intro)

I then created a brand new solution in which the middle tier is an ASP.Net Core Web API,
which is hopefully RESTul enough to be called from an Angular 4.x front-end.

## Special NuGet source for Telerik

Need to download the latest NuGet CLI and place it in the following directory:

%USERPROFILE%\AppData\Roaming\NuGet\

Then, add the above directory to your User PATH variable.
Hint: the free tool, `Rapid Environment Editor` is a greate UI for accomplishing this task.

Use Visual Studio `Tools \ Options \ NuGet Package Manager \ Package Manager Settings` to add the special NuGet package "source" for the following link
http://docs.telerik.com/aspnet-mvc/getting-started/nuget-install

To view the contents of the NuGet configuration, navigate to:
`%AppData%\NuGet\NuGet.confg`  
or, in PowerShell
`$env:AppData\NuGet\NuGet.config` and examine its contents.
Example:
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
    <add key="aspnet-contrib" value="https://www.myget.org/F/aspnet-contrib/api/v3/index.json" />
    <add key="telerik.com" value="https://nuget.telerik.com/nuget" />
  </packageSources>
  <packageRestore>
    <add key="enabled" value="True" />
    <add key="automatic" value="False" />
  </packageRestore>
  <bindingRedirects>
    <add key="skip" value="False" />
  </bindingRedirects>
  <packageManagement>
    <add key="format" value="0" />
    <add key="disabled" value="False" />
  </packageManagement>
</configuration>
```

`Install-Package -Id Telerik.UI.for.AspNet.Core -Verbose`


## Angular front end
The basic Angular 4.x front-end was created using Angular-CLI 1.2 and currently uses Angular 4.3.1.

I used various Angular-CLI commands to create the components, services and directives as needed.

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

## Bootstrap V4
https://medium.com/wdstack/bootstrap-4/home

This may not have been my smartest move, but since Bootstrap 4 is going to one day replace Bootrap 3,
I figured now is the time to find out how to make the transition. 

It turns out the biggest hurdle was the major changes to how a navigation bar is laid on in terms of the HTML
and CSS classes used.
