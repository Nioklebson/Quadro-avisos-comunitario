document.addEventListener('DOMContentLoaded', () => {
    const avisoInput = document.getElementById('aviso-input');
    const adicionarBtn = document.getElementById('adicionar-btn');
    const listaAvisos = document.getElementById('lista-avisos');

    // Função para criar um novo item de aviso
    function criarAvisoItem(textoAviso) {
        const li = document.createElement('li');
        li.className = 'aviso-item';

        const span = document.createElement('span');
        span.textContent = textoAviso;
        li.appendChild(span);

        const removerBtn = document.createElement('button');
        removerBtn.className = 'remover-btn';
        removerBtn.textContent = 'Remover';
        removerBtn.addEventListener('click', () => {
            listaAvisos.removeChild(li);
        });
        li.appendChild(removerBtn);

        return li;
    }

    // Função para adicionar um aviso à lista
    function adicionarAviso() {
        const texto = avisoInput.value.trim();
        if (texto !== '') {
            const novoAviso = criarAvisoItem(texto);
            listaAvisos.appendChild(novoAviso);
            avisoInput.value = ''; // Limpa o campo de entrada
        }
    }

    // Adiciona o evento de clique ao botão
    adicionarBtn.addEventListener('click', adicionarAviso);

    // Adiciona a funcionalidade de adicionar com a tecla Enter
    avisoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            adicionarAviso();
        }
    });
});