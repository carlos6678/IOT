import serial
import pika
import json

credentials = pika.PlainCredentials('username','password')
conexao = pika.BlockingConnection(pika.ConnectionParameters('dominio do seu servidor',5672,'virtualhostName(opcional)',credentials))

channel = conexao.channel()

channel.queue_declare(queue='sua fila',durable=True)

ser = serial.Serial('COM3(ou qualquer outra porta USB que seu arduino estiver plugado)',9600) 

def main(ch,method,properties,body):
	# aqui sera enviado a mensagem para porta serial do arduino
    data = json.loads(body.decode())

    encode = data['id']

    ser.write(str.encode(encode))
    

channel.basic_consume(queue='sua fila',auto_ack=True,on_message_callback=main)

channel.start_consuming()