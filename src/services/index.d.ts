import { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

export interface IMyRequest {
  (url: string, options?: AxiosRequestConfig): Promise<IResponse>
}

export interface RequestHandlerFunc {
  (requestConfig: InternalAxiosRequestConfig): InternalAxiosRequestConfig
}

export interface ResponseHandlerFunc {
  (response: AxiosResponse): Promise<any>
}

export interface ErrorHandlerFunc {
  (error: AxiosError): Promise<never>
}

export interface IAxiosHandlers {
  responseHandler: ResponseHandlerFunc
  requestHandler?: RequestHandlerFunc
  requestErrorHandler?: ErrorHandlerFunc
  responseErrorHandler?: ErrorHandlerFunc
}
