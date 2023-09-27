import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
   cards: null,
   results: null,
   selector: "",


   fetchData(){
      axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
      .then(response => {
         this.cards = response.data.data;
         this.results = this.cards.length;
      })
   },

   dataSelector(){
      axios
      .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then(response => {
         this.selector = response.data;
         console.log(this.selector);
      })
   }
      
})