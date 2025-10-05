# Assignment Submission Checklist

## 📋 Pre-Deployment Checklist

### ✅ Update Your Information (CRITICAL!)

- [ ] Open `Pages/Index.cshtml`
- [ ] Replace `[Your Group Code]` with your actual group code (e.g., "D")
- [ ] Replace `[Your Name] ([Your ID])` with your name and student ID
- [ ] Replace `[Member 1 Name] ([ID])` with team member details
- [ ] Replace `[Member 2 Name] ([ID])` with team member details
- [ ] Replace `[Member 3 Name] ([ID])` with team member details
- [ ] Update session/course info if needed

### ✅ Test Locally

- [ ] .NET 8.0 SDK installed
- [ ] Run `dotnet restore` successfully
- [ ] Run `dotnet build` successfully
- [ ] Run `dotnet run` or `dotnet watch run`
- [ ] Open http://localhost:5000 in browser
- [ ] Test Introduction page loads
- [ ] Test Architecture page loads
- [ ] Test Azure Services page loads
- [ ] Test navigation between pages
- [ ] Verify all styling displays correctly
- [ ] Check on mobile view (responsive design)
- [ ] Verify Bootstrap icons showing
- [ ] Check browser console for errors (F12)

---

## ☁️ Azure Deployment Checklist

### ✅ Azure Account Setup

- [ ] Azure account created (Student or Free)
- [ ] Logged in to Azure Portal
- [ ] Payment method added (if required)
- [ ] Verified $100 student credit (if applicable)

### ✅ App Service Name

- [ ] Determined your app name format: `[groupcode][studentid]`
- [ ] Converted to lowercase
- [ ] Removed hyphens from student ID
- [ ] Example verified: Group D, K22-1234 → `d221234`
- [ ] Name availability checked in Azure Portal

### ✅ Deployment Configuration

- [ ] Resource Group: `FeastFetchRG` (or your preferred name)
- [ ] App Service Plan: Created or selected
- [ ] Runtime Stack: `.NET 8 (LTS)` selected
- [ ] Region: Selected (e.g., East US, West Europe)
- [ ] Pricing Tier: F1 (Free) or B1 (Basic) chosen
- [ ] Operating System: Windows or Linux selected

### ✅ Deployment Method Chosen

Select ONE method:
- [ ] Visual Studio Publish
- [ ] Azure Portal Manual Upload
- [ ] Azure CLI
- [ ] VS Code Azure Extension
- [ ] GitHub Actions CI/CD

### ✅ Deployment Completed

- [ ] Build succeeded without errors
- [ ] Publish package created
- [ ] Uploaded to Azure
- [ ] Deployment status: Success
- [ ] App Service status: Running (green)

---

## 🌐 Live Application Testing

### ✅ URL Verification

- [ ] URL format correct: `https://[name].azurewebsites.net`
- [ ] URL contains your group code
- [ ] URL contains your student ID
- [ ] URL accessible from browser
- [ ] HTTPS working (green padlock)

### ✅ Page Testing

Test each page on Azure:

**Introduction Page:**
- [ ] Loads without errors
- [ ] URL: `https://[yourapp].azurewebsites.net/`
- [ ] Your group details show correctly
- [ ] Project timeline displays
- [ ] Key features cards visible
- [ ] All text readable
- [ ] No placeholder text remaining

**Architecture Page:**
- [ ] Loads without errors
- [ ] URL: `https://[yourapp].azurewebsites.net/Architecture`
- [ ] Three-tier architecture displays
- [ ] All sections visible
- [ ] Diagrams/content formatted properly

**Azure Services Page:**
- [ ] Loads without errors
- [ ] URL: `https://[yourapp].azurewebsites.net/AzureServices`
- [ ] All service cards display
- [ ] Icons showing correctly
- [ ] Content formatted properly

### ✅ Navigation Testing

