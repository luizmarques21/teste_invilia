# Desafio técnico Invília

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Descrição

A proposta desse desafio é desenvolver um aplicativo para listar palavras em inglês, utilizando como base a API [Free Dictionary API](https://dictionaryapi.dev/).

## Tecnologias usadas

- React Native
- JavaScript
- Redux
- SQLite 3
- Async Storage

## Como instalar e usar o projeto

### Passo 1: Copiar a database

Para Android, a base já está instalada no diretório correto. Para iOS, use o arquivo _dictionary.db_ localizado no diretório `android/app/src/main/assets/www` e siga o seguinte [tutorial](https://aboutreact.com/example-of-pre-populated-sqlite-database-in-react-native/) a partir do ponto _Placing of Pre-populated Database in IOS_.

### Passo 2: Instalar as dependências

Para instalar as dependências do projeto, execute o seguinte comando a partir da _raiz_ do projeto:

```bash
# usando npm
npm install

# OU usando Yarn
yarn install
```

### Passo 3: Iniciar o servidor Metro

Para inicar o Metro, execute o seguinte comando a partir da _raiz_ do projeto:

```bash
# usando npm
npm start

# OU usando Yarn
yarn start
```

### Passo 4: Iniciar a aplicação

Deixe o servidor Metro rodando no seu _próprio_ terminal. Abra uma nova janela do terminal a partir da _raiz_ do projeto e execute o seguinte comando para iniciar a aplicação _Android_ ou _iOS_:

#### Para Android

```bash
# usando npm
npm run android

# OU usando Yarn
yarn android
```

#### Para iOS

```bash
# usando npm
npm run ios

# OU usando Yarn
yarn ios
```

Se tudo estiver configurado _corretamente_, você deverá ver o app rodando no seu emulador Android/iOS.
