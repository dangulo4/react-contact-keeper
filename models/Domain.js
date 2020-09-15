const mongoose = require('mongoose');

const DomainSchema = mongoose.Schema({
  domain: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  emails: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('domain', DomainSchema);
