"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(err, req, res, next) {
    console.error("API error handler foi execultada: " + err + " ");
    res.status(500).json({
        errorCode: 'ERRO-001',
        message: 'Erro interno do servidor'
    });
}
exports.errorHandlerApi = errorHandlerApi;
