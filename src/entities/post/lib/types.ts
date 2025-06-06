type TDtoAddPost = {
  body: number;
  password: string
  confirm: boolean
};
interface IPostItem {
  id: number;
  title: string;
  description: string;
}

export {
  TDtoAddPost,
  IPostItem
}
