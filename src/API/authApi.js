import { instance } from "./productsApi";

export const authApi = {
  getAuth(data, setError) {
    const {username, password} = data
    return instance
      .post("auth/login", {username, password})
      .then(res => res.data)
      .catch((err) => {setError('common', {type: 'server', message: `Server error: ${err}`})
      })
  },
  getRegister(data, setError) {
    const {email, username, password} = data
    return instance
      .post("users", {email, username, password, name:{
        firstname:'John',
        lastname:'Doe'
    },
    address:{
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
        }
    },
    phone:'1-570-236-7033'})
      .then(res => res.data)
      .catch((err) => {setError('common', {type: 'server', message: `Server error: ${err}`})
      })
  }
}