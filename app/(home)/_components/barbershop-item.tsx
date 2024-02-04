"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    const router = useRouter();
    const handleBookingClick = () => {
        router.push(`/barbershops/${barbershop.id}`);
    }

    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className=" p-1">
                <div className="w-full h-[159px] p-1 relative">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge className=" bg-[#221C3D] hover:bg-[#221C3D] opacity-90 flex items-center gap-1">
                            <StarIcon size={12} className=" fill-primary text-primary" />
                            <span className="text-xs">5,0</span>
                        </Badge>
                    </div>
                    <Image
                        src={barbershop.imageUrl}
                        alt={barbershop.name}
                        style={{
                            objectFit: "cover",
                        }}
                        fill
                        className="rounded-2xl"
                    />
                </div>
                <div className="p-2 flex flex-col gap-1">
                    <h2 className="overflow-hidden text-ellipsis text-nowrap font-bold mt-2">{barbershop.name}</h2>
                    <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">{barbershop.address}</p>
                    <Button onClick={handleBookingClick} className="w-full mt-2" variant='secondary'>Reservar</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default BarbershopItem;