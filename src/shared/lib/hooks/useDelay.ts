/**
 * Минимальная задержка в миллисекундах, применяемая по умолчанию.
 */
const MIN_DELAY = 300;

/**
 * Приостанавливает выполнение на заданное время.
 * @param timeToPause - Продолжительность паузы в миллисекундах.
 * @returns Объект Promise, который разрешается после указанной паузы.
 */
const pause = (timeToPause: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, timeToPause));

/**
 * Применяет задержку к выполнению обратного вызова или Promise.
 * @template T - Тип результата, возвращаемого обратным вызовом или Promise.
 * @param callbackOrPromise - Функция обратного вызова или Promise, которые отрабатывают вне зависимости от задержки.
 * @param delay - Продолжительность задержки в миллисекундах.
 * @returns Объект Promise, который разрешается к результату обратного вызова или Promise после применения задержки.
 */
const applyDelay = async <T>(callbackOrPromise: Promise<T> | T, delay: number): Promise<T> => {
  const startTime = Date.now();
  const result = await callbackOrPromise;
  const timeDelta = Date.now() - startTime;
  const isMoreThanMinLoaderTime = timeDelta > delay;
  if (!isMoreThanMinLoaderTime) {
    const timeToPause = delay - timeDelta;
    await pause(timeToPause);
  }
  return result;
};

/**
 * Создает отложенную версию функции обратного вызова.
 * @template T - Тип результата, возвращаемого функцией обратного вызова.
 * @template D - Тип аргументов, принимаемых функцией обратного вызова.
 * @param callback - Функция обратного вызова, которая оборачивается в промис.
 * @param delay - Продолжительность задержки в миллисекундах.
 * @returns Объект Promise, который разрешается к результату функции обратного вызова после применения задержки.
 */
export function useDelay<T, D extends unknown[]>(
  callback: (...args: D) => Promise<T> | T,
  delay = MIN_DELAY
): (...args: D) => Promise<T> {
  return (...args: D): Promise<T> => applyDelay(callback(...args), delay);
}

/**
 * Создает отложенную версию Promise.
 * @template T - Тип результата, возвращаемого Promise.
 * @param promise - Promise, который отрабатывает вне зависимости от задержки отложить.
 * @param delay - Продолжительность задержки в миллисекундах.
 * @returns Объект Promise, который разрешается к результату исходного Promise после применения задержки.
 */
export function usePromiseDelay<T>(
  promise: Promise<T>,
  delay = MIN_DELAY
): Promise<T> {
  return applyDelay(promise, delay);
}

