@echo off
echo ================================================================
echo Starting AI-Driven Deepfake Image and Video Detection Framework
echo Base Architecture: MINTIME Multi-Identity Spatio-Temporal Model
echo ================================================================
start "Deepfake Detection Backend" "%~dp0run_backend.bat"
start "Deepfake Detection Frontend" "%~dp0run_frontend.bat"
echo.
echo [OK] Backend URL: http://127.0.0.1:8000
echo [OK] Frontend URL: http://localhost:8080
echo.
