export const useCompanies = () => {
  async function createCompany(body: CompanyRequestBody) {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if(!response.ok) {
        throw new Error("Failed to create a company")
    }
    
    const data = await response.json()
    return data
  }
  
  async function getCompanies() {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
    },
    })
    if(!response.ok) {
        throw new Error("Failed to get companies")
    }

    const data = await response.json()
    return data
  }
  
  async function getCompanyById(cid: string) {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies/${cid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
    },
    })
    if(!response.ok) {
        throw new Error("Failed to get company by id")
    }
    
    const data = await response.json()
    return data
  }

  async function updateCompany(cid: string, body: CompanyRequestBody) {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies/${cid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
    },
      body: JSON.stringify(body)
    })
    if(!response.ok) {
        throw new Error("Failed to update company by id")
    }
    
    const data = await response.json()
    return data
  }

  async function deleteCompany(cid: string) {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies/${cid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
    },
    })
    if(!response.ok) {
        throw new Error("Failed to delete company by id")
    }
    
    const data = await response.json()
    return data
  }

  return {
    createCompany,
    getCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany,
  }
}
