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
interface CompaniesResponseBody {
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyResponseBody[]
}

interface BookingRequestBody {
    bookingDate: string, 
    createdAt: string
}

interface CompanyBookingResponse {
    _id: string,
    name: string,
    address: string,
    tel: string,
    id: string
}

interface BookingResponseBody {
    _id: string,
    bookingDate: string, 
    user: string, 
    company: CompanyBookingResponse, 
    createdAt: string,
    __v: number
}

interface BookingsResponseBody {
    success: boolean,
    count: number,
    data: BookingResponseBody[]
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