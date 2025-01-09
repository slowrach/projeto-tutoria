import dayjs from "dayjs"
import { newSchedule } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js" 

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("name-client")
const tutorName = document.getElementById("name-tutor")
const hour = document.getElementById("hour")
const services = document.getElementById("service")

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = async (event) => {
   event.preventDefault()

   try {
      const client = clientName.value.trim()

      const tutor = tutorName.selectedOptions[0].label

      if (!client) {
         return alert("Informe seu nome")
      }

      const [hourSelected] = hour.selectedOptions[0].label.split(":")

      const service = services.value.trim()

      const when = dayjs(selectedDate.value).add(hourSelected, "hour")

      const id = new Date().getTime().toString()

      await newSchedule({
         id,
         client,
         tutor,
         service,
         when,
      })

      await schedulesDay()

      clientName.value = ""
      services.value = ""
   } catch (error) {
      alert("Não foi possível realizar o agendamento")
      console.log(error)
   }
}