# Feast Fetch - Restaurant Ordering System

A modern, cloud-based restaurant ordering system built with ASP.NET Core 8.0 and deployed on Microsoft Azure App Service.

## 📋 Project Overview

**Feast Fetch** is a comprehensive restaurant ordering platform designed to revolutionize the way customers interact with their favorite restaurants. Built entirely on Microsoft Azure's cloud infrastructure, it provides a scalable, secure, and highly available solution for online food ordering.

## 🎯 Assignment Details

**Course:** Cloud Computing  
**Assignment:** Building a Basic Web App Using Azure App Service  
**Semester:** Fall 2025

### Project Requirements
- ✅ Azure App Service deployment
- ✅ C# .NET 8.0 web application
- ✅ Introduction page with group details and project plan
- ✅ Architecture page discussing system design
- ✅ Azure Services page explaining cloud infrastructure

## 🚀 Features

- **Modern UI/UX:** Responsive design with Bootstrap 5 and custom styling
- **Three Main Pages:**
  - Introduction: Project overview, group details, and project timeline
  - Architecture: Detailed system architecture and design patterns
  - Azure Services: Comprehensive cloud infrastructure documentation
- **Cloud-Native:** Built for Azure App Service with scalability in mind
- **Mobile Responsive:** Works seamlessly across all devices

## 🛠️ Technology Stack

- **Framework:** ASP.NET Core 8.0
- **Pattern:** Razor Pages
- **Frontend:** HTML5, CSS3, Bootstrap 5, Bootstrap Icons
- **Backend:** C# .NET 8.0
- **Hosting:** Azure App Service
- **Runtime:** .NET 8.0

## 📁 Project Structure

```
FeastFetch/
├── Pages/
│   ├── Shared/
│   │   └── _Layout.cshtml          # Main layout template
│   ├── Index.cshtml                # Introduction page
│   ├── Index.cshtml.cs             # Introduction page model
│   ├── Architecture.cshtml         # Architecture page
│   ├── Architecture.cshtml.cs      # Architecture page model
│   ├── AzureServices.cshtml        # Azure Services page
│   ├── AzureServices.cshtml.cs     # Azure Services page model
│   ├── _ViewStart.cshtml           # View start configuration
│   └── _ViewImports.cshtml         # Global imports
├── wwwroot/
│   └── css/
│       └── site.css                # Custom styles
├── Program.cs                      # Application entry point
├── FeastFetch.csproj              # Project file
├── appsettings.json               # Configuration
└── README.md                      # This file
```

## 🔧 Local Development

### Prerequisites
- .NET 8.0 SDK or later
- Visual Studio 2022, VS Code, or any C# IDE
- Git (optional)

### Running Locally

1. **Clone or extract the project:**
   ```bash
   cd iccAssignment
   ```

2. **Restore dependencies:**
   ```bash
   dotnet restore
   ```

3. **Run the application:**
   ```bash
   dotnet run
   ```

4. **Open in browser:**
   - Navigate to `https://localhost:5001` or `http://localhost:5000`
   - The application will automatically open in your default browser

5. **For development with hot reload:**
   ```bash
   dotnet watch run
   ```

## ☁️ Deployment to Azure App Service

### Method 1: Visual Studio Publish

1. Right-click on project → **Publish**
2. Choose **Azure** → **Azure App Service (Windows/Linux)**
3. Sign in to your Azure account
4. Select or create new App Service instance
5. Configure settings:
   - **Name:** [groupcode][studentid] (e.g., d221234)
   - **Runtime Stack:** .NET 8 (LTS)
   - **Region:** Choose nearest region
   - **Pricing Tier:** F1 (Free) or B1 (Basic)
6. Click **Publish**

### Method 2: Azure CLI

1. **Login to Azure:**
   ```bash
   az login
   ```

2. **Create Resource Group:**
   ```bash
   az group create --name FeastFetchRG --location eastus
   ```

3. **Create App Service Plan:**
   ```bash
   az appservice plan create --name FeastFetchPlan --resource-group FeastFetchRG --sku F1
   ```

4. **Create Web App:**
   ```bash
   az webapp create --name [yourappname] --resource-group FeastFetchRG --plan FeastFetchPlan --runtime "DOTNET|8.0"
   ```

5. **Deploy the application:**
   ```bash
   dotnet publish -c Release
   cd bin/Release/net8.0/publish
   zip -r deploy.zip .
   az webapp deployment source config-zip --resource-group FeastFetchRG --name [yourappname] --src deploy.zip
   ```

### Method 3: GitHub Actions (CI/CD)

1. Create `.github/workflows/azure-deploy.yml`
2. Configure Azure credentials as GitHub secrets
3. Push to main branch triggers automatic deployment

### Method 4: VS Code with Azure Extension

1. Install **Azure App Service** extension
2. Click Azure icon in sidebar
3. Sign in to Azure
4. Right-click on subscription → **Create New Web App**
5. Follow prompts to deploy

## 🎨 Customization

### Updating Group Details

