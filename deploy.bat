@echo off
echo ========================================
echo   Tasawar Ali Portfolio - Deployment
echo ========================================
echo.

echo Step 1: Setting up Git repository...
git branch -M main
echo.

echo Step 2: Adding GitHub remote...
echo Please create a repository on GitHub first!
echo Repository name: tasawar-ali-portfolio
echo Make it PUBLIC
echo.
echo Press any key after creating the repository...
pause

git remote add origin https://github.com/Tasawarali110/tasawar-ali-portfolio.git

echo.
echo Step 3: Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo   SUCCESS! Code pushed to GitHub
echo ========================================
echo.
echo Next steps:
echo 1. Go to: https://vercel.com/signup
echo 2. Sign in with GitHub
echo 3. Import your repository
echo 4. Click Deploy!
echo.
echo Your portfolio will be live in 2-3 minutes!
echo.
pause
