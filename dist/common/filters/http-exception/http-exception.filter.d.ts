import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter {
    private logger;
    catch(exception: T, host: ArgumentsHost): void;
}
