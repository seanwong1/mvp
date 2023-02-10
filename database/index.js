const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/superlooper');

let patternSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  user_id: Number,
  instruments: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'instrument'}
  ]
});

let userSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  patterns: []
});

let instrumentSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String
})

let pattern = mongoose.model('pattern', patternSchema);
let user = mongoose.model('user', userSchema);
let instrument = mongoose.model('instrument', instrumentSchema);

// TODO: add functionality
// let save = () => {};
// let get = () => {};

// module.exports.save = save;
// module.exports.get = get;