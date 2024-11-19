export interface CompanyResponseBody {
    _id: string,
    name: string,
    business: string,
    address: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
}

export interface CompanyRequestBody {
    name: string,
    address: string,
    business: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string
}

export interface CreateCompanyResponse {
    success: true,
    data: CompanyResponseBody
}

export interface GetCompanyByIdResponse {
    success: boolean;
    data: CompanyResponseBody;
}

export interface GetCompaniesResponse {
    success: boolean;
    count: number;
    pagination: {};
    data: CompanyResponseBody[];
}

export interface UpdateCompanyByIdResponse {
    success: boolean;
    data: CompanyResponseBody;
}

export interface DeleteCompanyByIdResponse {
    success: boolean;
    data: CompanyResponseBody;
}