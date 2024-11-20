"use client";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useCompanies } from "@/app/api/companies";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button, MenuItem, Select } from "@mui/material";

import { Building2, MapPin, Phone } from "lucide-react"

export default function CompanyInformation() {
    const router = useRouter();
    const params = useParams<{ cid: string }>();
    const { cid } = params;
    const { getCompanyById } = useCompanies();
    const [companyResponse, setCompanyResponse] = useState<CompanyResponseBody | null>(null);

    const updateCompany = useCallback(async (cid: string) => {
        const res = await getCompanyById(cid);
        setCompanyResponse(res.data);
    }, []);
    useEffect(() => {
        updateCompany(cid);
    }, [cid]);
    
    const company: CompanyResponseBody | null = companyResponse;

    const [selectedPosition, setSelectedPosition] = useState("");

    const positions = [
        {
            id: "1",
            title: "Software Engineer",
            description:
                "Develop and maintain our core AI algorithms and infrastructure.",
        },
        {
            id: "2",
            title: "UX Designer",
            description:
                "Create intuitive and engaging user experiences for our products.",
        },
        {
            id: "3",
            title: "Data Scientist",
            description:
                "Analyze complex datasets to drive product improvements and insights.",
        },
        {
            id: "4",
            title: "Product Manager",
            description:
                "Lead the development of new products from conception to launch.",
        },
    ];

    const handlePositionChange = (value: string) => {
        setSelectedPosition(value);
    };

    const selectedJob = positions.find(
        (position) => position.id === selectedPosition
    );

    return company ? (
        <div className="container mx-auto px-4 py-8">
            <div className="w-full max-w-4xl mx-auto overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:h-72">
                        <Image
                            src={company?.picture}
                            alt="Company banner"
                            layout="fill"
                            objectFit="cover"
                            className="bg-white rounded-2xl"
                        />
                    </div>
                    <div className="p-6 lg:p-8">
                        <div className="p-0 mb-6">
                            <div className="text-3xl lg:text-4xl font-bold mb-4">
                                {company?.name}
                            </div>
                            <div className="text-base lg:text-lg">
                                <div className="flex items-center text-sm">
                                    <Building2 className="w-4 h-4 mr-2" />
                                    <span>{company.business}</span>
                                </div>
                                <div className="flex items-start text-sm">
                                    <MapPin className="w-4 h-4 mr-2 mt-1" />
                                    <address className="not-italic">
                                        {company.address}<br />
                                        {company.province}, {company.postalcode}
                                    </address>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <a href={`tel:${company.tel}`} className="hover:underline">{company.tel}</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-0">
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-4">Available Positions</h2>
                        <Select
                            value={selectedPosition}
                            onChange={(e) => handlePositionChange(e.target.value)}
                            className="min-w-full bg-white"
                        >
                            {positions.map((position) => (
                                <MenuItem key={position.id} value={position.id}>
                                    {position.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    {selectedJob && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-2">
                                {selectedJob.title}
                            </h3>
                            <p className="text-muted-foreground">{selectedJob.description}</p>
                        </div>
                    )}
                </div>
                <div className="p-0 mt-6 bg-white tex">
                    <Button
                        className="w-full"
                        disabled={!selectedJob}
                        onClick={(e) => {e.stopPropagation(); router.push(`/companies/booking/${cid}`) }}
                    >
                        Apply Now
                    </Button>
                </div>
            </div>
        </div>
    ) : (
        <div></div>
    );
}
