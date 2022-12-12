<template>
  <HousesForm />
  <div class="component">
    <h1>Houses</h1>
    <div v-for="h in houses">
      <HousesCard :house="h" />
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop";
import { housesService } from '../services/HousesService.js'
export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getHouses()

    })


    return {
      houses: computed(() => AppState.houses)
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
