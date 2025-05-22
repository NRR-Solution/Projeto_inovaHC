# Projeto_inovaHC


### Site com objetivo de reduzir o absenteísmo de 20% para 10% 


## 🗂️ Estrutura do Projeto


 InovaHC

 
├── 📂 html → Contém os arquivos HTML (páginas, integrantes e imagens do site).


├── 📂 css → Folhas de estilo (arquivos .css).


└── 📂 script → Códigos JavaScript (arquivos .js).






<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InovaHC - Redução de Absenteísmo</title>
    <meta name="description" content="Soluções inteligentes para reduzir o absenteísmo e melhorar a produtividade">
    <meta name="keywords" content="absenteísmo, RH, gestão de pessoas, produtividade, bem-estar corporativo">
    <link rel="shortcut icon" href="https://img.ge/i/kRUvV92.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    
</head>


<body>
    <!-- Header -->
  <header>
        <div class="container">
            <nav>
                <a href="#" class="logo">
                    <img src="https://img.ge/i/nZuz460.png" alt="InovaHC Logo">
                    InovaHC
                </a>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#solutions">Solução</a></li>
                    <li><a href="#how-it-works">Como Funciona</a></li>
                    <li><a href="#strategies">Estratégias</a></li>
                    <li><a href="#phases">Fases</a></li>
                    <li><a href="#team">Integrantes</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li class="auth-buttons">
                        <a href="#" class="auth-btn login-btn" id="loginBtn">Login</a>
                        <a href="#" class="auth-btn register-btn" id="registerBtn">Cadastre-se</a>
                    </li>
                </ul>
                <div>
                    <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
                </div>
            </nav>
        </div>
    </header>



 <div class="modal" id="loginModal">
        <div class="modal-content">
            <span class="close-btn" id="closeLogin">&times;</span>
            <h2>Login</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label for="loginEmail">Email</label>
                    <input type="email" id="loginEmail" required>
                    <div class="error-message" id="loginEmailError">Por favor, insira um email válido</div>
                </div>
                <div class="form-group">
                    <label for="loginPassword">Senha</label>
                    <input type="password" id="loginPassword" required>
                    <div class="error-message" id="loginPasswordError">Por favor, insira sua senha</div>
                </div>
                <button type="submit" class="submit-btn">Entrar</button>
                <div class="switch-form">Não tem uma conta? <a id="switchToRegister">Cadastre-se</a></div>
            </form>
        </div>
    </div>



# Integrantes

Nickolas Davi     RM: 564105


Rafael Carvalho   Rm: 563413


Ruan Luca         Rm: 562218
