import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
   cards: null,
   results: null,
   counter: null,

   fetchData(){
      axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then(response => {
         this.cards = response.data.data;
         this.results = this.cards.length;
      })
   } 
      
})