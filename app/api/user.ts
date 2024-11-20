// export const UsersAPI = () => {
//     async function createUser(body: UserRequestBody) {
//         await new Promise((resolve)=>setTimeout(resolve, 1000))

//         const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/auth/register`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(body)
//         })
//         if(!response.ok) {
//             throw new Error("Failed to create a user")
//         }
        
//         const data = await response.json()
//         return data
//     }
// }