Edit `Pages/Index.cshtml` and replace placeholders:
- `[Your Group Code]` → Your actual group code (e.g., Group D)
- `[Your Name]` → Your full name
- `[Your ID]` → Your student ID (e.g., K22-1234)
- `[Member Names]` → Your team members' names and IDs

### Changing Colors

Edit `wwwroot/css/site.css` to customize the color scheme:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Adding More Pages

1. Create new `.cshtml` file in `Pages/` folder
2. Create corresponding `.cshtml.cs` file for the page model
3. Add navigation link to `Pages/Shared/_Layout.cshtml`

## 📸 Screenshots Required for Submission

1. **Azure App Service Configuration:** Dashboard showing app service details
2. **Deployment Success:** App Service showing deployed status
3. **Live Application:** Screenshots of all three pages running on Azure
4. **Custom Domain (if configured):** Showing your custom URL

## 📝 Assignment Deliverables

### 1. App Service Setup (15 points)
- ✅ Azure App Service created with correct naming convention
- ✅ Screenshot of configuration page
- ✅ 200-word explanation of choices (see EXPLANATION.md)

### 2. Web Application Development (15 points)
- ✅ Functional web application with all required pages
- ✅ Source code (this project)
- ✅ 200-word functionality description

### 3. Deployment (20 points)
- ✅ Live URL accessible
- ✅ Screenshots of successful deployment
- ✅ 200-word description of deployment challenges

## 🎓 App Functionality Description (200 words)

Feast Fetch is a presentation-focused web application built to demonstrate cloud computing concepts and Azure App Service capabilities. The application consists of three main pages, each serving a specific educational purpose.

The **Introduction page** provides a comprehensive overview of the Feast Fetch project, including its vision as a restaurant ordering system. It displays group information (project code, team members, leader) and a detailed project timeline spanning 14 weeks, from planning through deployment. Key features are showcased through visually appealing cards highlighting functionalities like real-time tracking, secure payments, and analytics.

The **Architecture page** presents a detailed three-tier cloud-native architecture, explaining the presentation layer (user interface), business logic layer (APIs and services), and data layer (databases and storage). It discusses architectural patterns including MVC, Repository Pattern, and Dependency Injection. A sample data flow demonstrates how an order moves through the system from user interaction to database storage.

The **Azure Services page** comprehensively documents all Azure services intended for the full implementation, including App Service, SQL Database, Blob Storage, API Management, Redis Cache, and Functions. Each service is explained with its purpose, key features, and benefits to the project.

The application employs responsive design principles, ensuring accessibility across all devices with modern UI components and smooth animations.

## 🏗️ Azure Services Used (For Full Project)

| Service | Purpose | Benefit |
|---------|---------|---------|
| **App Service** | Host web application | Auto-scaling, high availability |
| **SQL Database** | Store structured data | Managed, automatic backups |
| **Blob Storage** | Store images/files | Scalable object storage |
| **API Management** | API gateway | Rate limiting, security |
| **Redis Cache** | Caching layer | Improved performance |
| **Functions** | Serverless compute | Event-driven processing |
| **Application Insights** | Monitoring | Performance tracking |
| **Key Vault** | Secrets management | Secure credential storage |

## 📚 Learning Outcomes

Through this project, you will learn:
- ✅ Creating and configuring Azure App Service
- ✅ Building ASP.NET Core web applications
- ✅ Deploying applications to cloud
- ✅ Understanding cloud architecture patterns
- ✅ Working with Azure services
- ✅ Managing cloud resources

## 🤝 Support & Resources

- [ASP.NET Core Documentation](https://docs.microsoft.com/aspnet/core)
- [Azure App Service Documentation](https://docs.microsoft.com/azure/app-service)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3)
- [.NET 8.0 Release Notes](https://docs.microsoft.com/dotnet/core/whats-new/dotnet-8)

## 📄 License

This project is for educational purposes as part of a Cloud Computing course assignment.

## 👨‍💻 Author

**Group:** [Your Group Code]  
**Leader:** [Your Name] ([Your Student ID])  
**Course:** Cloud Computing  
**Institution:** [Your University]  
**Session:** Fall 2025

---

## 📌 Important Notes

- Replace all placeholder text with your actual information
- Keep the application live until grading is completed
- Ensure URL contains your group code and student ID
- Test all pages before submission
- Take clear screenshots for documentation
- Create a single PDF with all screenshots and descriptions
- Submit source code as a ZIP file

## ✅ Pre-Submission Checklist

- [ ] All placeholder text replaced with actual information
- [ ] Application tested locally
- [ ] Deployed to Azure App Service
- [ ] Custom naming convention followed (groupcode + ID)
- [ ] All three pages working correctly
- [ ] Screenshots taken (configuration, deployment, live pages)
- [ ] 200-word explanations written for all three deliverables
- [ ] Source code zipped
- [ ] PDF document created with all screenshots and explanations
- [ ] URLs documented
- [ ] Tested on multiple devices/browsers

---

**Last Updated:** October 2025  
**Version:** 1.0.0

