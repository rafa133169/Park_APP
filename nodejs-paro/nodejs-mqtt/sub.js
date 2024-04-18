//sub.js
const mqtt = require('mqtt')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: '',
    database: 'sm52_arduino'
})

db.connect(() => {
    console.log('conexion exitosa')
})

const sub = mqtt.connect('mqtt://localhost:9000')

sub.on('connect', () => {
    sub.subscribe('topic test')
})

sub.on('message', (topic, message) => {
    message = message.toString()
    message = message.split(' ')
    message = parseInt(message[1])
    db.query(
        'insert into infrarrojos set ?',
        {data: message},
        (err, rows) => {
            if(!err) console.log('data saved!')
        }
    )
})