#  PTZ Overlay Control (React)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vitesse&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)

Projeto React para controle de câmeras PTZ (Pan-Tilt-Zoom), com funcionalidade de **overlay** exibindo informações em tempo real sobre o stream.

---

##  Funcionalidades

- Exibição de **overlay de informações** sobre a câmera em cima do vídeo.
- Controles básicos de **Pan**, **Tilt** e **Zoom**.
- Interface responsiva e simples, ideal para integração com aplicações de monitoramento.

---

##  Tecnologias Utilizadas

- **React.js**
- **JavaScript (ES6+)**
- **Vite** (build e dev server)
- **HTML** e **CSS** (estilização)
- **npm** / **package-lock.json** para gerenciamento de dependências

---

##  Estrutura do Projeto

```plaintext
overlay-ptz-react/
├── public/
│   └── index.html              # HTML de entrada
├── src/
│   ├── App.jsx                 # Componente principal React
│   ├── components/             # Componentes reutilizáveis (overlay, controles, etc.)
│   ├── styles/ (opcional)      # Estilos CSS separados
│   └── index.jsx               # Arquivo de bootstrap do React
├── .gitignore
├── eslint.config.js            # Configuração do linter
├── package.json
├── package-lock.json
└── vite.config.js              # Configuração do projeto com Vite
