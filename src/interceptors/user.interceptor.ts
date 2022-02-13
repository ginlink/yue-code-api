import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { User } from 'src/module/user/user.entity';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: User) => {
        delete data.password;

        return data;
      }),
    );
  }
}

@Injectable()
export class UsersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: User[]) => {
        console.log('[data]:', data);

        return data.map((user) => {
          delete user.password;

          return user;
        });
      }),
    );
  }
}
