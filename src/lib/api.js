import axios from 'axios'

const baseUrl = '/api'

export const postMessage = (formData) => {
  console.log(formData)
  return axios.post(`${baseUrl}/messages/`, formData)
}
