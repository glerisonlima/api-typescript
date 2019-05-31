import * as http from  'http'
import Api from './api/api'
import { errorHandlerApi } from './api/errorHandlerApi'

const config = require('./config/env/config')();
 
const server = http.createServer(Api);

server.listen(config.serverPort , () => console.log('Server esta rodando na porta 3000'));