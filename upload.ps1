# 心情气象站 - 上传脚本
# 使用方法：右键 -> 使用 PowerShell 运行

$Server = "124.223.56.48"
$User = "root"
$Password = "Akun@1234"
$RemotePath = "/var/www/mood-weather"

$localFiles = @(
    "index.html",
    "styles.css",
    "app.js"
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  心情气象站 - 文件上传脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

foreach ($file in $localFiles) {
    if (Test-Path $file) {
        Write-Host "上传: $file ..." -NoNewline
        $result = & scp -o StrictHostKeyChecking=no $file "${User}@${Server}:${RemotePath}/" 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host " 成功" -ForegroundColor Green
        } else {
            Write-Host " 失败" -ForegroundColor Red
            Write-Host $result
        }
    } else {
        Write-Host "跳过: $file (文件不存在)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  上传完成！" -ForegroundColor Cyan
Write-Host "  访问 http://$Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Read-Host "按 Enter 退出"