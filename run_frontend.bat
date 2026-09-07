@echo off
cd /d "%~dp0frontend"
set PATH=C:\Program Files\nodejs;%PATH%
echo Starting Vite Frontend...
npm.cmd run dev
