import { schedulesDay } from "./load.js"
import { cancelSchedule } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll("ul")

periods.forEach((period) => {
   period.addEventListener("click", async (event) => {
      if (event.target.classList.contains("cancel")) {
         const item = event.target.closest("li")
         const { id } = item.dataset

         if (id) {
           const isConfirm = confirm("Deseja excluir esse agendamento?")

            if (isConfirm) {
               await cancelSchedule({ id })
               schedulesDay()
            } 
         }
         
      }
   })
})