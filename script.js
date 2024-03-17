const socket = io(); // Assuming you're using Socket.io for real-time communication

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  if (message.trim() !== '') {
    socket.emit('chat message', message);
    messageInput.value = '';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.querySelector('button');
  sendButton.addEventListener('click', sendMessage);
});

socket.on('chat message', function(msg) {
  const chatWindow = document.getElementById('chat-window');
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom of the chat window
});
