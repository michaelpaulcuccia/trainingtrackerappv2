const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trainingSchema = new Schema({
    username: { type: String, required: true },
     type: String,
    instructional: {
        type: Boolean,
        default: false
    },
    openmat: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: String,
        required: true,
        default: Date.now
    },
    date: { type: Date, required: true },
});

const Training = mongoose.model('Training', trainingSchema);

module.exports = Training;