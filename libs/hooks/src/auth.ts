import { Auth } from "@models"

const useAuthAction = () => {
  return {
    login: (auth: Auth) => {
      // login logic
    }
  }
}

export { useAuthAction }
