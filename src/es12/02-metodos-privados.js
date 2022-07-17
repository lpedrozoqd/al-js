class Message{
    show(val){
        console.log(val);
    }
}
const message = new Message();
message.show("Valor");

class Message2{
    #show(val){  //Con '#' se declara que el método es privado
        console.log(val);
    }
}

const message2 = new Message2();




