import { schedulesDay } from "../schedules/load"

const date = document.getElementById("date")
const dateSelect = document.getElementById("date-select")

date.onchange = () => schedulesDay(date)

dateSelect.onchange = () => schedulesDay(dateSelect)