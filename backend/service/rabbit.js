const RabbitClient = require('rabbit-client')

const rabbitClient = new RabbitClient('A url de conexao com seu servidor',{json:true,appName:"testeArduino"})

rabbitClient.getConnection()

module.exports = rabbitClient