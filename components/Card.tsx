'use client'
import Image from "next/image"
import InteractionCard from "./InteractiveCard";
import { useRouter } from "next/navigation";

interface Props {
    imgSrc: string;
    companyName: string;
}

export default function Card({companyJson}: {companyJson: CompanyResponseBody | null}) {
    const router = useRouter();

    return companyJson ? (
        <InteractionCard contentName={companyJson?.name}>
            <div className="img w-[100%] h-[70%] relative object-cover">
                <Image src={companyJson?.picture}
                    alt='cover'
                    fill={true} />
            </div>
            <h1 className="font-medium text-gray-950 px-3">
                <strong>{companyJson.name}</strong>
            </h1>
            <h1 className="font-medium text-gray-950 px-3">
                business: {companyJson.business}
            </h1>
            <h1 className="font-medium text-gray-950 px-3">
                tel: {companyJson.tel}
            </h1>
            <button name="Book Interview"
            className="block rounded-md bg-cyan-600 hover:bg-cyan-700 w-2/4 mx-3 my-2 px-3 py-2 shadow-lg"
            onClick={(e) => {e.stopPropagation(); router.push(`/companies/${companyJson.id}`) }}>
                more detail
            </button>
        </InteractionCard>
    ) : (
        <div></div>
    )
}