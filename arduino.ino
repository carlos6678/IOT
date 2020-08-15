#include <Servo.h>

Servo meuservo;

void setup(){
    Serial.begin(9600);
    meuservo.attach(8);
    
}

void loop(){
  char dado = Serial.read();
  
  if(dado == 'a'){
    meuservo.write(180);
  }
  if(dado == 'b'){
    meuservo.write(0);
  }
}