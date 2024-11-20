'use client'
import { useLoading } from '@/app/context/LoadingContext';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Landing() {
    const { loading, setLoading } = useLoading();
    const router = useRouter();

    return (
        loading ? (
            <div></div>
        ) : (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-16 py-6 sm:py-16">
                <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                        An Amazing Event You Shouldn't Miss!!
                    </h1>
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal"><strong>Job Fair 2024</strong></h1>
                    <p className="text-black-500 mt-4 mb-6">
                        Get ready for one of the biggest career opportunities of the year! Job Fair 2024 is your gateway to connecting with top companies, industry leaders, and recruiters who are actively looking for talented individuals like you.
                    </p>
                    <button className = {`bg-white text-cyan-600 border border-cyan-600
                    font-semibold py-2 px-2 m-2 rounded z-30 hover:bg-cyan-600 hover:text-white hover:text-white hover:border-transparent`} 
                    onClick={(e) => {e.stopPropagation(); router.push('/companies') }}>
                        Get Started
                    </button>
                </div>
                <div className="flex w-full">
                    <div className="h-full w-full">
                        <Image
                            src="/img/JobFairBg1.jpg"
                            alt="Job Fair Poster"
                            width={512}
                            height={383}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    );
}