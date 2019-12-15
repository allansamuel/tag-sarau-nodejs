/* 
const MongoClient = require('mongodb').MongoClient 
igual ao inferior
*/
const { MongoClient } = require('mongodb')
const axios = require('axios')

const connectionString = 'mongodb+srv://sarau-usr:PastelVegano2019@sarau-tecnologico-tmp-y1mnh.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(connectionString)

const eventosCollection = 'allan-eventos'


//pegar dados da API de eventos
const localidade = process.argv.slice(2)[0]
console.log(localidade)

const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=${localidade}&location.within=5km&token=I6KD6XKCCQRDBM7NZL33`
axios.get(url).then(response => {

    client.connect(() => {
        const db = client.db('sarau')
        response.data.events.forEach(e =>
            /* console.log(e.name.text) */
            db.collection(eventosCollection).insertOne({
                name: e.name.text,
                summary: e.summary.text,
                isFree: e.is_free,
                horarioInicio: e.start.local,
                horarioFim: e.end.local
            })
        )
    })


})


/* client.connect(() => {
    const db = client.db('sarau')

    db.collection(eventosCollection).insertOne({
        name: 'Sarau Tecnolótico TAG #01',
        subjecct: 'Node.js',
        tags: [
            'desenvolvimento',
            'node',
            'web',
            'tech'
        ]
    })
    db.collection(eventosCollection).find({
        name: 'Sarau Tecnológico TAG #01'
    }).toArray((err, dados) => {
        console.log('dados')
    })
}) */

client.close()