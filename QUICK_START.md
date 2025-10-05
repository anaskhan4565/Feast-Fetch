# Quick Start Guide - Feast Fetch

## 🎯 What You Have

A complete, production-ready ASP.NET Core 8.0 web application with:
- ✅ 3 beautiful, responsive pages (Introduction, Architecture, Azure Services)
- ✅ Modern UI with Bootstrap 5 and custom styling
- ✅ Complete documentation and deployment guides
- ✅ Ready to deploy to Azure App Service

---

## 📝 Before You Deploy - IMPORTANT!

### Update Your Information

Open `Pages/Index.cshtml` and replace these placeholders:

```html
Line ~45: [Your Group Code] → Your actual group code (e.g., "D")
Line ~48: [Your Name] ([Your ID]) → Your name and student ID
Lines ~52-56: [Member Names and IDs] → Your team members' details
```

**Example:**
```html
<td>Group D</td>  <!-- Instead of [Your Group Code] -->
<td>John Smith (K22-1234)</td>  <!-- Instead of [Your Name] ([Your ID]) -->
```

---

## 🚀 Quick Deploy Steps

### If You Have .NET SDK Installed:

1. **Test Locally:**
   ```bash
   cd /home/it-admin/Desktop/iccAssignment
   dotnet restore
   dotnet run
   ```
   Open browser to: http://localhost:5000

2. **Build for Production:**
   ```bash
   dotnet publish -c Release -o ./publish
   ```

3. **Deploy to Azure:**
   - Use Visual Studio: Right-click project → Publish
   - Use VS Code: Azure Extension → Deploy to Web App
   - Use Azure CLI: See DEPLOYMENT_GUIDE.md

### If You Don't Have .NET SDK:

1. **Install .NET 8.0 SDK:**
   - Windows/Mac: https://dotnet.microsoft.com/download
   - Linux: `sudo snap install dotnet-sdk --classic --channel=8.0`

2. **Then follow steps above**

---

## 📦 Project Structure

```
iccAssignment/
├── Pages/                       # Razor Pages
│   ├── Shared/
│   │   └── _Layout.cshtml      # Main layout with navigation
│   ├── Index.cshtml            # Introduction page ⭐
│   ├── Architecture.cshtml     # Architecture page ⭐
│   ├── AzureServices.cshtml    # Azure Services page ⭐
│   ├── Error.cshtml            # Error page
│   ├── *.cshtml.cs             # Page models (code-behind)
│   ├── _ViewStart.cshtml       # View configuration
│   └── _ViewImports.cshtml     # Global imports
├── wwwroot/
│   └── css/
│       └── site.css            # Custom styles 🎨
├── Properties/
│   └── launchSettings.json     # Development settings
├── Program.cs                   # Application entry point
├── FeastFetch.csproj           # Project file
├── appsettings.json            # Configuration
├── README.md                    # Main documentation 📖
├── DEPLOYMENT_GUIDE.md         # Detailed deployment steps 🚀
├── ASSIGNMENT_EXPLANATIONS.md  # 200-word templates 📝
├── QUICK_START.md              # This file
└── .gitignore                  # Git ignore rules
```

---

## 🎨 Key Features

### 1. Introduction Page (Index.cshtml)
- Project overview and description
- Group details table (Code, Leader, Members)
- 6-phase project timeline
- 6 key features with icons
- Modern card-based layout

### 2. Architecture Page
- Three-tier architecture explanation
- System component breakdown
- Architectural patterns (MVC, Repository, DI, REST)
- Data flow example (order placement)
- Security architecture

### 3. Azure Services Page
- 7 major Azure services explained:
  - App Service
  - SQL Database
  - Blob Storage
  - API Management
  - Redis Cache
  - Azure Functions
  - Application Insights
- 6 additional services
- Cost optimization strategies

---

## 📸 Screenshots Needed for Assignment

1. **Azure Portal - App Service Configuration**
   - Shows: Name, URL, Region, Runtime Stack, Pricing Tier

2. **Deployment Success**
   - Shows: Green checkmark, deployed status

3. **Live Website - All Three Pages**
   - Introduction page with URL visible
   - Architecture page
   - Azure Services page

4. **Browser Address Bar**
   - Shows: https://[yourapp].azurewebsites.net

---

## 📄 Assignment Deliverables Checklist

### ZIP File (Source Code):
- [ ] All project files (this entire folder)
- [ ] Can exclude: bin/, obj/, .vs/, .vscode/

### PDF Document:
- [ ] Cover page with your details
- [ ] Screenshot 1: Azure App Service configuration
- [ ] Screenshot 2: Deployment success
- [ ] Screenshots 3-5: All three live pages
- [ ] 200-word explanation 1: Configuration choices
- [ ] 200-word explanation 2: App functionality
- [ ] 200-word explanation 3: Deployment challenges
- [ ] Live URL prominently displayed
- [ ] Group details and member information

