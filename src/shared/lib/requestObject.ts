/**
 * Класс RequestObject предоставляет методы для безопасного доступа к значениям
 * объекта с проверками типов.
 */
export class RequestObject {
  /**
   * Флаг, указывающий, что исходный target является объектом.
   */
  isObject = false;

  /**
   * Создает экземпляр RequestObject.
   * @param target Исходное значение, из которого будут извлекаться данные.
   */
  constructor(public target: unknown) {
    this.isObject = this.checkIsObject(target);
  }

  /**
   * Проверяет, является ли переданное значение объектом.
   * @param value Значение для проверки.
   * @returns true, если value является объектом, иначе false.
   */
  private checkIsObject(value: unknown): value is object {
    return !!value && typeof value === 'object' && value instanceof Object;
  }

  /**
   * Извлекает значение по указанному ключу из target.
   * @param key Ключ свойства для извлечения.
   * @returns Значение свойства, если оно существует и target является объектом, иначе null.
   */
  private get(key: string): unknown | null {
    if (this.checkIsObject(this.target) && key in this.target) {
      return this.target[key as keyof typeof this.target];
    }
    return null;
  }

  /**
   * Извлекает строковое значение по заданному ключу.
   * @overload
   * @param key Ключ свойства.
   * @returns Строка, если значение существует и является строкой, иначе null.
   */
  public string(key: string): string | null;
  /**
   * Извлекает строковое значение по заданному ключу.
   * @overload
   * @param key Ключ свойства.
   * @param defaultValue Значение по умолчанию, которое будет возвращено, если извлечённое значение не является строкой.
   * @returns Строка, если значение существует и является строкой, иначе defaultValue.
   */
  public string(key: string, defaultValue: string): string;
  public string<T extends string>(key: string, defaultValue?: T): string | null {
    const value = this.get(key);
    return typeof value === 'string' ? value : defaultValue ?? null;
  }

  /**
   * Извлекает числовое значение по заданному ключу.
   * @overload
   * @param key Ключ свойства.
   * @returns Число, если значение существует и является целым числом, иначе null.
   */
  public number(key: string): number | null;
  /**
   * Извлекает числовое значение по заданному ключу.
   * @overload
   * @param key Ключ свойства.
   * @param defaultValue Значение по умолчанию, которое будет возвращено, если извлечённое значение не является числом.
   * @returns Число, если значение существует и является целым числом, иначе defaultValue.
   */
  public number(key: string, defaultValue: number): number;
  public number(key: string, defaultValue?: number): number | null {
    const value = this.get(key);
    return typeof value === 'number' && Number.isInteger(value)
      ? value
      : defaultValue ?? null;
  }

  /**
   * Извлекает булево значение по заданному ключу.
   * @overload
   * @param key Ключ свойства.
   * @returns Булево значение, если значение существует и является булевым, иначе null.
   */
  public boolean(key: string): boolean | null;
  /**
   * Извлекает булево значение по заданному ключу.
   * @overload
   * @param key Ключ свойства.
   * @param defaultValue Значение по умолчанию, которое будет возвращено, если извлечённое значение не является булевым.
   * @returns Булево значение, если значение существует и является булевым, иначе defaultValue.
   */
  public boolean(key: string, defaultValue: boolean): boolean;
  public boolean(key: string, defaultValue?: boolean): boolean | null {
    const value = this.get(key);
    return typeof value === 'boolean' ? value : defaultValue ?? null;
  }

  /**
   * Извлекает объект по заданному ключу.
   * @param key Ключ свойства.
   * @returns Объект, если значение существует и является объектом, иначе null.
   */
  public object(key: string): object | null {
    const value = this.get(key);
    return this.checkIsObject(value) ? value : null;
  }

  /**
   * Извлекает массив по заданному ключу.
   * @param key Ключ свойства.
   * @returns Массив, если значение существует и является массивом, иначе null.
   */
  public array(key: string): unknown[] | null {
    const value = this.get(key);
    return Array.isArray(value) ? value : null;
  }
}
