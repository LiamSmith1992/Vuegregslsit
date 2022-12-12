<template>
  <div class="row">
    <div class="col-3 card">
      <img class="img-fluid" :src="house.imgUrl" alt="">
      <div>
        <h5>
          Bedrooms:{{ house.bedrooms }} | Price: ${{ house.price }}
        </h5>

      </div>

    </div>


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  props: { house: { type: Object, required: true } },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>