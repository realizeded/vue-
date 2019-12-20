import home from '../../pages/home/index';
import city from '../../pages/city/index';
export default [
    {
        path:'/',
        name:'home',
        component:home,
        meta:{
            isAlive:true
        }
    },
    {
        path:'/city',
        name:'city',
        component:city,
        meta:{

        }
    }
];