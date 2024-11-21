'use client'

import BookingList from "@/components/BookingList"
import { useSession } from "next-auth/react"

export default function MyBookingPage() {
    const { data: session } = useSession()

    if(!session) {
        return (
            <main>
                <div className="text-center text-lg">
                    Please sign in to access this page
                </div>
            </main>
        )
    }

    console.log(session.user)   

    return (
        <main>
            <BookingList userId = {session?.user?._id}></BookingList>
        </main>
    )
}