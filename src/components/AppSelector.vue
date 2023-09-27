<script>
import { state } from "../state"

export default{
   name: "AppSelector",
   data () {
      return {
         state
      }
   },
   emits: ['selectArchetype'],
}
</script>

<template>

   
   <select class="form-select" @change="$emit('selectArchetype')" v-model="state.selectedArchetype">
      <option disabled value="">Select archteype</option>
      <option v-for="item in state.selector">{{ item.archetype_name }}</option>
   </select>

   

</template>