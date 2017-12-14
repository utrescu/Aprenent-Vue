import IniciComponent from './components/IniciComponent.vue'
// import UsuarisComponent from './components/usuaris.vue'
import UsuariComponent from './components/usuari.vue'

// Lazy loading la llista d'usuaris (només en apps grans)
// Carrega quan fa falta i no sempre
const UsuarisComponent = resolve => {
    require.ensure(['./components/usuaris.vue'], () => {
        resolve(require('./components/usuaris.vue'));
    })
}

export const rutes = [
    { path: '', component: IniciComponent},
    { path: '/usuaris', component: UsuarisComponent, name: 'usuaris' }, // ,
        //children: [ { path: ':id' , component: UsuariComponent, name:'usuari' } ]
    // }
    { path: '/usuari/:id', component: UsuariComponent, name:'usuari'},
    { path: '/users', redirect: '/usuaris'},
    { path: '*', redirect: '/'}
]