import Slider from '@/components/Slider.vue';
import Login from '@/components/Login.vue';
import Elite from '@/components/Elite.vue';
import Creditos from '@/components/Creditos.vue';
import Planes from '@/components/Planes.vue';
import Register from '@/components/Register.vue';
import Example from '@/components/Sgc/Example.vue';
import Gold from '@/components/Gold.vue';
import Modal from '@/components/ModalLogin.vue';
export default [
    {
        path:'/',
        name:'slider',
        component: Slider
    },
    {
        path:'/modal',
        name:'modal',
        component: Modal
    },
    {
        path:'/login',
        name:'login',
        component: Login
    },
    {
        path:'/register',
        name:'register',
        component: Register
    },
    {
        path:'/example',
        name:'example',
        component: Example
    },
    {
        path:'/gold',
        name:'gold',
        component: Gold
    },
    {
        path:'/elite',
        name:'elite',
        component: Elite
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