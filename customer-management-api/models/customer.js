const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  mobileNumber: String,
  city: String,
  // Add other fields as needed
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
