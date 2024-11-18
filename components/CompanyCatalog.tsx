import { Link } from "@mui/material";
import Card from "./Card";

export default async function CompanyCatalog({companiesJson}:{companiesJson:Promise<CompanyJson>}) {
    const CompanyJsonUse = await companiesJson
    return (
        <>
            Explore {CompanyJsonUse.count} models in our catalog
            <div style={{margin:"20px", display:"flex", flexDirection:"row", 
                alignContent:"space-around", justifyContent:"space-around", 
                flexWrap:"wrap", padding:"10px"
            }}>
            {
                CompanyJsonUse.data.map((companyItem:CompanyItem)=>(
                    
                    <Link key={companyItem.id} href={`/company/${companyItem.id}`} className="w-1/5">
                    <Card imgSrc={companyItem.picture} companyName={companyItem.name}/>
                    </Link>
                ))
            }
            </div>
        </>
    )
}