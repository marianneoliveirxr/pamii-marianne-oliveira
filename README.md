# PAM2
# 📱 Projeto Expo - Instruções de Configuração

> ⚠️ **Atenção:** Este projeto segue a estrutura e orientações da [Documentação Oficial do Expo](https://docs.expo.dev/).  
> Certifique-se de consultá-la para mais detalhes e boas práticas durante o desenvolvimento.

---

## ✅ 1. Configurar o Git e clonar o repositório

Abra o **Git Bash** e execute os seguintes comandos:

```bash
git config --global user.name "Marianne Oliveira"
git config --global user.email "mariannerodrigues0806@gmail.com"
git clone LinkDoRepositório
cd nomeDoRepositorio
```

> 🔁 Substitua `LinkDoRepositório` pelo link do seu repositório no GitHub  
> 📝 Substitua `nomeDoRepositorio` pelo nome da pasta criada após o clone

---

## ⚙️ 2. Criar o projeto com Expo

Se o projeto **ainda não foi criado**, você pode inicializá-lo com o seguinte comando dentro da pasta do repositório:

```bash
npx create-expo-app@latest .
```

> 📁 O ponto `.` indica que o projeto será criado dentro da pasta atual

Esse comando irá gerar a estrutura base do projeto Expo, incluindo o `package.json`, pastas de código e dependências padrão.

---

## ▶️ 3. Iniciar o projeto

Após a criação, você pode iniciar o projeto com:

```bash
npx expo start
```

Esse comando abrirá o **Expo DevTools** no navegador. A partir dali, você pode:

- Escanear o QR code com o app **Expo Go** no celular
- Abrir no navegador (modo web)
- Rodar em um emulador Android ou iOS (se configurado)

---

## 📦 Comandos do Projeto

Aqui estão os comandos mais comuns usados durante o desenvolvimento:

```bash
npx expo start           # Inicia o servidor de desenvolvimento
npm run reset-project    #Reseta o projeto
npx expo install pacote  # Instala um pacote compatível com o Expo
npx expo doctor          # Verifica se há algum problema no ambiente
npx expo upgrade         # Atualiza o projeto para a versão mais recente do Expo
```

> 💡 Sempre prefira `expo install` em vez de `npm install` para garantir compatibilidade com o Expo.

---

## 📚 Documentação oficial

Para mais informações e boas práticas, acesse a [Documentação Oficial do Expo](https://docs.expo.dev/)
