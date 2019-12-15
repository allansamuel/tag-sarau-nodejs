/* const { MongoClient } = require('mongodb')

async function main() {
    const connectionString = 'mongodb+srv://sarau-usr:PastelVegano2019@sarau-tecnologico-tmp-y1mnh.mongodb.net/test?retryWrites=true&w=majority'
    const client = await MongoClient.connect(connectionString)
    const eventosCollection = 'allan-eventos'
    const db = client.db('sarau')
    const collection = db.collection(eventosCollection)

    const gratuitos = await collection.find({
        isFree: true
    }).toArray()

    gratuitos.forEach(e => console.log(e.name))

    ------------------------------
    mesma coisa do codigo acima
        client.connect(() => {
         const db = client.db('sarau')
         db.collection(eventosCollection).find({
             isFree: true
         }).toArray((err, dados) => {
             dados.forEach(e => console.log(e.name))
         })
     })

    client.close()
}
main() */

const { MongoClient } = require('mongodb')

module.exports = {
    listarGratuitos: async function() {
        const connectionString = 'mongodb+srv://sarau-usr:PastelVegano2019@sarau-tecnologico-tmp-y1mnh.mongodb.net/test?retryWrites=true&w=majority'
        const client = await MongoClient.connect(connectionString)
        const db = client.db('sarau')
        const eventosCollection = 'allan-eventos'
        const collection = db.collection(eventosCollection)

        const gratuitos = await collection.find({
            isFree: true
        }).toArray()

        gratuitos.forEach(e => console.log(e.name))

        client.close()

        return gratuitos
    }
}