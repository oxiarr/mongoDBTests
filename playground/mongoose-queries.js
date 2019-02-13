const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/config/mongoose');
const {User} = require('./../server/models/user');

let id = '5c642cd6529919c7b43a0b53';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found')
//     }
//     console.log('Todo By Id', todo)
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found')
    }
    console.log('User', user)
}).catch((e) => console.log(e))