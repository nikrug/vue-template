
/**
 * Тип значения поля формы
 */
export type TValue = string | number | Blob | boolean | undefined


/**
 * Тип для входных параметров полей формы.
 */
export type TFormOptions<T extends { [key: string]: TValue }> = keyof T extends never
  ? never
  : {
    [K in keyof T]: K extends keyof T ? TUseFormOptions<T[K]> : never;
  };

/**
 * Определяет варианты ввода для полей формы.
 */
export type TFormInputOptions<T extends Record<string, TValue>> = {
  [K in keyof T]: TFormField<T[K]>;
}[keyof T];


/**
 * Тип для определения правил валидации полей формы.
 */
export type TRules<T extends TValue> =
  T extends Blob | boolean
    ? {
      required: boolean | string;
      minLength?: never;
      url?: never;
      email?: never;
      regex?: never;
      maxSize?: T extends Blob ? {
        /**
         * размер указывается в килобайтах
         */
        value: number
        message?: string
      }: never
    }
    : {
    maxSize: never
    required: boolean | string;
    minLength: {
      value: number | ((value: string) => number);
      message?: string;
    };
  } & (
    | { url: boolean | string; email?: never; regex?: never }
    | { email: boolean | string; url?: never; regex?: never }
    | { regex: { value: RegExp; message?: string }; url?: never; email?: never }
    );

/**
 * Тип для определения режима ввода для поля формы.
 */
export type TInputMode =
  | 'none'
  | 'text'
  | 'tel'
  | 'url'
  | 'email'
  | 'hidden'
  | 'password'


/**
 * Тип для представления отдельного поля формы.
 */
export type TFormField<N extends TValue> = {
  name: string;
  placeholder?: string;
  type: TInputMode & 'select' & 'file' & 'radio';
  inputmode?: TInputMode;
  isError: boolean;
  value: N;
  errorMessage: string;
  options?: TFieldOptions<Exclude<N, Blob>>[]
};

export type TFieldOptions<T extends Exclude<TValue, Blob>> = {
  label: string,
  value: T
}

/**
 * Опции для использования в функции useForm.
 */
export type TUseFormOptions<T extends TValue> = {
  defaultValue?: T;
  placeholder?: string;
  inputmode?: TInputMode;
  rules?: Partial<TRules<T>>;
} & (T extends Blob ? {
  type: 'file'
} : T extends boolean ? {
  type: 'checkbox'
} : {
  type: 'select' | 'radio'
  options: TFieldOptions<Exclude<T, Blob>>[]
} | {
  type?: TInputMode,
  options?: never
}
  );
