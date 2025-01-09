import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetch({ date }) {
   try {
      const response = await fetch(`${apiConfig.baseURL}/schedules`)

      const data = await response.json()

      const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

      return dailySchedules
   } catch (error) {
      alert("Não foi possível buscar os agendamentos do dia")
      console.log(error)
   }
}