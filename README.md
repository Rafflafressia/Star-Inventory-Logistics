# Star-Inventory-Logistics
Managing your wholesale inventory

Product Management System
Overview
Objective: To understand the design and functionality of a Product Management System.
Key Features: Category and Product Management, User Authentication, Role-based Access Control.
Agenda
Introduction to Product Management System
System Architecture
Key Features
Demo
Q&A
Introduction
Product Management System: A web application for managing products, users, and sales.
Features: Categories with products, user authentication, role-based access control.
System Architecture
Frontend: HTML, CSS, JavaScript using Bootstrap and .
Backend: Node.js with Express.js (for RESTful APIs).
Database: MySQL (for storing categories, products, users).
Authentication: secure authentication.
Key Features
Category and Products:

Categories with a list of products.
Products have attributes like name, price, description.

User Authentication:

Login page for users to enter username and password.
Authentication: Password-based authentication. Passwords are the most common methods of authentication.

Role-based Access Control:

Managers and Users have different access levels.
Managers can create users, assign products.
Users can view products, manage sales.

Demo
Login Page:

Show the login page.
Enter credentials to login as a manager or user.
Manager Page:

Show the manager dashboard.
Create a new user, assign products.

User Page:

Show the user dashboard.
View assigned products, manage sales.
Conclusion
Recap of key features and functionality.
Importance of role-based access control in system security.


# Product Management System

This project is a Product Management System that allows managers to manage products and users, and users to view and sell products.

## Features

1. **Category and Products:** The system allows the creation of categories, each containing a list of products.

2. **Login Page:** Users can log in with their username and password.

3. **Role-based Access:** Depending on the user's role (manager or user), they are directed to the appropriate page:
   - Managers are directed to the manager page, where they can create users and manage products.
   - Users are directed to the user page, where they can view products and manage their sales.

4. **User Creation:** Only managers have the ability to create new users.

5. **Product Assignment:** Managers can assign products to users for them to sell.



