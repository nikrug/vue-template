import {TDtoAddPost} from '@entities/post';
import {postsDataConverter} from '@entities/post/lib/converter';
import {serverApi} from '@shared/services';


export class PostService {
  private static api = serverApi

  static add = (data: TDtoAddPost) => {
    return this.api.postJson('posts', data);
  };

  static change = (id: number) => {
    return this.api.putJson(`posts/${id}`);
  };
  static getList = async (params?: { page?: number, limit?: number }) => {

    const {data} = await this.api.get('posts', {
      _page: params?.page,
      _limit: params?.limit
    });
    return postsDataConverter(data);
  };
}
