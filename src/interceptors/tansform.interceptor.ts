import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { responseLogger } from 'src/logger';
import { Request, Response } from 'express';

enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    // console.log(
    //   '[](request):',
    //   request.method,
    //   request.body,
    //   request.params,
    //   request.query,
    // );
    // const method: string = request.method;

    // // 加工参数
    // switch (method.toLowerCase()) {
    //   case Methods.POST:
    //     request.body = request.body?.data;
    //     break;
    // }

    return next.handle().pipe(
      map((data) => {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();

        const statusCode = response.statusCode;
        const url = request.originalUrl;
        const res = {
          statusCode,
          msg: null,
          success: true,
          data,
        };

        responseLogger.info(url, res);
        return res;
      }),
    );
  }
}
