import { Request, Response, ErrorRequestHandler, NextFunction } from 'express'

export function errorHandlerApi( err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.error(`API error handler foi execultada: ${err} `);
    res.status(500).json({
        errorCode: 'ERRO-001',
        message: 'Erro interno do servidor'
    });
}