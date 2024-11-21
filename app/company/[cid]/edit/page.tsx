'use client'
import { useCompanies } from "@/app/api/companies";
import { TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function EditCompany() {
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

    const { getCompanyById, updateCompany } = useCompanies();

    const [ company, setCompany ] = useState<CompanyResponseBody | null>(null);

    const setCompanyResponeCallback = useCallback(async (cid: string) => {
        const res = await getCompanyById(cid);
        setCompany(res.data);

        setName(res.data.name);
        setBusiness(res.data.business);
        setTel(res.data.tel);
        setAddress(res.data.address);
        setProvince(res.data.province);
        setPostalcode(res.data.postalcode);
        setPicture(res.data.picture);
    }, []);
    useEffect(() => {
        setCompanyResponeCallback(cid);
    }, [cid]);

    console.log(company);

    const [name, setName] = useState<string>(company?.name ?? "");
    const [business, setBusiness] = useState<string>(company?.business ?? "");
    const [tel, setTel] = useState<string>(company?.tel ?? "");
    const [address, setAddress] = useState<string>(company?.address ?? "");
    const [province, setProvince] = useState<string>(company?.province ?? "");
    const [postalcode, setPostalcode] = useState<string>(company?.postalcode ?? "");
    const [picture, setPicture] = useState<string>(company?.picture ?? "");

    const putCompany = useCallback(async (cid: string, item: CompanyRequestBody) => {
        await updateCompany(cid, item, token);
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
        putCompany(cid, item);
        router.push('/companies')
    }

    return company ? (
        <div className="py-10 h-[200px] flex flex-col items-center space-y-4">
            <div className="bg-neutral-100 px-10 py-5 flex flex-col space-y-5 border-solid border-2">
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
                className="block rounded-md bg-lime-600 hover:bg-lime-700 w-5/5 px-3 py-2 shadow-lg"
                onClick={remakeCompany}>
                    Save
                </button></div></div>
    ) : (<div>Loading...</div>)
}