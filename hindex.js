
document.addEventListener("DOMContentLoaded", () => {

    const feedback = document.getElementById("feedback");

    const sessionInput = document.getElementById("sessionInput");
    const salvarSessionBtn = document.getElementById("salvarSession");
    const carregarSessionBtn = document.getElementById("carregarSession");

    salvarSessionBtn.addEventListener("click", () => {
        const dado = sessionInput.value;
        if (dado) {
            sessionStorage.setItem("meuDadoSessao", dado);
            feedback.textContent = `Dado "${dado}" salvo no sessionStorage.`;
            sessionInput.value = "";
        } else {
            feedback.textContent = "Digite algo para salvar na sessão.";
        }
    });

    carregarSessionBtn.addEventListener("click", () => {
        const dadoSalvo = sessionStorage.getItem("meuDadoSessao");
        if (dadoSalvo) {
            feedback.textContent = `Dado carregado do sessionStorage: "${dadoSalvo}".`;
        } else {
            feedback.textContent = "Nenhum dado encontrado no sessionStorage.";
        }
    });

    const cookieInput = document.getElementById("cookieInput");
    const criarCookieBtn = document.getElementById("criarCookie");
    const lerCookieBtn = document.getElementById("lerCookie");
    const apagarCookieBtn = document.getElementById("apagarCookie");

    criarCookieBtn.addEventListener("click", () => {
        const dado = cookieInput.value;
        if (dado) {
            setCookie("meuCookie", dado, 1);
            feedback.textContent = `Cookie "meuCookie" salvo com o valor "${dado}".`;
            cookieInput.value = "";
        } else {
            feedback.textContent = "Digite algo para salvar no cookie.";
        }
    });

    lerCookieBtn.addEventListener("click", () => {
        const valorCookie = getCookie("meuCookie");
        if (valorCookie) {
            feedback.textContent = `Valor lido do "meuCookie": "${valorCookie}".`;
        } else {
            feedback.textContent = `Cookie "meuCookie" não encontrado.`;
        }
    });

    apagarCookieBtn.addEventListener("click", () => {
        setCookie("meuCookie", "", -1);
        feedback.textContent = `Cookie "meuCookie" apagado.`;
    });

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            feedback.textContent = "Erro: Usuário e senha não podem estar vazios.";
            return;
        }

        if (password.length < 8) {
            feedback.textContent = "Erro: A senha deve ter pelo menos 8 caracteres.";
            return;
        }

        feedback.textContent = "Formulário validado com sucesso! (Enviando para o 'servidor'...)";
    });

    function setCookie(nome, valor, diasParaExpirar) {
        const d = new Date();
        d.setTime(d.getTime() + (diasParaExpirar * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = `${nome}=${valor};${expires};path=/`;
    }

    function getCookie(nome) {
        let name = nome + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
});