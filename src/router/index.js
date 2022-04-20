import { createRouter, createWebHistory } from 'vue-router'
import { elementScrollIntoView } from "seamless-scroll-polyfill";

const routes = [
  {
    path: '/',
    name: 'Main',
     component: () => import('../pages/Main.vue')
  },
  {
    path: '/about',
    name: 'About',
     component: () => import('../pages/About.vue')
  },
  {
    path: '/trainers',
    name: 'Our Trainers',
    component: () => import('../pages/OurTrainers.vue')
  },
  {
    path: '/life-trainers',
    name: 'Life Trainings',
    component: () => import('../pages/LifeTrainings.vue')
  },
  {
    path: '/pro-trainers',
    name: 'Pro Trainers',
    component: () => import('../pages/ProTrainers.vue')
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: () => import('../pages/Subscription.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/BlogPosts.vue')
  },
  {
    path: '/bmpt-blog',
    name: 'BMPT-Blog',
    component: () => import('../pages/BMPTpost.vue')
  },
  {
    path: '/trainer-blog',
    name: 'Trainer-Blog',
    component: () => import('../pages/TrainerPost.vue')
  },
  {
    path: '/offers',
    name: 'Offers',
    component: () => import('../pages/Offers.vue')
  },
  {
    path: '/jobs',
    name: 'Current-Jobs',
    component: () => import('../pages/CurrentJobs.vue')
  },
  {
    path: '/job',
    name: 'Job-Details',
    component: () => import('../pages/JobDetails.vue')
  },
  {
    path: '/user-login',
    name: 'User-Login',
    component: () => import('../pages/UserLogin.vue')
  },
  {
    path: '/trainer-login',
    name: 'Trainer-Login',
    component: () => import('../pages/TrainerLogin.vue')
  },
  {
    path: '/member-registartion',
    name: 'Memeber-registarion',
    component: () => import('../pages/MemberRegistration.vue')
  },
  {
    path: '/trainer-registartion',
    name: 'Trainer-registarion',
    component: () => import('../pages/TrainerRegistration.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../pages/Privacy.vue')
  },
  {
    path: '/conditions',
    name: 'Conditions',
    component: () => import('../pages/TermsConditions.vue')
  },
  {
    path: '/contact',
    name: 'Contact-us',
    component: () => import('../pages/Contacts.vue')
  },
  {
    path: '/sport',
    name: 'Sport',
    component: () => import('../pages/Sport.vue')
  },
  {
    path: '/member-page',
    name: 'Member-page',
    component: () => import('../pages/MemberPage.vue')
  },
  {
    path: '/trainer-page/:id',
    name: 'Trainer-page',
    component: () => import('../pages/TrainerPage.vue')
  },
  {
    path: '/trainer-account',
    name: 'Trainer-account',
    component: () => import('../pages/TrainerAccount.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../pages/Impressum.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    elementScrollIntoView(document.getElementById('app'), {
      behavior: 'smooth',
      block:"start"
    })
  }
})

export default router
