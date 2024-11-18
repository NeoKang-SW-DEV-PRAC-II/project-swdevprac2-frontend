export default async function getCompany(id:string) {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch a company")
    }
    const data = await response.json()
    return data
}