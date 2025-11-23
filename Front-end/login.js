function handleLogin() {
    const username = document.getElementById('username').value;
    const statusMessage = document.getElementById('status-message');
    if (username && username.length > 3) {
        statusMessage.style.color = '#00ff00';
        statusMessage.innerHTML = `[CONFIRMADO] Acesso liberado para: ${username}... Iniciando sessão...`;
    } else {
        statusMessage.style.color = '#ff4444';
        statusMessage.innerHTML = `[FALHA] Credenciais não reconhecidas. Tente novamente.`;
    }
}