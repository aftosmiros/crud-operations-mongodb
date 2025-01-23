# MongoDB CRUD Application

A simple, user-friendly web application for performing CRUD (Create, Read, Update, Delete) operations on user data using **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates basic CRUD functionality along with **search** and **sorting** features for enhanced usability.

---

## Features

### Core Features
- **Add User**: Create a new user by providing their name, age, and email.
- **Edit User**: Update an existing user's details.
- **Delete User**: Remove a user from the database.
- **List Users**: View all users in a tabular format.

### Additional Features
- **Search Users**: Quickly find users by name using a case-insensitive search.
- **Sort Users**: Sort users by name, age, or email by clicking the column headers.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript templates), HTML, CSS
- **Database**: MongoDB
- **CSS Framework**: Custom styling with responsive design

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repository/mongodb-crud-app.git
   cd mongodb-crud-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up MongoDB**
   - Ensure MongoDB is installed and running on your system.
   - Update the database connection string in `server.js` if necessary:
     ```javascript
     mongoose.connect('mongodb://127.0.0.1:27017/assignment3');
     ```

4. **Start the Server**
   ```bash
   node server.js
   ```

5. **Access the Application**
   - Open your browser and navigate to:
     ```
     http://localhost:3000
     ```

---

## Usage

### Adding a User
1. Click on the "Add User" link in the navigation bar.
2. Fill out the form with the user's details and click "Add User."

### Editing a User
1. Click the "Edit" button next to a user in the table.
2. Update the user's information and click "Update User."

### Deleting a User
1. Click the "Delete" button next to a user in the table.
2. Confirm the deletion.

### Searching Users
1. Enter a name (or part of a name) in the search bar and click "Search."
2. The table will display matching users.

### Sorting Users
1. Click on the column headers (`Name`, `Age`, or `Email`) to sort the users by that field.
2. Sorting is performed in ascending order.

---

## Folder Structure

```
mongodb-crud-app/
├── public/
│   └── css/
│       └── style.css      # Custom CSS for styling
├── views/
│   ├── index.ejs          # Main page showing the user list
│   ├── form.ejs           # Form for adding/editing users
├── server.js              # Main application logic
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

---

## Future Enhancements
- **Pagination**: Break large datasets into pages for easier navigation.
- **Charts**: Visualize user data using graphs.
- **User Authentication**: Add login/logout functionality for user management.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
