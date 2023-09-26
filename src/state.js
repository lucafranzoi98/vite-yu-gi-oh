import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
   cards: null,

   fetchData(){
      axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
      .then(response => {
         this.cards = response.data.data;
      })
   } 
      
})