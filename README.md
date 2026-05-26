# TaskFlow

Aplicação web simples para gerenciamento de tarefas, desenvolvida como projeto final da disciplina de DevOps.

---

## 📌 Descrição

O TaskFlow é uma aplicação full stack com frontend, backend e banco de dados integrados, utilizando Docker Compose para orquestração dos serviços e pipeline automatizada com GitHub Actions e SonarCloud.

O projeto foi desenvolvido com foco na aplicação prática de conceitos de DevOps, integração contínua e organização de fluxo de desenvolvimento.

---

## 🎯 Objetivo

Demonstrar na prática:

- Integração entre frontend, backend e banco de dados
- Conteinerização da aplicação
- Pipeline de integração contínua
- Análise de qualidade de código
- Fluxo de branches utilizando GitFlow
- Commits semânticos e organização do repositório

---

## 🛠️ Tecnologias utilizadas

### Frontend
- React
- Vite
- Axios

### Backend
- NestJS com JavaScript
- Babel

### Banco de Dados
- PostgreSQL

### DevOps
- Docker
- Docker Compose
- GitHub Actions
- SonarCloud
- GitFlow

---

## 📂 Estrutura do projeto

```bash
taskflow-devops/
├── backend/
│   ├── src/
│   ├── tests/
│   ├── package.json
│   ├── Dockerfile
│   └── babel.config.json
│
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── vite.config.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
├── sonar-project.properties
├── package.json
└── README.md
```

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/erikaveloso/taskflow-devops.git
```

### 2. Entrar na pasta do projeto

```bash
cd taskflow-devops
```

### 3. Subir os containers

```bash
docker compose up --build
```

---

## 🌐 Acesso à aplicação

Após subir os containers:

- Frontend: http://localhost:3000
- Backend: http://localhost:8080

---

## 🐳 Serviços configurados

O Docker Compose realiza a execução integrada dos seguintes serviços:

- Frontend React
- Backend NestJS
- Banco PostgreSQL

---

## ⚙️ Pipeline CI/CD

O projeto possui integração contínua utilizando GitHub Actions.

A pipeline executa automaticamente:

- Instalação das dependências
- Build do frontend
- Build do backend
- Execução dos testes
- Análise de qualidade com SonarCloud

---

## 🔍 Qualidade de código

A análise estática do projeto é realizada utilizando SonarCloud.

A integração verifica:
- Bugs
- Vulnerabilidades
- Code Smells
- Qualidade geral do código

---

## 🌿 Estratégia de versionamento

### Branches principais

- `main` → versão final da aplicação
- `develop` → branch de desenvolvimento

### Branches auxiliares

- `feature/*`
- `fix/*`
- `chore/*`

---

## 🔄 Fluxo de trabalho

### Criar branch

```bash
git checkout develop
git checkout -b feature/nome-da-feature
```

### Realizar commit

```bash
git add .
git commit -m "feat: descrição da funcionalidade"
```

### Enviar alterações

```bash
git push origin feature/nome-da-feature
```

### Abrir Pull Request

```text
feature → develop
```

---

## 📌 Funcionalidades implementadas

- Cadastro de tarefas
- Listagem de tarefas
- Atualização de tarefas
- Remoção de tarefas

---

## 👥 Equipe

Projeto desenvolvido para fins acadêmicos na disciplina de DevOps.