- [ ] Navbar visible on all pages
- [ ] "Feast Fetch" logo clickable (returns to home)
- [ ] Introduction link works
- [ ] Architecture link works
- [ ] Azure Services link works
- [ ] Navigation smooth, no errors

### ✅ Design & Styling

- [ ] CSS loaded correctly (purple gradient navbar)
- [ ] Bootstrap icons displaying
- [ ] Colors match design (purple/blue theme)
- [ ] Cards have shadows and hover effects
- [ ] Footer displays at bottom
- [ ] Professional appearance

### ✅ Responsive Design

- [ ] Desktop view (1920x1080) works
- [ ] Laptop view (1366x768) works
- [ ] Tablet view (768px) works
- [ ] Mobile view (375px) works
- [ ] Navigation collapses on mobile
- [ ] All text readable on small screens
- [ ] No horizontal scrolling

### ✅ Browser Compatibility

Test on at least 2 browsers:
- [ ] Google Chrome
- [ ] Microsoft Edge
- [ ] Mozilla Firefox
- [ ] Safari (if available)

---

## 📸 Screenshots Checklist

### ✅ Screenshot 1: Azure Portal - Configuration

Capture:
- [ ] Navigate to your App Service in Azure Portal
- [ ] Screenshot shows App Service overview
- [ ] Visible: App name, URL, Resource group, Location, Status
- [ ] Alternative: Configuration page showing Runtime stack
- [ ] Save as: `01_azure_configuration.png`

### ✅ Screenshot 2: Deployment Success

Capture:
- [ ] Deployment Center page showing success
- [ ] OR Overview page showing "Running" status
- [ ] Timestamp visible (to prove recent deployment)
- [ ] Save as: `02_deployment_success.png`

### ✅ Screenshot 3: Live Introduction Page

Capture:
- [ ] Browser address bar clearly visible
- [ ] Full URL shown: `https://[yourapp].azurewebsites.net/`
- [ ] Page fully loaded with your group details
- [ ] No errors visible
- [ ] Save as: `03_live_introduction.png`

### ✅ Screenshot 4: Live Architecture Page

Capture:
- [ ] Browser address bar clearly visible
- [ ] URL: `https://[yourapp].azurewebsites.net/Architecture`
- [ ] Page fully loaded
- [ ] Content visible
- [ ] Save as: `04_live_architecture.png`

### ✅ Screenshot 5: Live Azure Services Page

Capture:
- [ ] Browser address bar clearly visible
- [ ] URL: `https://[yourapp].azurewebsites.net/AzureServices`
- [ ] Page fully loaded
- [ ] Service cards visible
- [ ] Save as: `05_live_azure_services.png`

### ✅ Screenshot Tips

- [ ] Use full-screen captures (not partial)
- [ ] Ensure text is readable (high resolution)
- [ ] Include browser address bar in all website screenshots
- [ ] Use PNG format for better quality
- [ ] Don't use phone photos of screen
- [ ] Crop out personal information if needed
- [ ] Label each screenshot clearly

---

## ✍️ Written Explanations Checklist

### ✅ Explanation 1: Configuration (200 words)

Write about:
- [ ] Why you chose .NET 8.0 runtime
- [ ] Your pricing tier choice (F1 or B1) and reasoning
- [ ] Your region selection and why
- [ ] Benefits of your choices
- [ ] Any other configuration decisions
- [ ] Word count: Exactly ~200 words (190-210 acceptable)
- [ ] Saved in: PDF document

Template in: `ASSIGNMENT_EXPLANATIONS.md`

### ✅ Explanation 2: Functionality (200 words)

Describe:
- [ ] What the application does
- [ ] The three main pages and their content
- [ ] Introduction page features
- [ ] Architecture page content
- [ ] Azure Services page details
- [ ] Design and user experience
- [ ] Responsive design
- [ ] Word count: Exactly ~200 words
- [ ] Saved in: PDF document

Template in: `ASSIGNMENT_EXPLANATIONS.md`

### ✅ Explanation 3: Deployment Challenges (200 words)

