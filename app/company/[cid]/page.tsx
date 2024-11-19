'use client'

import { useParams } from "next/navigation"

import { CompanyRequestBody, CompanyResponseBody, GetCompanyByIdResponse } from "@/interfaces";

import { useCallback, useEffect, useState } from "react";
import { useCompanies } from "@/app/api/companies";

export default function CompanyInformation() {
    const params = useParams<{ cid: string }>();
    const { cid } = params;
    const { getCompanyById } = useCompanies();
    const [companyResponse, setCompanyResponse] = useState<CompanyResponseBody | null>(null);

    const updateCompany = useCallback(async (cid : string) => {
        const res = await getCompanyById(cid)
        setCompanyResponse(res.data)
    } , [])
    useEffect(() => {
        updateCompany(cid);
    } , [cid])
    const company: CompanyResponseBody | null = companyResponse;

    return (
        <div>
            <div>Name of Company: {company?.name}</div>
            <div>Business: {company?.business}</div>
            <div>Address: {company?.address}</div>
            <div>Province: {company?.province}</div>
            <div>Postal Code: {company?.postalcode}</div>
            <div>Telephone: {company?.tel}</div>
            <div>Picture: {company?.picture}</div>
        </div>
    )
}