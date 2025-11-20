@echo off
echo ========================================
echo Tasawar Ali Portfolio - GitHub Setup
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo Git is installed!
echo.

REM Initialize git repository
echo Step 1: Initializing Git repository...
git init
echo.

REM Add all files
echo Step 2: Adding all files...
git add .
echo.

REM Commit
echo Step 3: Creating initial commit...
git commit -m "Initial commit - Tasawar Ali Portfolio"
echo.

REM Rename branch to main
echo Step 4: Renaming branch to main...
git branch -M main
echo.

echo ========================================
echo NEXT STEPS:
echo ========================================
echo.
echo 1. Create a new repository on GitHub:
echo    - Go to: https://github.com/new
echo    - Name: tasawar-ali-portfolio
echo    - Make it PUBLIC
echo    - Do NOT initialize with README
echo.
echo 2. Copy your GitHub username
echo.
echo 3. Run this command (replace YOUR_USERNAME):
echo    git remote add origin https://github.com/YOUR_USERNAME/tasawar-ali-portfolio.git
echo    git push -u origin main
echo.
echo 4. Then deploy on Vercel:
echo    - Go to: https://vercel.com
echo    - Sign in with GitHub
echo    - Import your repository
echo    - Click Deploy
echo.
echo Your portfolio will be live in 2-3 minutes!
echo.
pause
