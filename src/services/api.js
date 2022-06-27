import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2M3NGQ3OWM2NjY1YWFhNjEyMzMyYThhNjAxNTEzZSIsInN1YiI6IjYxZjM0N2VjNGZkMTQxMDA0NmM2MDRkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JZaHAM3BuuRCCMSlfCWb3Rh1zgHvqYlmAmVeD1Gld8w'

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
      Authorization: `Bearer ${token}`
  },
})