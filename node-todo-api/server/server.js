var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var newTodo = new Todo({
//   text: 'Be Awesome',
//   completed: true,
//   completedAt: 485395200
// });
//
// newTodo.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log('unable to save todo');
// });

var newUser = new User({
  email: 'someemail@gmail.com'
});

newUser.save().then((doc) => {
  console.log(doc);
}, (e) => {
  console.log('unable to save user');
});
