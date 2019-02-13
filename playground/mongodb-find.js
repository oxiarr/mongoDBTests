// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find(
    //         {_id: new ObjectID("5c62b700529919c7b4397b4c")}
    //     ).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err)
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err)
    // })

    
    db.collection('Users').find({
        name: 'Eric'
    }).count().then((count) => {
        console.log(`Todos count with name Eric: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err)
    })
    // client.close();
});
