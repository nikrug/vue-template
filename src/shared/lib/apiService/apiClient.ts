import Axios, {AxiosError, AxiosInstance, CreateAxiosDefaults} from 'axios';
import {Notify} from 'quasar';


export default class ApiClient {
  protected $api: AxiosInstance;

  constructor(url: string, params?: Omit<CreateAxiosDefaults, 'baseURL' | 'withCredentials'>) {
    const $api = Axios.create({
      baseURL: url,
      withCredentials: true,
      ...params
    });

    $api.interceptors.response.use(
      (config) => config,
      (error) => {
        this.errorNotify(error);
        throw error;
      }
    );
    this.$api = $api;
  }

  /**
   * Обработчик ошибок Axios, выводящий уведомление об ошибке.
   *
   * @param {AxiosError} error - Объект ошибки Axios.
   */
  private errorNotify = (error: unknown) => {
    const message =
      (error instanceof AxiosError) ?
        `
          ${error.config?.url && `При запросе ${error.config.url} произошла ошибка. `}
          ${error.code && `Код ${error.code}. `}
          ${error.response?.status && `Статус: ${error.response?.status}. `}
        ` :
        'Неизвестная ошибка при запросе';

    Notify.create({
      message,
      color: 'negative'
    });
  };
}
