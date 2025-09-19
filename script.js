// Importa as funções do Firebase que vamos usar
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// Seu código de configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA11-7OTcu98lVU5FVMQc6Zcl4xRPj_JxU",
  authDomain: "quadro-de-avisos-comunitario.firebaseapp.com",
  projectId: "quadro-de-avisos-comunitario",
  storageBucket: "quadro-de-avisos-comunitario.firebasestorage.app",
  messagingSenderId: "327472001238",
  appId: "1:327472001238:web:1e4800c63ede3d85ea1977"
};

// Inicializa o app do Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const avisosRef = ref(database, 'avisos');

document.addEventListener('DOMContentLoaded', () => {
    const avisoInput = document.getElementById('aviso-input');
    const adicionarBtn = document.getElementById('adicionar-btn');
    const listaAvisos = document.getElementById('lista-avisos');

    // Escuta por mudanças no banco de dados em tempo real
    onValue(avisosRef, (snapshot) => {
        listaAvisos.innerHTML = ''; // Limpa a lista para evitar duplicatas
        if (snapshot.exists()) {
            const data = snapshot.val();
            const avisos = Object.entries(data);

            avisos.forEach(([key, value]) => {
                const novoAviso = criarAvisoItem(value.texto, key);
                listaAvisos.appendChild(novoAviso);
            });
        }
    });

    // Função para criar um novo item de aviso
    function criarAvisoItem(textoAviso, key) {
        const li = document.createElement('li');
        li.className = 'aviso-item';
        
        const span = document.createElement('span');
        span.textContent = textoAviso;
        li.appendChild(span);
        
        const removerBtn = document.createElement('button');
        removerBtn.className = 'remover-btn';
        removerBtn.textContent = 'Remover';
        removerBtn.addEventListener('click', () => {
            const itemRef = ref(database, `avisos/${key}`);
            remove(itemRef);
        });
        li.appendChild(removerBtn);

        return li;
    }

    // Função para adicionar um aviso ao banco de dados
    function adicionarAviso() {
        const texto = avisoInput.value.trim();
        if (texto !== '') {
            push(avisosRef, { texto: texto });
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