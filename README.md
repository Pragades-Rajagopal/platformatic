# Platformatic DB API

This is a generated [Platformatic DB](https://oss.platformatic.dev/docs/reference/db/introduction) application.

## Requirements

Platformatic supports macOS, Linux and Windows ([WSL](https://docs.microsoft.com/windows/wsl/) recommended).
You'll need to have [Node.js](https://nodejs.org/) >= v16.17.0 or >= v18.8.0

## Setup 

1. DB file creation
> Note: This will create a SQLite database for your project if you wish to use SQLite. Skip this step if you are using Postgres or MySQL

```bash
./create-db.sh
```

2. Install dependencies:

```bash
npm install
```

3. Apply migrations:

```bash
npx platformatic db migrations apply
```


## Usage

Run the API with:

```bash
npm start
```

### Explore
- ⚡ The Platformatic DB server is running at http://localhost:3042/
- 📔 View the REST API's Swagger documentation at http://localhost:3042/documentation/
- 🔍 Try out the GraphiQL web UI at http://localhost:3042/graphiql


