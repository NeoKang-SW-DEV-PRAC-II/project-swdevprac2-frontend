'use client';
import { MenuItem, Select, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useParams, useRouter } from "next/navigation";
import router from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useBookings } from "@/app/api/bookings";
import DateReserve from "@/components/DateReserve";
import { useCompanies } from "@/app/api/companies";
import Image from "next/image";

export default function BookingEdit() {
    const router = useRouter();
    const params = useParams<{ bid: string }>();
    const { bid } = params;
    const { updateBooking } = useBookings();

    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)

    const postBooking = useCallback(async (bid: string, body: BookingRequestBody) => {
        await updateBooking(bid, body);
    }, []);
    
    const remakeBooking = () => {
        if(pickupDate) {
            const item: BookingRequestBody = {
                bookingDate: pickupDate ? dayjs(pickupDate).format("YYYY-MM-DD") : "",
                createdAt: dayjs().format("YYYY-MM-DD")
            }
            postBooking(bid, item);
        }
        router.push('/mybooking')
    }
    
    return (
        <main className="py-10 w-[100%] flex flex-col items-center space-y-4">
            <div className="bg-neutral-100 px-10 py-5 flex flex-col space-y-5 border-solid border-2">
                <div className="text-2xl font-medium text-center text-cyan-600">Booking Edited</div>
                <DateReserve onDateChange={(value:Dayjs) => {setPickupDate(value)}}/>
                <button name="Book Interview"
                className="block rounded-md bg-lime-600 hover:bg-lime-700 w-2/4 px-3 py-2 shadow-lg"
                onClick={remakeBooking}>
                    Save
                </button>
            </div>
        </main>
    )
}