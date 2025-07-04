// Import required packages
const express = require('express');         // Express framework for building the app
const morgan = require('morgan');           // Morgan for HTTP request logging

// Create an instance of the Express app
const app = express();

// Apply middleware
app.use(morgan('dev'));                     // Logs incoming requests for debugging
app.use(express.json());                    // Parses incoming JSON request bodies

// 🛠 ADMIN ROUTES

// Register a new admin
app.post('/api/v1/admin/register', (req, res) => {
  try {
    // Placeholder: handle registration logic
    res.status(201).json({ status: 'success', data: 'Admin registered successfully' });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Admin login
app.post('/api/v1/admin/login', (req, res) => {
  try {
    // Placeholder: handle login logic
    res.status(200).json({ status: 'success', data: 'Admin logged in successfully' });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Get all registered admins
app.get('/api/v1/admin', (req, res) => {
  try {
    // Placeholder: fetch all admins
    res.status(200).json({ status: 'success', data: 'Fetched all admins' });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Get details of a specific admin by ID
app.get('/api/v1/admin/:id', (req, res) => {
  try {
    // Placeholder: fetch admin by ID
    res.status(200).json({ status: 'success', data: `Fetched admin with ID ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Update an admin's information
app.put('/api/v1/admin/:id', (req, res) => {
  try {
    // Placeholder: update admin by ID
    res.status(200).json({ status: 'success', data: `Updated admin with ID ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Delete an admin
app.delete('/api/v1/admin/:id', (req, res) => {
  try {
    // Placeholder: delete admin by ID
    res.status(200).json({ status: 'success', data: `Deleted admin with ID ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Suspend a teacher account
app.put('/api/v1/admin/suspend/teacher/:id', (req, res) => {
  try {
    // Placeholder: suspend teacher by ID
    res.status(200).json({ status: 'success', data: `Suspended teacher with ID ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Unsuspend a teacher account
app.put('/api/v1/admin/unsuspend/teacher/:id', (req, res) => {
  try {
    // Placeholder: unsuspend teacher by ID
    res.status(200).json({ status: 'success', data: `Unsuspended teacher with ID ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Withdraw (permanently remove) a teacher
app.put('/api/v1/admin/withdraw/teacher/:id', (req, res) => {
  try {
    // Placeholder: withdraw teacher by ID
    res.status(200).json({ status: 'success', data: `Withdrew teacher with ID ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Publish exam results
app.put('/api/v1/admin/publish/exam/:id', (req, res) => {
  try {
    // Placeholder: publish exam for ID
    res.status(200).json({ status: 'success', data: `Published exam results for ID ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Unpublish exam results
app.put('/api/v1/admin/unpublish/exam/:id', (req, res) => {
  try {
    // Placeholder: unpublish exam for ID
    res.status(200).json({ status: 'success', data: `Unpublished exam results for ID ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

// Export the Express app for use in server.js
module.exports = app;