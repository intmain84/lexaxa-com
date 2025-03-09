export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/error-example',
    name: 'error-example',
    component: () => import('@/views/ErrorExample.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/new-project',
    name: 'new-project',
    component: () => import('@/views/projects/NewProject.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/projects/ProjectListView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/projects/edit/:link',
    name: 'project-edit',
    component: () => import('@/views/projects/ProjectView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:link',
    name: 'project',
    component: () => import('@/views/projects/ProjectView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { requiresAuth: false },
  },
]
