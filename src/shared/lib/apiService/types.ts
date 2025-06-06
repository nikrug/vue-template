type TFormValues = string | number | Blob | boolean | undefined | null

type TJsonValues = string | number | undefined | null

/**
 * Тип данных, представляющий объект с возможностью содержать вложенные структуры.
 */
type TDataType =
  | { [key: string]: TFormValues | (TFormValues)[] | TDataType }
  | { [key: string]: TFormValues | (TFormValues)[] | TDataType }[];

/**
 * Тип данных для представления объекта с ключами строкового или числового типа
 * и значениями строкового, числового типа или массива чисел и строк.
 */
type TDataJson = { [k: string]: TJsonValues | (TJsonValues)[] };

export type {
  TDataJson,TDataType
}
