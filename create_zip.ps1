Add-Type -AssemblyName System.IO.Compression.FileSystem
$src = "C:\Users\japto\.gemini\antigravity\scratch\pioneros-informatica"
$dest = "C:\Users\japto\.gemini\antigravity\scratch\site.zip"
if (Test-Path $dest) { Remove-Item $dest -Force }
[System.IO.Compression.ZipFile]::CreateFromDirectory($src, $dest)
Get-Item $dest | Select-Object Name, Length
