'use client'

import { useBookings } from "@/app/api/bookings";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function BookingList({userId}: {userId: string}) {
    const router = useRouter();

    const { getBookings, deleteBooking } = useBookings();
    const [bookingResponse, setBookingResponse] = useState<BookingsResponseBody | null>(null);
    const [ x, setX ] = useState<number>(0)

    const { data: session } = useSession();
    const token: string = session?.user.token ?? "";

    const updateBooking = useCallback(async () => {
        const res = await getBookings(token);
        setBookingResponse(res)
    } , [])
    const removeBooking = useCallback(async (bid: string) => {
        await deleteBooking(bid, token);
        setX(1 - x)
    } , [])
    useEffect(() => {
        updateBooking();
    }, [x])

    const bookItems: BookingsResponseBody | null = bookingResponse;

    console.log(userId)

    return bookItems ? (
        <>
            {bookItems.data.length === 0 ? (
                <div className="text-center text-red-500">No Interview Booking</div>
            ) : (
                bookItems.data
                    .filter((bookingItem: BookingResponseBody) => 
                        userId === "" || true
                    )
                    .map((bookingItem: BookingResponseBody) => (
                        <div
                            className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                            key={bookingItem._id}
                        >
                            <div className="text-md text-gray-950">{bookingItem.user}</div>
                            <div className="text-md text-gray-950">{bookingItem.company.name}</div>
                            <div className="text-md text-gray-950">{bookingItem.bookingDate}</div>
                            <div className="text-md text-gray-950">{bookingItem.createdAt}</div>
                            <button
                                className="block rounded-md bg-red-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeBooking(bookingItem._id);
                                }}
                            >
                                Remove Booking
                            </button>
                            <button
                                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(`/bookings/manage/edit/${bookingItem._id}`);
                                }}
                            >
                                Edit Booking
                            </button>
                        </div>
                    ))
            )}
        </>
    ) : (
        <div></div>
    );    
}