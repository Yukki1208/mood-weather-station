$client = New-Object System.Net.WebClient
$response = $client.UploadFile("http://124.223.56.48/upload", "d:\code\test1\public\chat.html")
Write-Output $response