# University Management System API Documentation

Welcome to the documentation for the University Management System API. This system provides endpoints for managing students, faculty, admins, permissions, authentication, and academic-related entities such as semesters, faculties, and departments.

## Authentication

### Login

- `POST /auth/login`
  - Authenticate user with provided credentials.
  - Request Body: { "id": "user_id", "password": "password" }
  - Returns authentication token.

### Change Password

- `POST /auth/change-password`
  - Change user's password.
  - Request Body: { "oldPassword": "old_password", "newPassword": "new_password" }
  - Requires authentication.

### Refresh Token

- `POST /auth/refresh-token`
  - Refresh authentication token.
  - Requires authentication.

### Forgot Password

- `POST /auth/forgot-password`
  - Initiate password reset process by sending a reset link to user's email.
  - Request Body: { "email": "user_email" }

### Reset Password

- `POST /auth/reset-password`
  - Reset user's password after password reset link is clicked.
  - Request Body: { "resetToken": "reset_token", "newPassword": "new_password" }

## Users

### Create User

- `POST /users/create-student`
  - Create a new student user.
  - Requires admin privileges.
  - Request Body: Student data.

- `POST /users/create-faculty`
  - Create a new faculty user.
  - Requires admin privileges.
  - Request Body: Faculty data.

- `POST /users/create-admin`
  - Create a new admin user.
  - Requires admin privileges.
  - Request Body: Admin data.

### Manage User

- `GET /users/my-profile`
  - Retrieve current user's profile.
  - Requires authentication.

- `GET /users/:id`
  - Retrieve user by ID.
  - Requires admin privileges.

- `PATCH /users/:id`
  - Update user by ID.
  - Requires admin privileges.
  - Request Body: Updated user data.

- `DELETE /user/:id`
  - Delete user by ID.
  - Requires admin privileges.

- `POST /users/:id/force-logged-out`
  - Forcefully log out user by ID.
  - Requires admin privileges.

- `GET /users`
  - Retrieve list of users with pagination and filtering options.
  - Requires admin privileges.

### Manage User Permissions

- `GET /users/:id/available-permissions`
  - Retrieve available permissions for user.
  - Requires admin privileges.

- `GET /users/:id/assigned-permissions`
  - Retrieve assigned permissions for user.
  - Requires admin privileges.

- `POST /users/:id/assign-permissions`
  - Assign permissions to user.
  - Requires admin privileges.
  - Request Body: Permission IDs.

- `POST /users/:id/remove-permissions`
  - Remove permissions from user.
  - Requires admin privileges.
  - Request Body: Permission IDs.

## Students

- `GET /students`
  - Retrieve list of students with pagination and filtering options.
  - Requires admin privileges.

- `GET /students/:id`
  - Retrieve student by ID.
  - Requires admin privileges.

- `PATCH /students/:id`
  - Update student by ID.
  - Requires admin privileges.
  - Request Body: Updated student data.

- `DELETE /students/:id`
  - Delete student by ID.
  - Requires admin privileges.

## Faculty

- `GET /faculties`
  - Retrieve list of faculty members with pagination, sorting, and searching options.
  - Requires admin privileges.

- `GET /faculties/:id`
  - Retrieve faculty member by ID.
  - Requires admin privileges.

- `PATCH /faculties/:id`
  - Update faculty member by ID.
  - Requires admin privileges.
  - Request Body: Updated faculty data.

- `DELETE /faculties/:id`
  - Delete faculty member by ID.
  - Requires admin privileges.

## Admins

- `GET /admins`
  - Retrieve list of admin users with pagination.
  - Requires admin privileges.

- `GET /admins/:id`
  - Retrieve admin user by ID.
  - Requires admin privileges.

## Permissions

- `GET /permissions`
  - Retrieve list of permissions with pagination.
  - Requires admin privileges.

- `POST /permissions`
  - Create a new permission.
  - Requires admin privileges.
  - Request Body: Permission data.

- `GET /permissions/:id`
  - Retrieve permission by ID.
  - Requires admin privileges.

- `PATCH /permissions/:id`
  - Update permission by ID.
  - Requires admin privileges.
  - Request Body: Updated permission data.

- `DELETE /permissions/:id`
  - Delete permission by ID.
  - Requires admin privileges.

## Academic Semester

- `POST /academic-semesters/create-semester`
  - Create a new academic semester.
  - Requires admin privileges.
  - Request Body: Semester data.

- `GET /academic-semesters`
  - Retrieve list of academic semesters with pagination.
  - Requires admin privileges.

- `GET /academic-semesters/:id`
  - Retrieve academic semester by ID.
  - Requires admin privileges.

- `PATCH /academic-semesters/:id`
  - Update academic semester by ID.
  - Requires admin privileges.
  - Request Body: Updated semester data.

- `DELETE /academic-semesters/:id`
  - Delete academic semester by ID.
  - Requires admin privileges.

This concludes the API documentation for the University Management System. For further assistance, refer to the API endpoints listed above.
