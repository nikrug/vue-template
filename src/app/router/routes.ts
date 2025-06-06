import { DEFAULT_TITLE } from '@shared/config';
import { ROUTES } from '@shared/lib/routes';
import { RouteRecordRaw } from 'vue-router';

import MainLayout from '../layouts/MainLayout.vue';

import { FormPage } from 'src/pages/form';
import { IndexPage } from 'src/pages/main';
import { ErrorNotFound } from 'src/pages/notFound';
import { PPostsDetail } from 'src/pages/post';
import { PPostsList } from 'src/pages/post';

const routes: RouteRecordRaw[] = [
  {
    path: ROUTES.MAIN,
    component: MainLayout,
    children: [
      {
        path: ROUTES.MAIN,
        component: IndexPage,
        meta: { title: `${DEFAULT_TITLE}: index page` },
      },
      {
        path: ROUTES.POST.LIST,
        component: PPostsList,
        meta: { title: `${DEFAULT_TITLE}: Posts` },
      },
      {
        path: ROUTES.POST.VIEW(':id'),
        component: PPostsDetail,
        meta: { title: `${DEFAULT_TITLE}: Post` },
      },
      {
        path: ROUTES.FORM,
        component: FormPage,
        meta: { title: `${DEFAULT_TITLE}: Form` },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
