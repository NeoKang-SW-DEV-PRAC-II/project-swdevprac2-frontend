export const UsersAPI = () => {
    async function registerUser(body: UserRegisterBody) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        if(!response.ok) {
            throw new Error("Failed to register")
        }
        
        const data = await response.json()
        return data
    }

    async function loginUser(body: UserLoginBody) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        if(!response.ok) {
            throw new Error("Failed to login")
        }
        
        const data = await response.json()
        console.log(data.role)
        return data
    }

    async function getUserProfile(token: string) {
        const res  = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/auth/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        },);
          const data = await res.json();
          return data;
      }

    return {
        registerUser, 
        loginUser, 
        getUserProfile
    }
}