# TaskFlow

Projeto final da disciplina de DevOps.

---

## 📌 Descrição

O TaskFlow é uma aplicação web simples para gerenciamento de tarefas, desenvolvida com foco na aplicação de conceitos de DevOps, incluindo organização de repositório, uso de GitFlow e conteinerização com Docker.

---

## 🎯 Objetivo

Estruturar uma aplicação com:

* Frontend
* Backend
* Banco de dados
* Execução via Docker Compose

---

## 🛠️ Tecnologias utilizadas

* React (Frontend)
* NestJS com JavaScript (Backend)
* PostgreSQL (Banco de dados)
* Docker
* Docker Compose
* GitHub
* GitFlow

---

## 📂 Estrutura do projeto

```
taskflow-devops/
├── backend/
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── babel.config.json
│
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── Dockerfile
│
├── compose.yaml
├── .gitignore
└── README.md
```

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/erikaveloso/taskflow-devops.git
```

### 2. Entrar na pasta

```bash
cd taskflow-devops
```

### 3. Subir os containers

```bash
docker compose -f compose.yaml up --build
```

---

## 🌐 Acesso à aplicação

Após subir os containers, acesse:

* Frontend: http://localhost:3000
* Backend: http://localhost:8080

---

## 🐳 Serviços configurados

O projeto utiliza Docker Compose para subir:

* **Frontend** (React)
* **Backend** (NestJS)
* **Banco de dados** (PostgreSQL)

---

## 🌿 Estratégia de versionamento (GitFlow)

### Branches principais

* `main` → versão final do projeto
* `develop` → base de desenvolvimento

### Branches de features

* `feature/project-structure`
* `feature/backend-structure`
* `feature/frontend-structure`
* `feature/docker-compose`

---

## 🔄 Fluxo de trabalho

1. Criar branch a partir da develop:

```bash
git checkout develop
git checkout -b feature/nome-da-feature
```

2. Fazer alterações e commit:

```bash
git add .
git commit -m "mensagem"
```

3. Enviar para o GitHub:

```bash
git push origin feature/nome-da-feature
```

4. Criar Pull Request:

```
feature → develop
```

---

## 📌 Observações

* A branch `main` será utilizada apenas na entrega final
* O foco da Etapa 1 é a estrutura do projeto e o funcionamento do Docker Compose

---
