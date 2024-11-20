'use client'

import { useBookings } from "@/app/api/bookings";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function BookingList() {
    const router = useRouter();

    const { getBookings, deleteBooking } = useBookings();
    const [bookingResponse, setBookingResponse] = useState<BookingsResponseBody | null>(null);

    const updateBooking = useCallback(async () => {
        const res = await getBookings()
        setBookingResponse(res)
    } , [])
    const removeBooking = useCallback(async (bid: string) => {
        await deleteBooking(bid)
    } , [])
    useEffect(() => {
        updateBooking();
    }, [])
    const bookItems: BookingsResponseBody | null = bookingResponse;

    return bookItems ? (
        <>
        {
            bookItems.data.length === 0 ? (
                <div className="text-center text-red-500">No Interview Booking</div>
            ) : (
            bookItems.data.map((bookingItem: BookingResponseBody) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem._id}>
                <div className="text-md">{bookingItem.user}</div>
                <div className="text-md">{bookingItem.company}</div>
                <div className="text-md">{bookingItem.bookingDate}</div>
                <div className="text-md">{bookingItem.createdAt}</div>
                <button className="block rounded-md bg-red-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
                onClick={(e) => {e.stopPropagation();  removeBooking(bookingItem._id)}}>
                    Remove Booking
                </button>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
                onClick={(e) => {e.stopPropagation();  router.push(`/companies/booking/edit/${bookingItem._id}`)}}>
                    Edit Booking
                </button>
                </div>
            ))
            )
        }
        </>
    ) : (
        <div></div>
    )
}