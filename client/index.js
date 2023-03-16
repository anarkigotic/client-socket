let ws;
let statusElement = document.querySelector('#estado');
let messageListElement = document.querySelector('#messageList');
let connected = false;
let hasMessages = false;
let asia = [];

function setStatus(status) {
    statusElement.textContent = status;
}

function addMessageToList(message) {
    let result = '';
    if (hasMessages) {
        result = `${messageListElement.innerHTML} <br />`;
    }
    hasMessages = true;
    messageListElement.innerHTML = `${result}${message}`;
}

function initWebSocketsEvents() {
    ws.onopen = function () {
        setStatus('Connection is opened (connected...)');
        connected = true;
    };

    ws.onmessage = function (evt) {
        let message = evt.data;
        addMessageToList(message);
        asia.push(Number(message))
    };

    ws.onclose = function () {
        connected = false;
        setStatus('Connection is closed...');
    };

    ws.onerror = function (error) {
        console.error(error);
        setStatus('Error occurred, check the console!');
    };
}



function conectarSocket(url) {
    if (url) {
        setStatus('Connecting...');
        ws = new WebSocket(url);
        initWebSocketsEvents();
    }
}


function sendMessage(message, service) {
    if (connected) {
        console.log({ action: service, "data": message })
        ws.send(JSON.stringify({ action: service, "data": message }));

    }
}

