/**
 * Регулярное выражение для проверки адресов электронной почты
 * @example
 * ```typescript
 * const isValidEmail = emailRegExp.test('example@example.com');
 * ```
 */
const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

/**
 * Регулярное выражение для проверки URL-адресов.
 * @remarks
 * Это регулярное выражение предназначено для соответствия наиболее распространенным форматам URL-адресов.
 * @example
 * ```typescript
 * const isValidUrl = urlRegExp.test('https://www.example.com');
 * ```
 */
const urlRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

export {
  emailRegExp,
  urlRegExp
}
