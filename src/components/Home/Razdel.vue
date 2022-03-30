<template>
    <div class="container mt-5 ">
      <h1>История Молодежного парламента <img v-if="admin==1" src="@/assets/icons/edit_icon.svg" style="height:2rem;width:auto;cursor:pointer" alt=""></h1>
      
      <div class="mt-5 row">
        <div class="col-sm-7">
          <p style="font-size:1.3rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris vulputate, ultrices metus non, ornare quam. Quisque sit amet mi quam. Phasellus ut quam vitae purus tristique posuere at non risus. Aliquam efficitur efficitur tellus, nec molestie turpis laoreet in. Aliquam et sem neque. Cras sollicitudin blandit metus. Mauris purus nulla, venenatis eget urna vitae, egestas feugiat dui. Proin efficitur sed urna a condimentum. Mauris varius urna ante, sodales vehicula felis facilisis et. Curabitur nec imperdiet leo. Phasellus commodo nisi id enim sodales, iaculis egestas enim pretium.
          </p>
        </div>
        <div class="col-sm-5">
            <img src="@/assets/images/history.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            admin:0
        }
    },
    created(){
        this.admin = localStorage.getItem('authed');
    }
}
</script>