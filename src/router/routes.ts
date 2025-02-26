export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/new-project',
    name: 'new-project',
    component: () => import('@/views/projects/NewProject.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/projects/ProjectListView.vue'),
  },
  {
    path: '/projects/:link',
    name: 'project',
    component: () => import('@/views/projects/ProjectView.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
]
