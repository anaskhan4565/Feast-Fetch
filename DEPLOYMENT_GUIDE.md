# Azure App Service Deployment Guide - Feast Fetch

This comprehensive guide walks you through deploying your Feast Fetch application to Azure App Service.

---

## 📋 Prerequisites

Before you begin, ensure you have:

- [ ] Microsoft Azure account (Student account or Free tier)
- [ ] .NET 8.0 SDK installed
- [ ] Azure CLI installed (for CLI deployment) OR Visual Studio/VS Code
- [ ] Your Group Code and Student ID ready
- [ ] Application tested locally and working

---

## 🎯 Naming Convention

**Important:** Your App Service name MUST follow this format:
- Format: `[groupcode][studentid]`
- Example: If Group Code is "D" and Student ID is "K22-1234"
- App Service Name: `d221234`
- Full URL: `https://d221234.azurewebsites.net`

**Note:** 
- Use lowercase only
- Remove hyphens from student ID
- Example: K22-1234 becomes 221234

---

## Method 1: Deploy Using Visual Studio (Recommended for Beginners)

### Step 1: Prepare Your Project

1. Open the project in Visual Studio 2022
2. Build the solution to ensure no errors:
   - Click **Build** > **Build Solution** (Ctrl+Shift+B)
   - Verify build succeeds with no errors

### Step 2: Configure Azure Account

1. In Visual Studio, go to **View** > **Server Explorer**
2. Right-click on **Azure** and select **Connect to Microsoft Azure Subscription**
3. Sign in with your Azure account credentials

### Step 3: Publish to Azure

1. In Solution Explorer, right-click on the **FeastFetch** project
2. Select **Publish**
3. Choose **Azure** as the target
4. Click **Next**
5. Select **Azure App Service (Windows)** or **Azure App Service (Linux)**
   - Windows is recommended for .NET applications
6. Click **Next**

### Step 4: Create New App Service

1. Click **Create New**
2. Fill in the details:
   - **Name:** [groupcode][studentid] (e.g., d221234)
   - **Subscription:** Your Azure subscription
   - **Resource Group:** Click **New** and name it `FeastFetchRG`
   - **Hosting Plan:** Click **New** and configure:
     - Name: `FeastFetchPlan`
     - Location: Choose nearest region (e.g., East US)
     - Size: **F1 (Free)** or **B1 (Basic)**
3. Click **Create**

### Step 5: Complete Publishing

1. Visual Studio will create all resources (takes 2-3 minutes)
2. Once created, click **Finish**
3. Click **Publish** button
4. Wait for deployment to complete (2-5 minutes)
5. Your browser will automatically open to your live site

### Step 6: Verify Deployment

1. Navigate to all three pages:
   - Home/Introduction: `https://[yourapp].azurewebsites.net/`
   - Architecture: `https://[yourapp].azurewebsites.net/Architecture`
   - Azure Services: `https://[yourapp].azurewebsites.net/AzureServices`
2. Verify all styling and navigation works correctly

---

## Method 2: Deploy Using Azure Portal (Manual)

### Step 1: Create App Service in Azure Portal

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **Create a resource**
3. Search for **Web App** and click **Create**
4. Fill in the details:

**Basics Tab:**
- **Subscription:** Your subscription
- **Resource Group:** Create new `FeastFetchRG`
- **Name:** [groupcode][studentid]
- **Publish:** Code
- **Runtime stack:** .NET 8 (LTS)
- **Operating System:** Windows or Linux
- **Region:** East US (or nearest)

**Pricing Plans:**
- Click **Change size**
- Select **Dev/Test** tab
- Choose **F1 (Free)** or **B1 (Basic)**

5. Click **Review + Create**
6. Click **Create**
7. Wait for deployment (2-3 minutes)

### Step 2: Prepare Application Package

1. Open terminal in project directory
2. Run publish command:
   ```bash
   dotnet publish -c Release -o ./publish
   ```
3. Navigate to publish folder:
   ```bash
   cd publish
   ```
4. Create ZIP file:
   - **Windows:** Select all files > Right-click > Send to > Compressed folder
   - **Linux/Mac:** 
     ```bash
     zip -r deploy.zip .
     ```

### Step 3: Deploy Using Portal

1. Go to your App Service in Azure Portal
2. In left menu, click **Deployment Center**
3. Choose deployment source:
   - **Local Git:** For Git-based deployment
   - **ZIP Deploy:** For direct ZIP upload (easier)
4. For ZIP Deploy:
   - Go to **Advanced Tools** > **Go**
   - Click **Tools** > **ZIP Push Deploy**
   - Drag and drop your `deploy.zip` file
