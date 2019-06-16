


var messagesRef = firebase.database().ref();

document.getElementById("trainInfoBtn").addEventListener("click", submitForm);

function submitForm(event) {

    event.preventDefault();
    var name = getInputs('name');
    var train = getInputs('train');
    var time = getInputs('time');

    console.log(123);
    console.log(name);

    saveMessage(name, train, time);

}

function getInputs(id) {

    return document.getElementById(id).value;

}

function saveMessage(name, train, time) {

    var newMessageRef = messagesRef.push();

    newMessageRef.set({
        name: name,
        train: train,
        time: time
    })

}





