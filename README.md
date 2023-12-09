# imageSharingApp

This fullstack MERN (MongoDB, Express.js, React.js, Node.js) application allows users to upload, search, list, and delete images. The frontend and backend are organized into separate folders within the same repository, providing a clear separation of concerns. The frontend is built with React and TypeScript, utilizing React Query for efficient data fetching and caching.

## Features

- **Upload Image**: Users can upload images through the API endpoint, storing them on the local server.
- **Search Image**: Perform a search for images based on their names.
- **List All Images**: Retrieve a list of all uploaded images.
- **Delete Image**: Remove images from the server.

## Endpoint

```
Upload Image - POST - /api/files/upload
Search Image - GET - /api/files/search + search query
List All Images - GET - /api/files/
Delete Image - DELETE - /api/files/:imageId

```

## Project Duration

This project was completed in approximately 15 hours.

## Future Improvements

Given more time, additional features could be implemented:

- **Download Feature**: Enhance user experience by introducing a download functionality, enabling users to easily download the uploaded images.
- **Improve Scalability and Availability**: Elevate the application's scalability and ensure high availability by integrating a blob storage service such as Amazon S3. This approach facilitates distributed file storage, enhancing overall system performance.
- **Protect the enpoints**: Implement robust security measures by incorporating a rate limiter for the server. This safeguard helps protect the application against potential Distributed Denial of Service (DDoS) attacks and prevents unauthorized web scraping attempts, ensuring the stability and reliability of the system.

## Folder Structure

- **frontend**: Contains the React.js frontend built with TypeScript.
- **backend**: Houses the Node.js backend server with Express.js.
- **images**: A separate folder for storing images uploaded through the application.

## How to Run

0. **Clone the repo**

```bash
git clone git@github.com:jozzbruer/imageSharingApp.git
```

1. **Navigate to Backend Folder:**

   ```bash
   cd backend
   ```

2. **Install Backend Dependencies:**

   ```bash
   npm install
   ```

3. **Start Backend Server:**

   ```bash
   npm run start
   ```

4. **Navigate to Frontend Folder:**

   ```bash
   cd ../frontend
   ```

5. **Install Frontend Dependencies:**

   ```bash
   npm install
   ```

6. **Start Frontend Application:**

   ```bash
   npm start
   ```

7. **Access the Application:**

   Open your browser and go to [http://localhost:3000](http://localhost:3000) to use the application.

## Technologies Used

- Frontend: React, TypeScript, React Query
- Backend: Node.js, Express.js, MongoDB
- Storage: Local server for image storage

Feel free to explore this project! If you have any questions or feedback, please reach out.
