import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = performance.now();
    return next.handle().pipe(
      map(() => {
        const resp = context.switchToHttp().getResponse();
        const end = performance.now();
        resp.cookie('server', (end - start).toString() + 'ms');
      }),
    );
  }
}
