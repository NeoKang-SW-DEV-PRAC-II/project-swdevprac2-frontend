'use client'
import CompanyCatalog from "@/components/CompanyCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import SearchBar from "@/components/Searchbar";
import { useCallback, useEffect, useState } from "react";
import { useCompanies } from "@/app/api/companies";
import { useLoading } from "@/app/context/LoadingContext";

export default function Companies() {
    const { getCompanies } = useCompanies();
    const [companyResponse, setCompanyResponse] = useState<CompaniesResponseBody | null>(null);

    const updateCompany = useCallback(async () => {
        const res = await getCompanies()
        // console.log(res)
        setCompanyResponse(res)
    } , [])
    useEffect(() => {
        updateCompany();
    }, [])
    const companies: CompaniesResponseBody | null = companyResponse;

    const { loading, setLoading } = useLoading();

    return (
        loading ? (
            <div></div>
        ) : (
        <main>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CompanyCatalog companiesJson={companies}/>
            </Suspense>
        </main>
        )
    )
}