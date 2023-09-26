<script>
export default{
   name: "AppCard",
   props: {
      name: String,
      image: String,
      archetype: String
   }
}
</script>

<template>

   <div class="col-2">
      <div class="card h-100">
         <img :src="image" class="card-img-top">
         <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ archetype }}</p>
         </div>
      </div>
   </div>

</template>