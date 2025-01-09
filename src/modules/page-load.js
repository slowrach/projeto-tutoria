import dayjs from "dayjs"
import { schedulesDay } from "./schedules/load.js"

document.addEventListener("DOMContentLoaded", () => {
   const selectedDate = document.getElementById("date-select")

   selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")
   selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

   schedulesDay()
})