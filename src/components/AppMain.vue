<script>
import AppSelector from './AppSelector.vue';
import { state } from "../state";
import AppCard from './AppCard.vue';


export default{
   name: "AppMain",
   data(){
      return{
         state
      }
   },
   components: {
      AppSelector,
      AppCard
   },
   created (){
      state.fetchData()
      state.dataSelector()
   }
}


</script>

<template>
 
   <main>
      <div class="my_container py-3">
         
         <AppSelector class="w-25 mb-3"></AppSelector>


         <div class="bg-white p-5">
            <div class="bg-dark p-3 text-white" v-if="state.cards">
               <h4>Found {{ state.results }} cards</h4>
               <div class="row mt-2 gy-3">
               
                  <AppCard v-for="card in state.cards" :image="card.card_images[0].image_url_small" :name="card.name" :archetype="card.archetype"></AppCard>

               </div>
            </div>

            <div class="text-center" v-else>
               <span>Loading</span>
            </div>
         </div>

      </div>
   </main>

</template>