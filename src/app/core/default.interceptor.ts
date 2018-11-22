import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent
} from '@angular/common/http';

import { mergeMap, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private notification: NzNotificationService
    ) {}

    codeMessage = {
        200: '服务器成功返回请求的数据。',
        201: '新建或修改数据成功。',
        202: '一个请求已经进入后台排队（异步任务）。',
        204: '删除数据成功。',
        400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
        401: '用户没有权限（令牌、用户名、密码错误）。',
        403: '用户得到授权，但是访问是被禁止的。',
        404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
        406: '请求的格式不可得。',
        410: '请求的资源被永久删除，且不会再得到的。',
        422: '当创建一个对象时，发生一个验证错误。',
        500: '服务器发生错误，请检查服务器。',
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。'
    };

    private handleData(
        event: HttpResponse<any> | HttpErrorResponse
    ): Observable<any> {
        if (event.status >= 200 && event.status < 300) {
            // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
            // 例如响应内容：
            //  错误内容：{ status: 1, msg: '非法参数' }
            //  正确内容：{ status: 0, response: {  } }
            // 则以下代码片断可直接适用
            // if (event instanceof HttpResponse) {
            //     const body: any = event.body;
            //     if (body && body.status !== 0) {
            //         this.msg.error(body.msg);
            //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
            //         // this.http.get('/').subscribe() 并不会触发
            //         return throwError({});
            //     } else {
            //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
            //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
            //         // 或者依然保持完整的格式
            //         return of(event);
            //     }
            // }
            return of(event);
        }
        const errorText = this.codeMessage[event.status] || event.statusText;
        this.notification.error(
            `请求错误 ${event.status}: ${event.url}`,
            errorText
        );
        if (event.status === 401) {
            this.router.navigateByUrl('/user/login');
        }
        if (event.status === 403) {
            this.router.navigateByUrl('/exception/403');
        }
        if (event.status <= 504 && event.status >= 500) {
            this.router.navigateByUrl('/exception/500');
        }
        if (event.status >= 404 && event.status < 422) {
            this.router.navigateByUrl('/exception/404');
        }
        return of(event);
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<
        | HttpSentEvent
        | HttpHeaderResponse
        | HttpProgressEvent
        | HttpResponse<any>
        | HttpUserEvent<any>
    > {
        // const newReq = req.clone({
        //     headers: req.headers.set('Accept', 'application/json')
        // });
        return next.handle(req).pipe(
            mergeMap((event: any) => {
                // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
                if (event instanceof HttpResponse && event.status === 200) {
                    return this.handleData(event);
                }
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err))
        );
    }
}
