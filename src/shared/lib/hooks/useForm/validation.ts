import {emailRegExp, urlRegExp} from '@shared/lib/regExp';

import {TFormInputOptions, TFormOptions, TValue} from './types';

export const checkValid =<T extends Record<string, TValue>>(field: TFormInputOptions<T>, data: TFormOptions<T>): boolean => {
  const rules = data[field.name as keyof T].rules;
  if (!rules) return true;
  if (rules.required) {
    const isValidRequired = field.value && (field.value instanceof Boolean ? field.value : (field.value instanceof Blob || !!String(field.value).length));
    if (!isValidRequired) {
      field.isError = true;
      if (typeof rules.required === 'string') field.errorMessage = rules.required;
      return false;
    }
  }

  if(field.value instanceof Blob && rules.maxSize?.value && field.value.size > rules.maxSize.value) {
    field.isError = true;
    if (rules.maxSize.message) field.errorMessage = rules.maxSize.message;
    return true;
  }

  if (field.value instanceof Blob || field.value instanceof Boolean) {
    field.isError = false;
    return true;
  }

  const currentValue = field.value ? String(field.value) : '';
  if (!currentValue.length) {
    field.isError = false;
    return true;
  }

  if ('email' in rules && !emailRegExp.test(currentValue)) {
    field.isError = true;
    if (rules.email === 'string') field.errorMessage = rules.email;
    return false;
  }

  if ('url' in rules && !urlRegExp.test(currentValue)) {
    field.isError = true;
    if (typeof rules.url === 'string') field.errorMessage = rules.url;
    return false;
  }

  if ('regex' in rules && rules.regex && !rules.regex.value.test(currentValue)) {
    field.isError = true;
    if (rules.regex.message) field.errorMessage = rules.regex.message;
    return false;
  }

  if (rules.minLength) {
    const value = typeof rules.minLength.value === 'number' ? rules.minLength.value : rules.minLength.value(currentValue);
    if (currentValue.length < value) {
      field.isError = true;
      if (rules.minLength.message) field.errorMessage = rules.minLength.message;
      return false;
    }
  }

  field.isError = false;
  return true;
};
