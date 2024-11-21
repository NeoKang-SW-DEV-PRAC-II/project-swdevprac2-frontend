'use client'
import { useCompanies } from "@/app/api/companies";
import { TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function AddCompany() {
    const router = useRouter();

    const params = useParams<{ cid: string }>();
    const { cid } = params;
    const { data: session } = useSession();
    const token: string = session?.user.token ?? "";

    if (!session) {
        return null;
    }

    if (session.user.role !== 'admin') {
        return null
    }

    const { createCompany } = useCompanies();

    const [name, setName] = useState<string>("");
    const [business, setBusiness] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [province, setProvince] = useState<string>("");
    const [postalcode, setPostalcode] = useState<string>("");
    const [picture, setPicture] = useState<string>("");

    const postCompany = useCallback(async (item: CompanyRequestBody) => {
        await createCompany(item, token);
    }, []);

    const remakeCompany = () => {
        const item: CompanyRequestBody = {
            name: name,
            business: business,
            tel: tel,
            address: address,
            province: province,
            postalcode: postalcode,
            picture: picture
        }
        postCompany(item);
        router.push('/companies')
    }

    return true ? (
        <div>
        <div className="bg-white">
        <TextField label="Company Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Business" value={business} onChange={(e) => setBusiness(e.target.value)} />
        <TextField label="Tel" value={tel} onChange={(e) => setTel(e.target.value)} />
        <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <TextField label="Province" value={province} onChange={(e) => setProvince(e.target.value)} />
        <TextField label="Postal Code" value={postalcode} onChange={(e) => setPostalcode(e.target.value)} />
        <TextField label="Picture" value={picture} onChange={(e) => setPicture(e.target.value)} />
        </div>

        <div>
        <button name="Book Interview"
                className="block rounded-md bg-lime-600 hover:bg-lime-700 w-2/4 px-3 py-2 shadow-lg"
                onClick={remakeCompany}>
                    Save
                </button></div></div>
    ) : (<div>Loading...</div>)
}