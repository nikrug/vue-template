import ApiClient from '@shared/lib/apiService/apiClient';
import {AxiosRequestConfig, AxiosResponse} from 'axios';

import {ServiceFormatter} from './formatter';
import {TDataJson, TDataType} from './types';


/**
 * Класс, представляющий сервис для работы с API.
 */
class ApiService extends ApiClient {
  formatter = ServiceFormatter

  public async get<T>(
    url: string,
    params?: TDataJson,
    config?: Omit<AxiosRequestConfig, 'params'>
  ): Promise<AxiosResponse<T>> {
    return await this.$api.get(url, {
      ...config,
      params
    });
  }

  public async postFormData<T>(
    url: string,
    data?: TDataType,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this.$api.post(url, this.formatter.toFormData(data), config);
  }

  public async postJson<T>(
    url: string,
    data?: TDataType,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this.$api.post(url, data, config);
  }

  public  async putFormData<T>(
    url: string,
    data?: TDataJson,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this.$api.put(url, this.formatter.toFormData(data), config);
  }

  public  async putJson<T>(
    url: string,
    data?: TDataJson,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this.$api.put(url, data, config);
  }

  public async patch<T>(
    url: string,
    data?: TDataJson,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await this.$api.patch(url, data, config);
  }

  public async delete<T>(
    url: string,
    params?: TDataJson,
    config?: Omit<AxiosRequestConfig, 'params'>
  ): Promise<AxiosResponse<T>> {
    return await this.$api.delete(url, {
      ...config,
      params,
    });
  }
}

export {
  ApiService
}
