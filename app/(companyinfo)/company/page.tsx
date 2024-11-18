import getHositals from "@/libs/getCompanies";
import CompanyCatalog from "@/components/CompanyCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import SearchBar from "@/components/SearchBar";

export default async function Company() {
    const Companies: Promise<CompanyJson> = await getHositals()

    return (
        <main>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <SearchBar basePath="company" />
            <CompanyCatalog companiesJson={Companies}/>
            </Suspense>
        </main>
    )
}