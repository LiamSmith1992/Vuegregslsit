<template>


  <div class="card m-2 p-1">


    <form @submit.prevent="createHouse()">
      <div class="d-flex gap-2 p-2">

        <div class="mb-3 col-2">
          <label for="" class="form-label">Bathrooms</label>
          <input type="number" name="bathrooms" id="bathroom" v-model="editable.bathrooms" class="form-control"
            aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">You got toilets?.</div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Bedrooms</label>
          <input type="number" v-model="editable.bedrooms" class="form-control" id="">
        </div>
        <div class="mb-3">
          <label for="" class="form-label">levels</label>
          <input type="number" v-model="editable.levels" class="form-control" id="">
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Price</label>
          <input type="number" v-model="editable.price" class="form-control" id="">
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Picture</label>
          <input type="text" v-model="editable.imgUrl" class="form-control" id="">
        </div>
      </div>
      <div class="mb-3 p-2">
        <label for="" class="form-label">Describe Your House</label>
        <input type="text" v-model="editable.description" class="form-control" id="">
      </div>

      <button type="submit" class="p-2 btn btn-primary">Submit</button>

    </form>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { housesService } from '../services/HousesService.js';
export default {
  props: { houseData: { type: Object, default: {} } },
  setup(props) {
    onMounted(() => {
      editable.value = props.houseData
    })
    const editable = ref({})

    async function createHouse() {
      try {
        await housesService.createHouse(editable.value)
        editable.value = {}
        Pop.toast('created House')
      } catch (error) {
        Pop.error(error)
        logger.error(error)

      }
    }
    return {
      createHouse,
      editable
    }

  }
};
</script>


<style lang="scss" scoped>

</style>