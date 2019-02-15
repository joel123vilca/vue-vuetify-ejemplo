import Slider from '@/components/Slider.vue';
import Login from '@/components/Login.vue';
import Servicios from '@/components/Servicios.vue';
import Creditos from '@/components/Creditos.vue';
import Planes from '@/components/Planes.vue';

export default [
    {
        path:'/',
        name:'slider',
        component: Slider
    },
    {
        path:'/login',
        name:'login',
        component: Login
    },
    {
        path:'/gold',
        name:'gold',
        component: Servicios
    },
    {
        path:'/elite',
        name:'elite',
        component: Servicios
    },
    {
        path:'/creditos',
        name:'creditos',
        component: Creditos
    },
    {
        path:'/suscribete',
        name:'suscribete',
        component: Planes
    },
    { path: '*', redirect: '/' }
]