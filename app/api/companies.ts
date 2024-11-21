export const useCompanies = () => {
  async function createCompany(body: CompanyRequestBody, token: string) {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
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
    },
    })
    if(!response.ok) {
        throw new Error("Failed to get company by id")
    }
    console.log(response)
    const data = await response.json()
    return data
  }

  async function updateCompany(cid: string, body: CompanyRequestBody, token: string) {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies/${cid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
      body: JSON.stringify(body)
    })
    if(!response.ok) {
        throw new Error("Failed to update company by id")
    }
    
    const data = await response.json()
    return data
  }

  async function deleteCompany(cid: string, token: string) {
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies/${cid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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
