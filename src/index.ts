
import express from 'express';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// configurações de rotas
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);

// Configuração dos Handlers de Erro
app.use(errorHandler);

// iniciando o servidor
app.listen(3000, () =>{
    console.log('Aplicação Executando na porta 3000!');
});
