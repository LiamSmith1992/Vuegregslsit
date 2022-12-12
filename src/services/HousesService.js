import { AppState } from "../AppState"
import { api } from "./AxiosService"
import { logger } from '../utils/Logger.js';


class HousesService {

  async getHouses() {
    const res = await api.get('api/houses')
    AppState.houses = res.data
    logger.log('houses', AppState.houses)
  }

  async createHouse(houseData) {
    const res = await api.post('api/houses')
    AppState.houses.push(res.data)
    logger.log('houses creating', res.data)
  }


}

export const housesService = new HousesService()