Explain:
- [ ] Deployment method you used
- [ ] Any challenges encountered
- [ ] How you solved them
- [ ] What you learned
- [ ] Configuration issues (if any)
- [ ] Time taken
- [ ] Word count: Exactly ~200 words
- [ ] Saved in: PDF document

Template in: `ASSIGNMENT_EXPLANATIONS.md`

---

## 📦 Source Code Package Checklist

### ✅ Prepare Files

- [ ] Close Visual Studio / VS Code
- [ ] Delete `bin/` folder (if exists)
- [ ] Delete `obj/` folder (if exists)
- [ ] Delete `.vs/` folder (if exists)
- [ ] Delete `.vscode/` folder (if exists)
- [ ] Keep all `.cshtml` files
- [ ] Keep all `.cs` files
- [ ] Keep `wwwroot/` folder
- [ ] Keep all documentation (*.md files)
- [ ] Keep `FeastFetch.csproj`
- [ ] Keep `Program.cs`

### ✅ Create ZIP File

**Windows:**
- [ ] Select all project files
- [ ] Right-click → "Send to" → "Compressed (zipped) folder"
- [ ] Name it: `FeastFetch_[YourID].zip`
- [ ] Example: `FeastFetch_K221234.zip`

**Linux/Mac:**
- [ ] Open terminal in project folder
- [ ] Run: `zip -r FeastFetch_K221234.zip . -x "*/bin/*" "*/obj/*"`
- [ ] Verify ZIP created

### ✅ Verify ZIP Contents

- [ ] Extract ZIP to test folder
- [ ] Verify all files present
- [ ] Check file size (should be <5 MB without bin/obj)
- [ ] Ensure Pages/ folder included
- [ ] Ensure wwwroot/css/ included
- [ ] Ensure *.csproj file included

---

## 📄 PDF Document Checklist

### ✅ Document Structure

Create PDF with these sections:

**1. Cover Page:**
- [ ] Assignment title: "Azure App Service Assignment"
- [ ] Your name
- [ ] Your student ID
- [ ] Your group code
- [ ] Course name: Cloud Computing
- [ ] Date: October 5, 2025
- [ ] Live URL prominently displayed

**2. Group Information:**
- [ ] Group code
- [ ] Leader name and ID
- [ ] All member names and IDs
- [ ] Session information

**3. App Service Setup Section:**
- [ ] Screenshot of Azure configuration
- [ ] 200-word explanation of configuration choices
- [ ] Clear heading

**4. Web Application Section:**
- [ ] Screenshot of all three live pages
- [ ] 200-word description of functionality
- [ ] Clear heading

**5. Deployment Section:**
- [ ] Screenshot of deployment success
- [ ] Live URL listed again
- [ ] 200-word description of deployment challenges
- [ ] Clear heading

**6. Live URLs:**
- [ ] Introduction page URL
- [ ] Architecture page URL
- [ ] Azure Services page URL
- [ ] All clickable (if digital submission)

### ✅ PDF Formatting

- [ ] Professional appearance
- [ ] Clear section headings
- [ ] Page numbers
- [ ] High-quality images (not blurry)
- [ ] Consistent fonts
- [ ] Proper spacing
- [ ] No spelling errors
- [ ] No grammar errors
- [ ] 5-10 pages total

### ✅ PDF File

- [ ] Saved as PDF format
- [ ] Named: `FeastFetch_Assignment_[YourID].pdf`
- [ ] Example: `FeastFetch_Assignment_K221234.pdf`
- [ ] File size <20 MB
- [ ] Can be opened on any device

---

## 📤 Final Submission Checklist

### ✅ Files Ready

- [ ] ZIP file: `FeastFetch_[YourID].zip`
- [ ] PDF document: `FeastFetch_Assignment_[YourID].pdf`
- [ ] Both files in easily accessible folder

### ✅ Pre-Submission Verification

