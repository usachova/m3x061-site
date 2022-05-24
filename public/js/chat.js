const socket = io('/chat');

const message = document.getElementById('comment');
const messages = document.getElementById('comments');

function send() {
  socket.emit('message', message.value);
  message.value = '';
  message.focus();
}

socket.on('message', (message) => {
  messages.appendChild(createMessage(message));
});

function createMessage(message) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
}
