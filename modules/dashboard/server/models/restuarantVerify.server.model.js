'use strict';

/**
 * Module dependencies
 */
 var mongoose = require('mongoose');

 var Schema = mongoose.Schema;





/**
 * A Validation function for local strategy properties

/**
 * User Schema
 */
 var RestuarantVerify = new Schema({

  Address: {
    type: String,
    trim: true,
    default: '',
    // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
  },
  Name: {
    type: String,
    trim: true
  }, 
  State: {
    type: String,
    trim: true
  }, 

  City: {
    type: String,
    trim: true
  },

   Verified: {
    type: Boolean,
    default:false
  },


  PostalCode:{
    type:Number,
    default:null
  },
  Contact:{

   Email: {
    type: String,
    index: {
      unique: true,
      sparse: true // For this to work on a previously indexed field, the index must be dropped & the application restarted.
    },
    lowercase: true,
    trim: true,
    default: '',
  //  validate: [validateLocalStrategyEmail, 'Please fill a valid email address']
},
Name: {
  type: String,
  
    // required: 'Please fill in a username',
    // validate: [validateUsername, 'Please enter a valid username: 3+ characters long, non restricted word, characters "_-.", no consecutive dots, does not begin or end with dots, letters a-z and numbers 0-9.'],
    lowercase: true,
    trim: true
  },
  PhoneNumber: {
    type: Number,
    default: null  }
  },

  
  
  
  Created: {
    type: Date,
    default: Date.now
  },
  userID:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
  /* For reset password */

});

/**
 * Hook a pre save method to hash the password
 */


 mongoose.model('RestuarantVerify', RestuarantVerify);