5. Wait for deployment to complete

### Step 4: Configure Application

1. In App Service, go to **Configuration**
2. Under **General settings:**
   - **Stack:** .NET
   - **Major version:** .NET 8 (LTS)
   - **Platform:** 64 Bit
3. Click **Save**

---

## Method 3: Deploy Using Azure CLI (Advanced)

### Step 1: Install Azure CLI

Download from: https://docs.microsoft.com/cli/azure/install-azure-cli

### Step 2: Login to Azure

```bash
az login
```

Your browser will open for authentication.

### Step 3: Set Variables

```bash
# Replace these with your actual values
RESOURCE_GROUP="FeastFetchRG"
APP_NAME="d221234"  # Your groupcode + studentid
LOCATION="eastus"
PLAN_NAME="FeastFetchPlan"
```

### Step 4: Create Resources

```bash
# Create resource group
az group create --name $RESOURCE_GROUP --location $LOCATION

# Create App Service Plan (F1 Free tier)
az appservice plan create \
  --name $PLAN_NAME \
  --resource-group $RESOURCE_GROUP \
  --sku F1 \
  --is-linux false

# Create Web App
az webapp create \
  --name $APP_NAME \
  --resource-group $RESOURCE_GROUP \
  --plan $PLAN_NAME \
  --runtime "DOTNET|8.0"
```

### Step 5: Build and Deploy

```bash
# Build and publish the application
dotnet publish -c Release -o ./publish

# Navigate to publish folder
cd publish

# Create ZIP file
zip -r ../deploy.zip .

# Go back to project root
cd ..

# Deploy ZIP to Azure
az webapp deployment source config-zip \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --src deploy.zip
```

### Step 6: Verify Deployment

```bash
# Open the website in browser
az webapp browse --name $APP_NAME --resource-group $RESOURCE_GROUP
```

---

## Method 4: Deploy Using VS Code (Recommended for VS Code Users)

### Step 1: Install Extensions

1. Open VS Code
2. Install **Azure App Service** extension
3. Install **C# Dev Kit** extension (if not already installed)

### Step 2: Sign in to Azure

1. Click Azure icon in sidebar
2. Click **Sign in to Azure**
3. Complete authentication in browser

### Step 3: Deploy

1. In VS Code Explorer, right-click on project folder
2. Select **Deploy to Web App**
3. Choose **Create new Web App... Advanced**
4. Follow prompts:
   - Enter app name: [groupcode][studentid]
   - Select resource group: Create new `FeastFetchRG`
   - Select runtime: .NET 8
   - Select OS: Windows or Linux
   - Select pricing tier: F1 or B1
   - Select location: East US
5. Confirm deployment
6. Wait for completion (3-5 minutes)

---

## Method 5: GitHub Actions CI/CD (Continuous Deployment)

### Step 1: Create GitHub Repository

1. Initialize Git in project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create repository on GitHub
3. Push code:
   ```bash
   git remote add origin https://github.com/yourusername/feast-fetch.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Create App Service with GitHub Integration

1. Go to Azure Portal
2. Create Web App as described in Method 2
3. In **Deployment Center**, select **GitHub**
4. Authorize GitHub access
5. Select your repository and branch
6. Azure will automatically create workflow file
7. Every push to main branch will trigger deployment

### Step 3: Workflow File (Optional Manual Setup)

Create `.github/workflows/azure-deploy.yml`:

```yaml
name: Deploy to Azure

on:
  push:
    branches: [ main ]
  workflow_dispatch:

