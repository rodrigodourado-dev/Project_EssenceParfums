# 🌸 Essence Parfums

Aplicação web desenvolvida em **React + Vite** com **TailwindCSS** e **Framer Motion**, criada para apresentar um catálogo de perfumes de forma moderna, elegante e responsiva.

Deploy contínuo configurado com **Azure DevOps Pipelines** e hospedagem no **Azure App Service**.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React 18**
- ⚡ **Vite**
- 🎨 **TailwindCSS**
- 🎞️ **Framer Motion**
- ☁️ **Azure App Service**
- 🔄 **Azure DevOps Pipelines**

---

## 🧱 Estrutura do Projeto

essence-parfums/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ └── ui/
│ │ ├── button.jsx
│ │ └── card.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── azure-pipelines.yml

## ⚙️ Instalação Local

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seuusuario/essence-parfums.git
cd essence-parfums
npm install
Para rodar o projeto localmente:

bash
Copiar código
npm run dev
Acesse:
👉 http://localhost:5173

🏗️ Build de Produção
Para gerar os arquivos de build:

bash
Copiar código
npm run build
Os arquivos finais ficarão na pasta:

bash
Copiar código
/dist
☁️ Deploy no Azure App Service
O pipeline YAML (azure-pipelines.yml) já está configurado para:

Instalar o Node.js 24 LTS

Fazer o build do projeto

Publicar o conteúdo da pasta /dist no Azure App Service

🔧 Pré-requisitos
Um App Service (Linux) criado no Azure (Node 24)

Uma Service Connection configurada no Azure DevOps

🚀 Execução automática
O deploy será executado automaticamente a cada push na branch main.

🧩 Variáveis Importantes no YAML
yaml
Copiar código
variables:
  appName: 'SEU_APP_SERVICE'
  azureSubscription: 'Azure subscription 1 (xxxxx-xxxx)'
Substitua SEU_APP_SERVICE pelo nome exato do App Service criado.

📦 Dependências principais
Pacote	Função
react / react-dom	Framework principal
vite	Ferramenta de build
tailwindcss	Estilização
framer-motion	Animações suaves
@vitejs/plugin-react	Suporte React no Vite

🖼️ Demonstração (preview local)


👨‍💻 Autor
Desenvolvido por: Rodrigo
📧 Rodrigo Dourado

🪪 Licença
Este projeto está licenciado sob a MIT License — sinta-se livre para usar e modificar.
