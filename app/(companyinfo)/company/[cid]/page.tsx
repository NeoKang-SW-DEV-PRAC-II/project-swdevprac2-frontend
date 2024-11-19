import getCompany from "@/libs/getCompany"
import Image from "next/image"

export default async function CompanyDetailPage({params} : {params : {cid : string}}) {
    const companyDetail = await getCompany(params.cid);

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{companyDetail.data.name}</h1>
            <div className="flex flex-row my-5">
            <Image src={companyDetail.data.picture}
                alt="Company Picture"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] bg-black"
            />
            <div className="text-md mx-5 text-left">
                Name: {companyDetail.data.name}
                <div>Address: {companyDetail.data.address}</div>
                <div>District: {companyDetail.data.district}</div>
                <div>Postal: {companyDetail.data.postalcode}</div>
                <div>Tel: {companyDetail.data.tel}</div>
            </div>
            </div>
        </main>
    )
}