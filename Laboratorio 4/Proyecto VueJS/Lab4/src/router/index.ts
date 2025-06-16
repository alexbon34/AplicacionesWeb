import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Experience from '@/views/Experience.vue'
import Education from '@/views/Education.vue'
import Skills from '@/views/Skills.vue'
import Interests from '@/views/Interests.vue'
import Awards from '@/views/Awards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/interests',
      name: 'interests',
      component: Interests
    },
    {
      path: '/awards',
      name: 'awards',
      component: Awards
    }
  ]
})

export default router