<script>
import AppSelector from './AppSelector.vue';
import { store } from "../store"


export default{
   name: "AppMain",
   data(){
      return{
         store
      }
   },
   components: {
      AppSelector,
   }
}


</script>

<template>
 
   <main>
      <div class="my_container py-3">
         
         <AppSelector class="w-25 mb-3"></AppSelector>

         <div class="bg-white p-5">
            <div class="bg-dark p-3 text-white">Found N cards</div>
         </div>

      </div>
   </main>

</template>