---

## 🔗 Your App Service URL Format

**Format:** `https://[groupcode][studentid].azurewebsites.net`

**Examples:**
- Group D, ID K22-1234 → `https://d221234.azurewebsites.net`
- Group A, ID K22-5678 → `https://a225678.azurewebsites.net`
- Group C, ID K23-9012 → `https://c239012.azurewebsites.net`

**Rules:**
- Lowercase only
- Remove hyphens from ID
- No spaces or special characters

---

## ⚡ Quick Commands Reference

```bash
# Restore packages
dotnet restore

# Build project
dotnet build

# Run locally (with hot reload)
dotnet watch run

# Publish for production
dotnet publish -c Release -o ./publish

# Create ZIP for deployment
cd publish && zip -r ../deploy.zip . && cd ..
```

---

## 🎨 Customization Tips

### Change Colors:
Edit `wwwroot/css/site.css`:
```css
/* Line 1-8: Update color variables */
--primary-color: #your-color;
```

### Update Content:
- Introduction: `Pages/Index.cshtml`
- Architecture: `Pages/Architecture.cshtml`
- Azure Services: `Pages/AzureServices.cshtml`

### Add New Page:
1. Create `Pages/NewPage.cshtml`
2. Create `Pages/NewPage.cshtml.cs`
3. Add link to `Pages/Shared/_Layout.cshtml` (navigation)

---

## 🐛 Common Issues & Solutions

### Issue: CSS Not Loading
**Solution:** Verify `wwwroot/css/site.css` exists and path in `_Layout.cshtml` is correct

### Issue: Page Not Found
**Solution:** Check URL capitalization, verify .cshtml file exists

### Issue: Build Errors
**Solution:** Ensure .NET 8.0 SDK installed, run `dotnet restore`

### Issue: Icons Not Showing
**Solution:** Check internet connection (Bootstrap Icons loaded from CDN)

---

## 🎓 Grading Criteria

| Criteria | Points | Status |
|----------|--------|--------|
| App Service Setup & Configuration | 15 | ✅ Ready |
| Web Application Development | 15 | ✅ Complete |
| Successful Deployment | 20 | ⏳ Your task |
| **Total** | **50** | |

---

## 📚 Documentation Files

1. **README.md** - Complete project documentation
2. **DEPLOYMENT_GUIDE.md** - Step-by-step deployment (5 methods)
3. **ASSIGNMENT_EXPLANATIONS.md** - 200-word templates
4. **QUICK_START.md** - This file (quick reference)

---

## ⏰ Submission Deadline

**Date:** October 5, 2025, 11:59 PM

### Day Before Deadline:
- [ ] Test all pages locally
- [ ] Deploy to Azure
- [ ] Verify all pages work online
- [ ] Take all required screenshots
- [ ] Write/customize 200-word explanations
- [ ] Create ZIP file of source code
- [ ] Create PDF with screenshots and explanations

### On Deadline Day:
- [ ] Final verification that site is live
- [ ] Submit ZIP file to classroom
- [ ] Submit PDF document to classroom
- [ ] Keep app running until grading complete

---

## 🎯 Success Checklist

Before submission, verify:
- [x] Project builds without errors
- [x] All 3 pages exist and have content
- [x] Modern, professional design
- [x] Responsive on mobile
- [ ] Your group info updated in Index.cshtml
- [ ] Deployed to Azure App Service
- [ ] Live URL follows naming convention
- [ ] All pages accessible online
- [ ] Screenshots captured
- [ ] 200-word explanations written
- [ ] ZIP and PDF ready to submit

---

## 💡 Pro Tips

1. **Deploy Early:** Don't wait until the last day
2. **Test Thoroughly:** Check on different browsers and devices
3. **Save Screenshots:** Take extras, use the best ones
4. **Backup:** Keep multiple copies of your work
5. **URL Check:** Verify your URL contains correct group code and ID
6. **Keep Running:** Don't stop the App Service until after grading

---

## 🆘 Need Help?

1. **Read the guides:**
   - DEPLOYMENT_GUIDE.md for deployment help
   - README.md for project overview
   - ASSIGNMENT_EXPLANATIONS.md for writing help

2. **Check Azure documentation:**
   - https://docs.microsoft.com/azure/app-service

3. **Ask for help:**
   - Your instructor
   - Your TA
   - Classmates (for deployment, not copying pages)

---

## ✨ You're Ready!

Everything is set up and ready to go. Just:
1. Update your group information
2. Deploy to Azure
3. Take screenshots
4. Write explanations
5. Submit!

**Good luck! 🚀**

---

*Last Updated: October 2025*
*Project: Feast Fetch - Restaurant Ordering System*
*Framework: ASP.NET Core 8.0*

