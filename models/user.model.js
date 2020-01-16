const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        //unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    email:  {
        type: String,
        //unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
    created_at: {
        type: String,
        required: true,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
