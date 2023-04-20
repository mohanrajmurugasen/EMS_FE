import axios from 'axios'
import { BaseURL } from './BaseURL'

const AuthAxios = axios.create({
  baseURL: BaseURL,
})

export default AuthAxios
