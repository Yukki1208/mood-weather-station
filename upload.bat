@echo off
chcp 65001 > nul
echo ========================================
echo   心情气象站 - 文件上传脚本
echo ========================================
echo.

set SERVER=124.223.56.48
set USER=root
set REMOTE_PATH=/var/www/mood-weather

echo 上传 index.html ...
echo.| set /p="  "
scp -o StrictHostKeyChecking=no index.html %USER%@%SERVER%:%REMOTE_PATH%/ > nul 2>&1
if %errorlevel% equ 0 (echo 成功) else (echo 需要手动上传)

echo 上传 styles.css ...
echo.| set /p="  "
scp -o StrictHostKeyChecking=no styles.css %USER%@%SERVER%:%REMOTE_PATH%/ > nul 2>&1
if %errorlevel% equ 0 (echo 成功) else (echo 需要手动上传)

echo 上传 app.js ...
echo.| set /p="  "
scp -o StrictHostKeyChecking=no app.js %USER%@%SERVER%:%REMOTE_PATH%/ > nul 2>&1
if %errorlevel% equ 0 (echo 成功) else (echo 需要手动上传)

echo.
echo ========================================
echo   上传完成！
echo   访问 http://%SERVER%
echo ========================================
pause