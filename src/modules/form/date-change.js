import { schedulesDay } from "../schedules/load"

const selectedDate = document.getElementById("date-select")

selectedDate.onchange = () => schedulesDay()