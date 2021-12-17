//import des modules pour créer le router
import { createRouter, createWebHistory } from 'vue-router';

//import des vue
import Home from '../views/Home.vue';


const routes=[
    {
        name:'Home',
        path:'/',
        component:Home, 			   
        meta:{
            title:'Acceuil' 			 //titre de l'onglet
            }
    },
    {
        name:'NotFound',
        path:'/:pathMatch(.*)',
        component:NotFound, 			   
        meta:{
            title:'404 Not Found'
            }
    }
];
// s'il y a des props (variables à passer d'une page à l'autre), il faut saisir:  	
// props:true, 			            
// pour les autoriser  			


const router=createRouter({
    history:createWebHistory(),
    routes
});
  			
router.afterEach((to,from)=>{
    console.log(from); 			// 			si on supprime cette ligne, on peut dans ce cas supprimer le from
    document.title=to.meta.title; 			// 			c'est ici que l'on injecte la valeur du titre dans l'onglet de la 			page cible.  			
});
  			
export default router;