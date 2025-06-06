import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';

import { PostService } from './api/postService';
import { POST_MODEL_KEY } from './config';
import { TDtoAddPost } from './lib/types';

const usePost = () => {
  return useQuery({
    queryKey: [POST_MODEL_KEY],
    queryFn: () => PostService.getList(),
  });
};

const useAddPostMutation = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: (data: TDtoAddPost) => PostService.add(data),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [POST_MODEL_KEY],
      });
    },
  });
  return result;
};

export {
  usePost,
  useAddPostMutation,
};
