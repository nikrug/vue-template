import { postModel } from '@entities/post';
import { createPostInputs } from '@features/post/addPost/config/inputs.config';
import { useForm } from '@shared/lib/hooks';

export const useAddPost = () => {
  const { fields, handleSubmit, onReset } = useForm(createPostInputs);

  const { mutateAsync, isError, isPending } = postModel.useAddPostMutation();

  const onSubmit = handleSubmit(mutateAsync);
  return {
    fields,
    onReset,
    isError,
    onSubmit,
    isPending,
  };
};
