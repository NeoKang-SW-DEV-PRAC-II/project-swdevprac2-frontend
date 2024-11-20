interface CompanyResponseBody {
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

interface CompanyRequestBody {
    name: string,
    address: string,
    business: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string
}

interface CreateCompanyResponse {
    success: true,
    data: CompanyResponseBody
}

interface GetCompanyByIdResponse {
    success: boolean;
    data: CompanyResponseBody;
}

interface GetCompaniesResponse {
    success: boolean;
    count: number;
    pagination: {};
    data: CompanyResponseBody[];
}

interface UpdateCompanyByIdResponse {
    success: boolean;
    data: CompanyResponseBody;
}

interface DeleteCompanyByIdResponse {
    success: boolean;
    data: CompanyResponseBody;
}

interface CompaniesResponseBody {
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyResponseBody[]
}

interface CompanyRequestBody {
    name: string,
    address: string,
    business: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string
}

interface BookingRequestBody {
    bookingDate: string, 
    createAt: string
}

interface UserRegisterBody {
    name: string,
    email: string,
    tel: string,
    role: string,
    password: string,
    createAt: string
}

interface UserLoginBody {
    email: string, 
    password: string
}