'use client'
import Image from "next/image"
import InteractionCard from "./InteractiveCard";
import { Rating } from '@mui/material';
import { useState } from 'react';

interface Props {
    imgSrc: string;
    companyName: string;
    onRating?: Function;
}

export default function Card({imgSrc, companyName, onRating} : Props) {
    const [rating, setRating] = useState<number | null>(0);
    return (
        <InteractionCard contentName={companyName}>
            <div className="img w-[100%] h-[70%] relative object-cover">
                <Image src={imgSrc}
                    alt='cover'
                    fill={true} />
            </div>
            <div className="txt p-[10px]">
                {companyName}
            </div>
            <Rating size = "medium"
                    id = {companyName + " " + "Rating"}
                    name = {companyName + " " + "Rating"}
                    data-testid = {companyName + " " + "Rating"}
                    value = {rating}
                    onChange={(event, newRating) => {
                        setRating(newRating);
                        if(onRating) {
                            onRating(companyName, newRating);
                        }
                    }}
            />
        </InteractionCard>
    )
}