- [ ] Live URL still working
- [ ] All three pages accessible
- [ ] App Service still running
- [ ] ZIP file opens correctly
- [ ] PDF opens correctly
- [ ] File names follow convention

### ✅ Submission Details

- [ ] Submission platform identified (Classroom, Portal, etc.)
- [ ] Deadline confirmed: October 5, 2025, 11:59 PM
- [ ] File size limits checked
- [ ] Format requirements met
- [ ] Any additional requirements noted

### ✅ Submit Files

- [ ] Upload ZIP file (source code)
- [ ] Upload PDF document
- [ ] Verify upload completed
- [ ] Download to verify uploaded correctly
- [ ] Submission confirmation received
- [ ] Confirmation email saved (if applicable)

### ✅ Post-Submission

- [ ] Keep local copies of all files
- [ ] Keep App Service running
- [ ] Don't modify or delete anything
- [ ] Check submission portal shows "Submitted"
- [ ] Note submission timestamp

---

## ⚠️ Common Mistakes to Avoid

- [ ] ❌ Forgetting to update group details in Index.cshtml
- [ ] ❌ Stopping App Service before grading
- [ ] ❌ Submitting with placeholder text
- [ ] ❌ Wrong URL naming convention
- [ ] ❌ Screenshots without URL visible
- [ ] ❌ Including bin/ and obj/ folders in ZIP
- [ ] ❌ Not testing on Azure before submission
- [ ] ❌ Submitting only PDF (need ZIP too)
- [ ] ❌ Submitting only ZIP (need PDF too)
- [ ] ❌ Missing 200-word explanations
- [ ] ❌ Wrong word count (way over/under 200)
- [ ] ❌ Low-quality screenshots
- [ ] ❌ Submitting after deadline

---

## 🎯 Final Verification (Do This Last!)

**1 Hour Before Deadline:**
- [ ] Open live URL in new browser
- [ ] Test all three pages
- [ ] Verify all information correct
- [ ] Check App Service status in Azure
- [ ] Confirm files uploaded to submission portal

**30 Minutes Before Deadline:**
- [ ] Download your submitted files
- [ ] Open and verify ZIP
- [ ] Open and verify PDF
- [ ] Confirm live URL working

**After Submission:**
- [ ] Screenshot submission confirmation
- [ ] Email yourself the submission timestamp
- [ ] Keep App Service running
- [ ] Don't make any changes
- [ ] Relax! 🎉

---

## 📊 Points Distribution

| Component | Points | Status |
|-----------|--------|--------|
| Azure Configuration | 15 | [ ] |
| Web Application | 15 | [ ] |
| Deployment | 20 | [ ] |
| **Total** | **50** | **[ ]** |

---

## ✅ Master Checklist

Print this and check off as you complete each section:

- [ ] Information updated in code
- [ ] Tested locally
- [ ] Deployed to Azure
- [ ] Live URL verified
- [ ] All pages tested online
- [ ] Screenshots captured (5 total)
- [ ] Explanation 1 written (200 words)
- [ ] Explanation 2 written (200 words)
- [ ] Explanation 3 written (200 words)
- [ ] ZIP file created
- [ ] PDF document created
- [ ] Files named correctly
- [ ] Submitted to platform
- [ ] Submission confirmed
- [ ] App Service kept running

---

## 🆘 Last-Minute Help

**If something breaks:**
1. Don't panic!
2. Check DEPLOYMENT_GUIDE.md troubleshooting section
3. Restart App Service in Azure Portal
4. Verify configuration settings
5. Redeploy if needed

**If you can't submit:**
1. Contact instructor immediately
2. Have proof of completion ready (screenshots)
3. Keep working app live

**If deadline is approaching:**
1. Submit what you have
2. Complete is better than perfect
3. Working URL is critical

---

## 🎉 You've Got This!

Follow this checklist step by step, and you'll have a perfect submission!

**Remember:** Your app must remain live until grading is complete!

---

**Good luck! 🚀**

*Deadline: October 5, 2025, 11:59 PM*

