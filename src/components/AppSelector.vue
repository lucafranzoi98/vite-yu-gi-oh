<script>
import { state } from "../state"

export default{
   name: "AppSelector",
   data () {
      return {
         state
      }
   }
}
</script>

<template>

   
   <select class="form-select">
      <option v-for="item in state.selector">{{ item.archetype_name }}</option>
   </select>

   

</template>