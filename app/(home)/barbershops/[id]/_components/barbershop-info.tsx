"use client";

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, Router, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
    barbershop: Barbershop
}

const BarbershoopInfo = ({ barbershop }: BarbershopInfoProps) => {
    const router = useRouter()
    const handleBackClick = () => {
        router.replace('/');
    }
    return (
        <div>
            <div className="h-[250px] w-full relative">
                <Button onClick={handleBackClick} size="icon" variant="outline" className="absolute z-50 top-4 left-4">
                    <ChevronLeftIcon />
                </Button>
                <Button size="icon" variant="outline" className="absolute z-50 top-4 right-4">
                    <MenuIcon />
                </Button>
                <Image
                    className="w-full opacity-75"
                    src={barbershop.imageUrl}
                    alt={barbershop.name}
                    fill
                    style={{
                        objectFit: "cover",
                    }} />
            </div>

            <div className="px-5 py-3 flex flex-col gap-1 border-b border-solid border-secondary">
                <h1 className=" text-xl font-bold">{barbershop.name}</h1>
                <div className="flex items-center gap-2">
                    <MapPinIcon size={18} className="text-primary" />
                    <p className="text-sm">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-2">
                    <StarIcon size={18} className="text-primary" />
                    <p className="text-sm">5,0 (915 avaliações)</p>
                </div>
            </div>
        </div>
    );
}

export default BarbershoopInfo;