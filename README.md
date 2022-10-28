# persistenciaNode
Trabalho sobre persistencia em banco de dados utilizando API com NodeJS + Typescript

# Criar migrations
npx typeorm migration:create -n nomedamigration

# Iniciar
Npm install
<br><br> ---Modificar conexao do banco no arquivo ormconfig.json<br>
"username": nome do usuario banco de dados, provavelmente sera postgres,<br>
"password": senha do banco de dados,<br>
"database": nome do banco de dados criado
<br><br> ---Rodar migrations
    <br>npm run typeorm migration:run
<br><br>---Rodar servidor
    <br>npm run dev