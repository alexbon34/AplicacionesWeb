import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Experience from '@/components/Experience.vue'
import Education from '@/components/Education.vue'
import Skills from '@/components/Skills.vue'
import Interests from '@/components/Interests.vue'
import Awards from '@/components/Awards.vue'


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