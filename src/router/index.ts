import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'text-indigo-400',  
  routes: [
  
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
  
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      meta: {
        title: 'Portfolio'
      },
      component: () => import('../views/PortfolioView.vue'),
      children: [
        {
          path: ':id',
          name: 'portfolio-detail',
          meta: {
            title: 'Portfolio Detail'
          },
          component: () => import('../views/PortfolioView.vue'),
        }
      ],
    },

    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: 'Contact'
      },
      component: () => import('../views/AboutView.vue')
    },

  ]

});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Portfolio Daniel Valencia`;
  next();
});


export default router
