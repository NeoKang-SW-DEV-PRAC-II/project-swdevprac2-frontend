import { Link } from "@mui/material";
import Card from "./Card";

export default function CompanyCatalog({companiesJson}: {companiesJson: CompaniesResponseBody | null}) {
    return (
        <>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", 
                alignContent:"space-around", justifyContent:"space-around", 
                flexWrap:"wrap", padding:"10px"
            }}>
            {
                companiesJson?.data?.map((companyItem: CompanyResponseBody)=>(
                    
                    <Link key={companyItem.id} href={`/companies/${companyItem.id}`} className="w-1/5">
                    <Card imgSrc={companyItem.picture} companyName={companyItem.name}/>
                    </Link>
                ))
            }
            </div>
        </>
    )
}