var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title must not be blank'],
		minlength: [5, 'Title must be atleast 5 characters.']
	},
	description: {
		type: String,
		required: [true, 'Description must not be blank'],
		minlength: [10, 'Description must be atleast 10 characters.']
	},
	status: {
		type: Boolean,
		default: false
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId, ref: 'User'
	}
}, {timestamps: true})

var Task = mongoose.model('Task', TaskSchema);
