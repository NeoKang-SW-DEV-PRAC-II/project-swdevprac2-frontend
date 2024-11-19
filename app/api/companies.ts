import { GetCompanyByIdResponse } from "@/interfaces";

export const useCompanies = () => {
  async function createCompany() {

  }
  
  async function getCompanies() {
    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1` + `/companies`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to getCompanies');
    }
    return response.json();
  }
  
  async function getCompanyById(cid: string) : Promise<GetCompanyByIdResponse> {
    const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1` + `/companies/${cid}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to getCompanyById');
    }
    return response.json();
  }

  return {
    createCompany,
    getCompanies,
    getCompanyById,
  }
}
