const app =  require('express')()
const path = require('path')
const rabbitClient = require('./service/rabbit')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'pages','index.html'))
})

app.post('/enviar',async function(req,res){
    const channel = await rabbitClient.getChannel()
    await channel.sendToQueue('sua fila',{id:req.body.id})
    res.send(req.body)
})

app.listen(3000,function(){
    console.log('servidor iniciado')
})