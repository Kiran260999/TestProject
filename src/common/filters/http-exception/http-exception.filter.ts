import { object } from '@hapi/joi';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { Logger } from '@nestjs/common';
@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException> 
implements ExceptionFilter {
  private logger = new Logger(HttpExceptionFilter.name);
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();
    const error =
      typeof response === 'string'
        ? { message: exceptionResponse }
        : (exceptionResponse as object);


        const timestamp = new Date().toISOString();
        const path = ctx.getRequest().url;

        this.logger.log(`${JSON.stringify({ timestamp, path, ...error })}`);
        // console.log(ctx.getRequest());
        
    // response.status(status).json({
    //   ...error,
    //   timestamp: new Date().toISOString(),
    //   path: ctx.getRequest().url
    // })
    response.status(status).json({
      status:"Fail",
      ...error    
    })


  }
}
