'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function DateReserve({onDateChange}: {onDateChange: Function}) {

    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
    const [location, setLocation] = useState('BKK')

    return (
        <form className="w-2/4 space-y-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                value={reserveDate}
                onChange={(value) => {setReserveDate(value); onDateChange(value)}}
                />
            </LocalizationProvider>
        </form>
    );
}
