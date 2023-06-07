# Barbeer Backend

Barbeer Backend is the server-side component of the Barbeer application, built using the MERN (MongoDB, Express.js, React.js, Node.js) tech stack. It serves as the backend API for managing barbershops, appointments, and customer data.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling for Node.js
- **JWT**: JSON Web Token for user authentication and authorization
- **MVC Architecture**: Model-View-Controller architectural pattern for organized code structure
- **Bcrypt**: Library for hashing and salting passwords
- **Multer**: Middleware for handling file uploads
- **Cloudinary**: Cloud-based image and video management service
- **Heroku**: Cloud platform for deploying and hosting the application

## Features

- **Authentication and Authorization**: Secure user authentication using JWT tokens and role-based authorization.
- **Barbershop Management**: Create, update, and delete barbershops with relevant information.
- **Appointment Scheduling**: Allow customers to book appointments with their preferred barbershops and barbers.
- **Customer Management**: Manage customer details, including profiles, appointments, and preferences.
- **Reviews and Ratings**: Enable customers to leave reviews and ratings for barbershops and barbers.
- **Image Uploads**: Support uploading and storage of images for barbershops, barbers, and customer avatars.
- **Search Functionality**: Implement search functionality for finding barbershops based on location or name.
- **Error Handling**: Implement comprehensive error handling and validation for a smooth user experience.
- **API Documentation**: Provide detailed API documentation for developers to understand and utilize the backend API.

## Installation

To set up the Barbeer Backend on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/AkshatGadhwal/Barbeer-Backend.git`
2. Navigate to the project directory: `cd Barbeer-Backend`
3. Install dependencies: `npm install`
4. Set up the MongoDB database:
   - Install MongoDB if not already installed.
   - Configure the database connection in `config/database.js`.
5. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the necessary environment variables (e.g., database URL, JWT secret key).
6. Run the application: `npm start`
7. The backend server will start running on `http://localhost:5000`.

## API Documentation

The API endpoints and their usage are documented in the [API Documentation](API_DOCS.md) file. Please refer to this documentation for more details on how to interact with the backend API.

## Contributing

Contributions to the Barbeer Backend are welcome. If you encounter any issues, have suggestions for improvements, or would like to contribute new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

We would like to acknowledge the developers and contributors of the libraries and resources used in building the Barbeer Backend. Their contributions have been instrumental in creating a robust and efficient backend API for the Barbeer application.

Start managing barbershops, appointments, and customer data with ease using Barbeer Backend!
