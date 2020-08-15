# IOT
Projeto simples de IOT

# Tecnologias ultilizadas
- **NodeJS**
- **RabbitMQ**
- **Python**
- **Arduino**

# Como Testar 
- Na pasta **backend** user ´´´npm install´´´ depois no codigo da pasta **backend** deixei o codigo comentado para que você possa preencher com suas credencias
- instale a biblioteca **pika** do python, para isso abra o terminal e rode o comando ´´´pip install pika´´´
- Na pasta **consumer**deixei comentado o codigo para que você preenchar com suas credenciais
- Depois existe um arquivo na raiz do projeto chamado arduino.ino, abra o com a IDE do arduino e compile para a placa
- Ainda na pasta **consumer** digite no terminal ´´´python consumer.py´´´
- Agora e só testar

# Lembrete
Quando for compilar o codigo para o arduino, não se esqueça de fechar a IDE dele. Pois o arquivo **consumer.py** precisa que a porta do arduino esteja liberada para uso ja que neste projeto ultilizaremos a porta **SERIAL**