env:
  AZURE_WEBAPP_NAME: your-app-name
  DOTNET_VERSION: '8.0.x'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: ${{ env.DOTNET_VERSION }}
    
    - name: Restore dependencies
      run: dotnet restore
    
    - name: Build
      run: dotnet build --configuration Release --no-restore
    
    - name: Publish
      run: dotnet publish -c Release -o ./publish
    
    - name: Deploy to Azure
      uses: azure/webapps-deploy@v2
      with:
        app-name: ${{ env.AZURE_WEBAPP_NAME }}
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: ./publish
```

---

## 🔧 Post-Deployment Configuration

### 1. Configure Custom Domain (Optional)

1. Go to **Custom domains** in App Service
2. Click **Add custom domain**
3. Follow verification steps
4. Add your domain

### 2. Enable HTTPS

Azure automatically provides HTTPS. To enforce it:
1. Go to **TLS/SSL settings**
2. Enable **HTTPS Only**

### 3. Configure Application Settings

1. Go to **Configuration** > **Application settings**
2. Add any required environment variables

### 4. Enable Application Insights (Optional)

1. Go to **Application Insights**
2. Click **Turn on Application Insights**
3. Create new resource or use existing
4. Get detailed performance metrics

---

## 📸 Screenshots for Assignment

Take these screenshots for your submission:

### 1. Azure Portal - App Service Overview
- Navigate to your App Service
- Take screenshot showing:
  - App Service name
  - URL
  - Resource group
  - Location
  - Status (Running)

### 2. Configuration Page
- Go to **Configuration**
- Take screenshot showing:
  - Runtime stack (.NET 8)
  - Platform settings

### 3. Deployment Success
- Go to **Deployment Center**
- Take screenshot showing successful deployment

### 4. Live Application
Take screenshots of:
- Introduction page
- Architecture page
- Azure Services page
- Browser address bar showing your URL

---

## ✅ Verification Checklist

Before submitting, verify:

- [ ] App Service is running (Green status)
- [ ] URL follows naming convention: [groupcode][studentid].azurewebsites.net
- [ ] All three pages load correctly
- [ ] Navigation between pages works
- [ ] Styling (CSS) loads properly
- [ ] Bootstrap icons display correctly
- [ ] Responsive design works on mobile
- [ ] HTTPS is enabled and working
- [ ] No console errors in browser developer tools

---

## 🐛 Troubleshooting Common Issues

### Issue 1: App Service Name Already Taken

**Error:** "The name is already in use"

**Solution:**
- Try adding a number: d2212341, d2212342
- Use slightly different format: d22-1234
- Check if someone else already used that name

### Issue 2: 500 Internal Server Error

**Solutions:**
1. Check Application Logs:
   - Go to **Log stream** in portal
   - Look for error messages

2. Verify runtime:
   - Configuration > General Settings
   - Ensure .NET 8 is selected

3. Rebuild and redeploy:
   ```bash
   dotnet clean
   dotnet publish -c Release
   ```

### Issue 3: CSS Not Loading (No Styling)

**Solutions:**
1. Verify wwwroot folder is included in publish
2. Check browser console for 404 errors
3. Clear browser cache (Ctrl+F5)
4. Verify paths in _Layout.cshtml use `~` prefix:
   ```html
   <link rel="stylesheet" href="~/css/site.css" />
   ```

### Issue 4: Page Not Found (404)

**Solutions:**
1. Verify page files exist in Pages folder
2. Check URL capitalization (case-sensitive on Linux)
3. Restart App Service:
   - Go to Overview > Restart

### Issue 5: Deployment Takes Too Long

**Solutions:**
1. Check deployment logs in portal
2. Use ZIP deploy instead of Git deploy
3. Ensure good internet connection
4. Try deploying during off-peak hours

### Issue 6: App Shows Default Azure Page

**Solution:**
- Deployment might not have completed
- Go to Deployment Center and trigger new deployment
- Wait 5-10 minutes after deployment

---

## 💰 Pricing Information

### F1 (Free) Tier
- **Cost:** $0/month
- **Compute:** 60 minutes/day
- **Memory:** 1 GB
- **Storage:** 1 GB
- **Good for:** Demos, assignments, testing

### B1 (Basic) Tier
- **Cost:** ~$13/month (~$0.018/hour)
- **Compute:** Unlimited
- **Memory:** 1.75 GB
- **Storage:** 10 GB
- **Good for:** Small production apps

**💡 Tip:** For assignment, use F1 Free tier. Remember to delete resources after grading to avoid charges!

---

## 🗑️ Cleanup After Assignment

To avoid any charges after your assignment is graded:

### Option 1: Delete Resource Group (Removes Everything)

```bash
az group delete --name FeastFetchRG --yes --no-wait
```

Or in Portal:
1. Go to Resource Groups
2. Select `FeastFetchRG`
3. Click **Delete resource group**
4. Type resource group name to confirm
5. Click **Delete**

### Option 2: Stop App Service (Keeps Resources)

1. Go to App Service Overview
2. Click **Stop**
3. App will remain but won't run (no charges on F1)

---

## 📚 Additional Resources

- [Azure App Service Documentation](https://docs.microsoft.com/azure/app-service/)
- [.NET 8 Deployment Guide](https://docs.microsoft.com/aspnet/core/host-and-deploy/azure-apps/)
- [Azure CLI Reference](https://docs.microsoft.com/cli/azure/)
- [Azure Free Account](https://azure.microsoft.com/free/students/)

---

## 🆘 Need Help?

If you encounter issues:
1. Check Azure Status: https://status.azure.com
2. Review deployment logs in Azure Portal
3. Consult Microsoft Documentation
4. Ask your instructor or TA

---

**Good luck with your deployment! 🚀**

Remember: Your application URL MUST be live and accessible until grading is complete!

