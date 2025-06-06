import {TDataType} from './types';

class ServiceFormatter {
  /**
   * Преобразует данные в объект FormData.
   *
   * @param {TDataType} data - Данные для преобразования.
   * @returns {FormData | undefined} - Объект FormData или undefined, если данные отсутствуют.
   */
  public static toFormData = (data?: TDataType): FormData | undefined => {
    if (!data) return undefined;
    const formData = new FormData();
    const appendItem = <T>(key: string, item: T) => item &&
      formData.append(key, item instanceof Blob
        ? item
        : String(item instanceof Boolean ? +item: item));

    Object.entries(data).forEach(([key, value]) => {
      Array.isArray(value)
        ? value.forEach(itemValue => appendItem(`${key}[]`, itemValue))
        : appendItem(key, value);
    });

    return formData;
  };
}


export {
  ServiceFormatter
}
