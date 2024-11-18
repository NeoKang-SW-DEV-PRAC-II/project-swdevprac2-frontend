export default async function getCompanies() {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies`)
    if(!response.ok) {
        throw new Error("Failed to fetch companies")
    }
    const data = await response.json()
    return data
}