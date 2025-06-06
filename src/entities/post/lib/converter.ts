import { catchFunctionError } from '@shared/lib/helpers/catchFunctionError';
import { RequestObject } from '@shared/lib/requestObject';

import { IPostItem } from './types';

function postConverter(post: unknown): IPostItem {
  const requestObj = new RequestObject(post)
  const id = requestObj.number('id')
  if (!requestObj.isObject || !id) throw new Error('нет свойства id')
  const title = requestObj.string('title', '')
  const description = requestObj.string('body', '')
  return {
    id,
    title,
    description,
  };
}

export const postsDataConverter = catchFunctionError((data: unknown): IPostItem[] => {
  if (!Array.isArray(data)) return [];
  return data.map((post) => postConverter(post));
})
