async function sendMessage() {
  const input = document.getElementById('userInput');
  const chat = document.getElementById('chat');
  const userText = input.value;
  chat.innerHTML += `<div class="bubble">🧑‍💻 ${userText}</div>`;
  input.value = '';

  const response = await fetch('https://huggingface-api-proxy.vercel.app/api/mistral', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: userText })
  });

  const data = await response.json();
  const reply = data.text || 'No response';
  chat.innerHTML += `<div class="bubble">🤖 ${reply}</div>`;
}
