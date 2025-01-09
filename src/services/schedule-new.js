import { apiConfig } from "./api-config.js";

export async function newSchedule({ id, client, tutor, service, when }) {
   try {
      await fetch(`${apiConfig.baseURL}/schedules`, {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ id, client, tutor, service, when }),
      })
   } catch (error) {
      alert("Não foi possível agendar. Tente novamente")
      console.log(error)
   }
}