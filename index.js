//Hello add

//create a function generator message radonm
function randomMessage(){

    //create a table content message
        var message = ['Bonjour', 'Hello', 'Mbote', 'Salut', 'Djambo'];
    
    //create a variable content message random
        var indexMessage = Math.floor(Math.random() * message.length);
    
        return message[indexMessage]
}

//call a function randomMessage
console.log(randomMessage());