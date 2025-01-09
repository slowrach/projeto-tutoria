import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hour")

export function hoursLoad({ date, dailySchedules }) {
   hours.innerHTML = ""

   const unavailableHour = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

   const opening = openingHours.map((hour) => {
      const [scheduleHour] = hour.split(":")

      const isPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

      const available = !unavailableHour.includes(hour) && !isPast

      return {
         hour,
         available,
      }
   })

   opening.forEach(({ hour, available }) => {
      const option = document.createElement("option")

      if (!available) {
         option.classList.add( "unavailable-hour")
      }

      option.textContent = hour
      hours.append(option)
   })
}