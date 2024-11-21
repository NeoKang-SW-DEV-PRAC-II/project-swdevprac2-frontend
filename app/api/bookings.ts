export const useBookings = () => {
    async function getBookings(token: string) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/bookings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        if(!response.ok) {
            throw new Error("Failed to get bookings")
        }
        
        const data = await response.json()
        return data
    }

    async function createBooking(cid: string, body: BookingRequestBody, token: string) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/companies/${cid}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        if(!response.ok) {
            throw new Error("Failed to create a booking")
        }
        
        const data = await response.json()
        return data
    }        

    async function getBookingById(bid: string, token: string) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/bookings/${bid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        if(!response.ok) {
            throw new Error("Failed to get booking by id")
        }
        
        const data = await response.json()
        return data
    }

    async function updateBooking(bid: string, body: BookingRequestBody, token: string) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/bookings/${bid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        if(!response.ok) {
            throw new Error("Failed to update booking by id")
        }
        
        const data = await response.json()
        return data
    }

    async function deleteBooking(bid: string, token: string) {
        await new Promise((resolve)=>setTimeout(resolve, 1000))

        const response = await fetch(`https://project-swdevprac2-backend.vercel.app/api/v1/bookings/${bid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        if(!response.ok) {
            throw new Error("Failed to delete booking by id")
        }
        
        const data = await response.json()
        return data
    }

    return {
        getBookings,
        createBooking,
        getBookingById,
        updateBooking,
        deleteBooking
    }
}