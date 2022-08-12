import { instance } from "./productsApi";

export const authApi = {
  getAuth(data, setError) {
    const {username, password} = data
    return instance
      .post("auth/login", {username, password})
      .then(res => res.data)
      .catch((err) => {setError('common', {type: 'server', message: `Server error: ${err}`})
      })
  }
}