export const useBookings = () => {
    async function getBookings() {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/bookings`, {
            method: 'GET', 
        })
        if(!response.ok) {
            throw new Error("Failed to get bookings")
        }
        
        const data = await response.json()
        return data
    }

    async function createBooking(cid: string, body: BookingRequestBody) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies/${cid}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        if(!response.ok) {
            throw new Error("Failed to create a booking")
        }
        
        const data = await response.json()
        return data
    }

    async function getBookingById(bid: string) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/bookings/${bid}`, {
            method: 'GET',
        })
        if(!response.ok) {
            throw new Error("Failed to get booking by id")
        }
        
        const data = await response.json()
        return data
    }

    async function updateBooking(bid: string, body: BookingRequestBody) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/bookings/${bid}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        if(!response.ok) {
            throw new Error("Failed to update a booking")
        }
        
        const data = await response.json()
        return data
    }

    async function deleteBooking(bid: string) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/bookings/${bid}`, {
        method: 'DELETE',
        })
        if(!response.ok) {
            throw new Error("Failed to delete company by id")
        }
        
        const data = await response.json()
        return data
    }

    return {
        getBookings,
        createBooking,
        getBookingById,
        updateBooking,
        deleteBooking, 
    }
}