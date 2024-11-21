import { Link } from "@mui/material";
import Card from "./Card";
import { useRouter } from "next/navigation";

export default function CompanyCatalog({companiesJson, isAdmin}: {companiesJson: CompaniesResponseBody | null, isAdmin: boolean}) {

    const router = useRouter();

    const addCompany = () => {
        router.push('/company/add')
    }

    return (
            <div className = "flex flex-col">
            {isAdmin && ( 
            <div>
                <button name="Book Interview"
                    className="block rounded-md bg-lime-600 hover:bg-lime-700 w-2/4 px-3 py-2 shadow-lg"
                    onClick={addCompany}>
                        Add Company
                    </button>
                </div>
            )
            }
            <div style={{margin:"20px", display:"flex", flexDirection:"row", 
                alignContent:"space-around", justifyContent:"space-around", 
                flexWrap:"wrap", padding:"10px"
            }}>
            {
                companiesJson?.data?.map((companyItem: CompanyResponseBody)=>(
                    <div key={companyItem.id} className="w-1/5">
                        <Card companyJson={companyItem} isAdmin = {isAdmin}/>
                    </div>
                ))
            }
            </div>
            </div>
    )
}