import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage'
import TeacherRegister from '@/components/teacher/register'
import StudentRegister from '@/components/student/register'
import Login from '@/components/login'
import Register from '@/components/register'
import SIndex from '@/components/student/index'
import TIndex from '@/components/teacher/index'
import Course from '@/components/teacher/course'
import THomework from '@/components/teacher/homework'
import SHomework from '@/components/student/homework'
import WorkInfo from '@/components/teacher/workInfo'
import CourseMember from '@/components/teacher/courseMember'
import SubmitWork from '@/components/student/submitWork'
import SClassmate from '@/components/student/classmate'
import SGrade from '@/components/student/grade'
import TSubmitWork from '@/components/student/submitWork'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/teacher/register',
      name: 'TeacherRegister',
      component: TeacherRegister
    },
    {
      path: '/student/register',
      name: 'StudentRegister',
      component: StudentRegister
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/student/index',
      name: 'SIndex',
      component: SIndex,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/teacher/index',
      name: 'TIndex',
      component: TIndex,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/teacher/course',
      name:'Course',
      component:Course,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/teacher/homework',
      name:'THomework',
      component:THomework,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/student/homework',
      name:'SHomework',
      component:SHomework,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/teacher/workInfo',
      name:'WorkInfo',
      component:WorkInfo,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/teacher/courseMember',
      name:'CourseMember',
      component:CourseMember,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/student/submitWork',
      name:'SubmitWork',
      component:SubmitWork,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/teacher/submitWork',
      name:'TSubmitWork',
      component:TSubmitWork,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/student/classmate',
      name:'SClassmate',
      component:SClassmate,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/student/grade',
      name:'SGrade',
      component:SGrade,
      meta:{
        requireAuth:true
      }
    }
  ]
})
