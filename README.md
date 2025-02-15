# Shortify

**Shortify** is a powerful URL shortening application that simplifies the process of generating short links for efficient sharing. With its user-friendly interface, you can easily create concise and shareable URLs in just a few clicks. Built using **React** for the front end and **Spring Boot** for the back end, Shortify provides secure authentication and a seamless user experience.

## 🚀 Features
- **URL Shortening**: Transform long URLs into short and manageable links.
- **Authentication**: Built with **Spring Security** and **JWT** for secure login and registration.
- **Efficient UI**: Modern, responsive design powered by **React**.
- **User Dashboard**: Track and manage your short URLs.
- **Secure**: Login and registration process are secured using JWT tokens.

## ⚙️ Technologies Used
- **Frontend**:  
    - **React** for building dynamic user interfaces.
    - **React Router** for navigation.
    - **TailwindCSS** for responsive, utility-first styling.
    - **React Hook Form** for form handling.

- **Backend**:  
    - **Spring Boot** for building the backend APIs.
    - **Spring Security** for authentication and authorization.
    - **JWT** for secure, token-based authentication.
    - **MySQL** for storing user data and generated URLs.
    - **REST API** for URL shortening and user management.

## 🛠️ Setup and Installation

### Prerequisites:
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or above) - For running the React application.
- **Java** (v11 or above) - For running the Spring Boot backend.
- **Maven** (for Spring Boot project dependencies).
- **Postman** or similar tools to test API endpoints.

### Backend (Spring Boot):

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the backend folder:
    ```bash
    cd backend
    ```

3. Build and run the Spring Boot application:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

4. The Spring Boot server should be running at `http://localhost:8080`.

### Frontend (React):

1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the React application:
    ```bash
    npm start
    ```

4. The React application should now be running at `http://localhost:5173`.



