import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseurl: 'https://backend.com', //update with backend site when set up
    headers: {
      Authorization: token
    }
  })
}
