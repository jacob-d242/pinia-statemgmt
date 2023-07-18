import {defineStore} from "pinia";

export const usetaskStore = defineStore('taskStore',{
    state:() =>({
        tasks :[
            {id:1,title:"Eat some meal",isFav : false},
            {id:2,title:"Eat some food",isFav : true},
            {id:3,title:"swim in the sea",isFav : false},
            {id:3,title:"Go home",isFav : true}
        ]
    }),
    getters:{
       favs(){
           return this.tasks.filter(t => t.isFav)
       },
        favCount(){
           return this.tasks.reduce((p,c)=>{
               return c.isFav ? p + 1 : p
           }, 0)
        },
        totalCount: (state) =>{
           return state.tasks.length
        }
    }
})