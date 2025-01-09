import dayjs from "dayjs";

const periodMorning = document.getElementById("schedules-morning")
const periodAfternoon = document.getElementById("schedules-afternoon")
const periodNight = document.getElementById("schedules-night")

export function showSchedules ({ dailySchedules }) {
   try {
      periodMorning.innerHTML = ""
      periodAfternoon.innerHTML = ""
      periodNight.innerHTML = ""

      dailySchedules.forEach((schedule) => {
         const li = document.createElement("li")
         const time = document.createElement("strong")
         const client = document.createElement("strong")
         const tutor = document.createElement("span")
         const service = document.createElement("span")

         li.setAttribute("data-id", schedule.id)
         
         time.textContent = dayjs(schedule.when).format("HH:mm")
         time.classList.add("hour")
         client.textContent = schedule.client
         tutor.textContent = schedule.tutor
         tutor.classList.add("tutor")
         service.textContent = schedule.service
         service.classList.add("service")

         const icon = document.createElement("img")
         icon.classList.add("cancel")
         icon.setAttribute("src", "./src/assets/cancel.svg")
         icon.setAttribute("alt", "ícone de cancelar")

         client.append(" / ", tutor)
         li.append(time, client, service, icon)

         const hour = dayjs(schedule.when).hour()
         if (hour <= 12){
            periodMorning.appendChild(li)
         } else if (hour > 12 && hour <= 18) {
            periodAfternoon.appendChild(li)
         } else {
            periodNight.appendChild(li)
         }
      })
   } catch (error) {
      alert("Não foi possível exibir os agendamentos")
      console.log(error)
   }
}
