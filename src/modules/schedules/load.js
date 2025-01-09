import { scheduleFetch } from "../../services/schedule-fetch.js"
import { hoursLoad } from "../form/hours-load.js";
import { showSchedules } from "../schedules/show.js"

const selectedDate = document.getElementById("date-select")

export async function schedulesDay() {
   const date = selectedDate.value

   const dailySchedules = await scheduleFetch({ date })

   showSchedules({ dailySchedules })
   
   hoursLoad({ date, dailySchedules })
}