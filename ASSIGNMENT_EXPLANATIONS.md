# Assignment Explanations - Feast Fetch

This document contains template 200-word explanations for your assignment deliverables. Customize these based on your actual choices and experiences.

---

## 1. App Service Configuration Explanation (200 words)

For the Feast Fetch restaurant ordering system, I selected specific Azure App Service configurations to optimize performance, cost, and reliability.

**Runtime Stack:** I chose **.NET 8.0 (LTS)** as it is the latest long-term support version of .NET, offering improved performance, enhanced security features, and modern development capabilities. This ensures our application benefits from the latest framework improvements including minimal APIs, better async performance, and native JSON serialization improvements. The LTS designation guarantees three years of support, providing stability for our production environment.

**Pricing Tier:** I selected the **B1 (Basic)** tier for development and testing purposes [or **F1 (Free)** tier for assignment demonstration]. The B1 tier provides 1.75 GB RAM and 100 total ACU (Azure Compute Units), sufficient for moderate traffic and development scenarios. It includes custom domain support and manual scaling capabilities. For production deployment, I would recommend upgrading to S1 (Standard) tier for auto-scaling and deployment slots. The Basic tier balances cost-effectiveness with adequate resources for our current requirements.

**Region:** I chose **[Your Selected Region - e.g., East US]** based on geographical proximity to our primary user base, ensuring lowest latency and best performance. This region also offers competitive pricing and houses all necessary Azure services for seamless integration.

---

## 2. Web Application Functionality Description (200 words)

Feast Fetch is a presentation-focused web application built to demonstrate cloud computing concepts and Azure App Service deployment capabilities. The application consists of three comprehensive pages, each serving a specific educational and informational purpose.

The **Introduction page** provides a detailed overview of the Feast Fetch restaurant ordering system concept, presenting the vision of a cloud-native food ordering platform. It showcases complete group information including project code, team member names, leadership roles, and student IDs in a professionally formatted table. A visual timeline illustrates the 14-week project plan, covering planning and design, Azure infrastructure setup, backend and frontend development, testing, deployment, and final documentation. Six key features are highlighted through interactive cards: easy ordering interface, real-time delivery tracking, secure payment processing, analytics dashboard, mobile responsiveness, and high availability through Azure infrastructure.

The **Architecture page** presents comprehensive system design documentation, explaining the three-tier architecture comprising presentation, business logic, and data layers. It details architectural patterns including MVC, Repository Pattern, Dependency Injection, and RESTful API design. A step-by-step data flow example demonstrates order processing from user interaction through API validation to database persistence.

The **Azure Services page** extensively documents seven major Azure services and six additional services planned for full implementation, explaining each service's purpose, key features, and benefits to the project, along with cost optimization strategies.

---

## 3. Deployment Challenges Description (200 words)

Deploying Feast Fetch to Azure App Service presented several learning opportunities and challenges that enhanced my understanding of cloud deployment processes.

**Challenge 1 - Initial Configuration:** The first challenge involved correctly configuring the Azure App Service instance with the appropriate naming convention (groupcode + student ID). Understanding the Azure portal's interface and navigating through various configuration options required careful attention. I resolved this by following Microsoft's official documentation and ensuring all settings matched the .NET 8.0 runtime requirements before deployment.

**Challenge 2 - Build and Publish Process:** Generating the correct publish profile and ensuring all dependencies were properly included in the deployment package initially caused errors. Missing static files (CSS, images) and incorrect relative paths led to broken styling. I resolved this by using `dotnet publish -c Release` command to create a production-ready build, ensuring all wwwroot contents were included, and verifying the output before deploying.

**Challenge 3 - HTTPS Configuration:** The application initially showed SSL/TLS warnings and mixed content errors. Azure App Service provides automatic HTTPS, but I needed to configure the application to properly handle HTTPS redirection and ensure all resource references used relative paths rather than absolute HTTP URLs.

**Challenge 4 - Deployment Method Selection:** Choosing between Visual Studio publish, Azure CLI, and GitHub Actions required understanding trade-offs. I ultimately chose [your method] because [your reason], which provided the most straightforward deployment process for this assignment while allowing me to learn the fundamentals of Azure deployment.

---

## Alternative Challenge Description (if deployment was smooth):

Deploying Feast Fetch to Azure App Service proved to be a smooth yet educational experience that deepened my understanding of cloud deployment fundamentals.

**Initial Setup:** The first step involved creating an Azure account and setting up the App Service instance with proper naming convention (groupcode + student ID). Azure's intuitive portal made resource creation straightforward. I carefully selected the .NET 8.0 runtime stack and appropriate region for optimal performance. The free tier (F1) provided adequate resources for this demonstration project.

**Build Process:** Preparing the application for deployment required understanding the ASP.NET Core build pipeline. Using `dotnet publish -c Release` command, I generated an optimized production build with all necessary dependencies and static files. Ensuring proper project structure with wwwroot folder containing CSS and other assets was crucial for maintaining application styling post-deployment.

**Deployment Execution:** I chose Visual Studio's integrated publish feature for deployment due to its simplicity and automatic configuration management. The publish profile generated all necessary settings, and the deployment process completed within minutes. Azure automatically handled SSL certificate provisioning, providing HTTPS support immediately.

**Testing and Verification:** After deployment, I thoroughly tested all three pages across different devices and browsers to ensure responsive design worked correctly. The application loaded quickly with proper styling and navigation functionality. Azure's built-in monitoring tools helped verify successful deployment and track initial access patterns.

**Key Learning:** This experience taught me the efficiency of Platform-as-a-Service (PaaS) offerings, eliminating server management overhead while maintaining professional-grade hosting capabilities.

---

## Tips for Customization:

### For Runtime Stack Explanation:
- Mention specific .NET 8.0 features you found useful
- Explain why latest LTS version matters for cloud applications
- Reference performance improvements over previous versions

### For Pricing Tier Explanation:
- Justify your choice based on project requirements
- Explain scalability considerations
- Mention cost-benefit analysis for educational vs. production use

### For Region Explanation:
- Consider proximity to users
- Mention latency and performance factors
- Note service availability in chosen region

### For Deployment Challenges:
- Be honest about actual challenges faced
- Show problem-solving skills
- Demonstrate learning from issues
- If no challenges, focus on learning aspects and best practices followed

### For Functionality Description:
- Highlight all three required pages
- Emphasize cloud-native aspects
- Mention responsive design
- Showcase educational value

---

## Word Count Tips:

Each explanation should be **exactly or close to 200 words**. Use these strategies:

- **If too short:** Add more technical details, expand on benefits, include specific examples
- **If too long:** Remove redundant phrases, use more concise language, eliminate unnecessary adjectives

---

## Submission Reminder:

✅ Take screenshots of:
1. Azure App Service configuration page
2. Deployment success in Azure portal
3. Live application running (all three pages)
4. Custom domain/URL in browser

✅ Create PDF document with:
1. All screenshots labeled clearly
2. All three 200-word explanations
3. Live URL prominently displayed
4. Your group details and student information

✅ Create ZIP file containing:
1. Complete source code
2. All project files
3. README.md
4. This explanations document (optional)

---

**Good luck with your submission! 🚀**

