# Developer Notes
## Connection String
Inside `appSettings.json` I specified the following database connection information:

```json
"ConnectionStrings": {
    "DefaultConnection": "Server=tcp:fpmcontosouniversityangular.database.windows.net,1433;Initial Catalog=ContosoUniversity;Persist Security Info=False;User ID=DevAdmin;Password={ask me};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
  }
```

## Database Migrations
Example of using PowerShell cmdlets intead of ef cmd prompt to perform EF.Core database operations:

```powershell
$startProj = 'Data'
Add-Migration Initialize -StartupProject $startProj -Verbose
Update-Database -StartupProject $startProj
```

## Angular Routing
