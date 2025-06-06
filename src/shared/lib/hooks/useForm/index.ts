import {reactive, ref, watch, onUnmounted} from 'vue';

import {checkValid} from '@shared/lib/hooks/useForm/validation';

import {TFormField, TFormInputOptions, TFormOptions, TValue} from './types'


function useForm<T extends Record<string, TValue>>(data: TFormOptions<T>) {
  const isChangeShow = ref(false);

  const fields = reactive(
    Object.entries(data).reduce<Record<keyof T, TFormInputOptions<T>>>((acc, [key, field]) => {
      acc[key as keyof T] = {
        name: key as keyof T,
        placeholder: field.placeholder || '',
        isError: false,
        value: field.defaultValue as T[keyof T],
        errorMessage: '',
        type: field.type || 'text'
      } as TFormInputOptions<T>;

      if (field.options) acc[key as keyof T].options = field.options
      return acc;
    }, {} as Record<keyof T, TFormInputOptions<T>>)
  );

  /**
   * Функция сбрасывает форму к начальному состоянию.
   */
  const onReset = () => {
    for (const fieldsKey in fields) {
      const field = fields[fieldsKey as keyof typeof fields] as TFormInputOptions<T>;
      field.value = data[fieldsKey].defaultValue as T[keyof T];
      field.isError = false;
      field.errorMessage = '';
    }
    isChangeShow.value = false;
  };

  /**
   * Функция для сабмита формы с проверкой валидации.
   * @param onSubmit - Callback-функция, принимающая данные формы после валидации.
   * @returns Функция-обработчик события сабмита формы.
   */
  const handleSubmit = <P>(onSubmit: (data: { [key in keyof T]: T[key] }) => P) => {
    return function () {
      isChangeShow.value = false;
      let isError = false;
      const result = {} as { [key in keyof T]: T[key] };

      for (const fieldsKey in fields) {
        const field = fields[fieldsKey as keyof typeof fields] as TFormInputOptions<T>;
        const isValid = checkValid(field, data);
        if (!isValid) isError = true;
        result[fieldsKey as keyof T] = field.value as T[keyof T];
      }

      isChangeShow.value = true;
      if (isError) return;
      isChangeShow.value = false;
      return onSubmit(result);
    };
  };

  /**
   * Функция изменяет состояние ошибок, перебирая все поля формы.
   * Если в переданном аргументе нет ключа, соответствующего полю формы,
   * то isError будет false.
   * @param errors - Объект с ошибками для полей формы.
   */
  const setErrors = (errors: Partial<{ [key in keyof T]: string | null }>) => {
    for (const fieldKey in fields) {
      const field = fields[fieldKey as keyof typeof fields] as TFormInputOptions<T>;
      if (!field) return;
      const isError = fieldKey in errors;
      if (isError) {
        field.isError = true;
        field.errorMessage = errors[fieldKey] || '';
      } else if (field.isError) {
        field.isError = false;
        field.errorMessage = '';
      }
    }
  };

  watch(fields, () => {
    if (!isChangeShow.value) return;
    for (const valueKey in fields) {
      checkValid(fields[valueKey as keyof typeof fields] as TFormInputOptions<T>, data);
    }
  });

  /**
   * Сбрасываем форму, что бы очистить память системы если у нас есть большие файлы.
   */
  onUnmounted(onReset)


  return {
    fields,
    onReset,
    setErrors,
    handleSubmit
  };
}

export {
  useForm,
};

export type {
  TValue,
  TFormField,
  TFormOptions
}
