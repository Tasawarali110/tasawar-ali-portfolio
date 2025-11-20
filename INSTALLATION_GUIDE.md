# Installation Guide - Dynamic Full-Stack Portfolio

## Problem: Node.js/npm is not installed on your system

To run this React/Vite project, you need Node.js and npm installed.

## Solution: Install Node.js

### Option 1: Download from Official Website (Recommended)
1. Visit: https://nodejs.org/
2. Download the **LTS (Long Term Support)** version for Windows
3. Run the installer (.msi file)
4. Follow the installation wizard (accept defaults)
5. Restart your computer

### Option 2: Using Winget (Windows Package Manager)
Open PowerShell as Administrator and run:
```powershell
winget install OpenJS.NodeJS.LTS
```

## After Installing Node.js

### Step 1: Verify Installation
Open a new PowerShell window and run:
```powershell
node --version
npm --version
```

You should see version numbers (e.g., v20.x.x and 10.x.x)

### Step 2: Install Project Dependencies
Navigate to your project folder and run:
```powershell
npm install
```

This will install all required packages (React, Vite, TailwindCSS, etc.)

### Step 3: Run the Development Server
```powershell
npm run dev
```

The project will open automatically in your browser at http://localhost:3000

### Step 4: Build for Production (Optional)
```powershell
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Status

✅ **Code Quality**: All components checked - NO BUGS FOUND!
✅ **TypeScript**: No type errors
✅ **Configuration**: Vite config is properly set up
✅ **Dependencies**: All packages are correctly defined in package.json

## What This Portfolio Includes

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📊 Interactive data visualizations
- 📱 Mobile-friendly navigation
- 🌙 Dark theme design
- 📧 Contact form with Supabase backend
- 🚀 Dynamic project showcase

## Need Help?

If you encounter any issues after installing Node.js, please let me know!
