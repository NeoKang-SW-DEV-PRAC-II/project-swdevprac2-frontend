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
interface CompaniesResponseBody {
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

interface BookingRequestBody {
    bookingDate: string, 
    createdAt: string
}

interface BookingResponseBody {
    _id: string,
    bookingDate: string, 
    user: string, 
    company: string, 
    createdAt: string
}

interface BookingsResponseBody {
    success: boolean,
    count: number,
    pagination: Object,
    data: BookingResponseBody[]
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