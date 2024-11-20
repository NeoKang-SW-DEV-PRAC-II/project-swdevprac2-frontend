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

export interface CompaniesResponseBody {
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyResponseBody[]
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

export interface BookingRequestBody {
    bookingDate: string, 
    createAt: string
}

export interface UserRegisterBody {
    name: string,
    email: string,
    tel: string,
    role: string,
    password: string,
    createAt: string
}

export interface UserLoginBody {
    email: string, 
    password: string
}