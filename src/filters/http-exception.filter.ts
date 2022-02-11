import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { errorLogger } from 'src/logger';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.log('[](err):');

    const url = request.originalUrl;
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const msg = exception.message;

    const errorResponse = {
      statusCode: status,
      msg,
      success: false,
      data: null,
    };

    // 设置返回的状态码、请求头、发送错误信息
    response
      .status(status)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(errorResponse);

    errorLogger.error(url, errorResponse);
  }
}
