import axios from "axios"

export const launchReservation = async (reservation) => {
  const url = "http://localhost:5050/api/booking/make"
  const response = await axios.post(url, reservation)
  return response.data
}

export const getTables = async (body) => {
  const url = "http://localhost:5050/api/booking/find"
  const response = await axios.post(url, body)
  return response.data.spacefounded
}
