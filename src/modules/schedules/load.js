import { scheduleFetch } from "../../services/schedule-fetch.js"
import { hoursLoad } from "../form/hours-load.js";
import { showSchedules } from "../schedules/show.js"

export async function schedulesDay(element) {
   const date = (element || document.getElementById('date')).value

   const dailySchedules = await scheduleFetch({ date })

   showSchedules({ dailySchedules })
   
   hoursLoad({ date, dailySchedules })
}