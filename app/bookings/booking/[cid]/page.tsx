'use client';
import { TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useBookings } from "@/app/api/bookings";
import DateReserve from "@/components/DateReserve";
import { useCompanies } from "@/app/api/companies";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Booking() {
    const router = useRouter();
    const params = useParams<{ cid: string }>();
    const { cid } = params;
    const { createBooking } = useBookings();

    const { getCompanyById } = useCompanies();
    const [companyResponse, setCompanyResponse] = useState<CompanyResponseBody | null>(null);

    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)

    const { data: session } = useSession();
    const token: string = session?.user.token ?? "";

    const postBooking = useCallback(async (cid: string, body: BookingRequestBody) => {
        await createBooking(cid, body, token);
    }, []);

    const updateCompany = useCallback(async (cid: string) => {
        const res = await getCompanyById(cid);
        setCompanyResponse(res.data);
    }, []);
    useEffect(() => {
        updateCompany(cid);
    }, [cid]);
    
    const makeBooking = () => {
        if(name && lastName && pickupDate) {
            const item: BookingRequestBody = {
                bookingDate: pickupDate ? dayjs(pickupDate).format("YYYY-MM-DD") : "",
                createdAt: dayjs().format("YYYY-MM-DD")
            }
            postBooking(cid, item);
        }
        router.push('/bookings/manage')
    }

    const company: CompanyResponseBody | null = companyResponse;
    
    return company ? (
        <main className="py-10 h-[200px] flex flex-col items-center space-y-4">
            <div className="bg-neutral-100 px-10 py-5 flex flex-col space-y-5 border-solid border-2">
                <div className="text-2xl font-medium text-center text-cyan-600">Booking for {company?.name}</div>
                <div className="mx-4 my-4">
                    <Image
                        src={company?.picture}
                        alt="Company Logo"
                        width={350}
                        height={350}
                        layout="cover"
                        loader={({src}) => src}
                    />
                </div>
                <TextField variant="standard" name="Name" label="Name" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                <TextField variant="standard" name="Lastname" label="Lastname" value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
                <DateReserve onDateChange={(value:Dayjs) => {setPickupDate(value)}}/>
                <button name="Book Interview"
                className="block rounded-md bg-lime-600 hover:bg-lime-700 w-2/4 px-3 py-2 shadow-lg"
                onClick={makeBooking}>
                    Book
                </button>
            </div>
        </main>
    ) : (
        null
    );
}